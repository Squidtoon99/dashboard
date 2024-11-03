"use server";

import { createClient } from 'redis';
import { Session } from './types';


const client = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

const getData = async () => {
    const data = await client.sMembers('sessions');
    console.log("members: ", data);
    let sessions = [];
    for (const session of data) {
        'use cache'
        const sessionData: Session | any = await client.json.get(`sessions:${session}`);

        if (typeof sessionData !== 'object' && sessionData !== null) {
            console.warn(`Unexpected session data type: ${typeof sessionData}`);
            continue;
        }
        // if no data or not from today
        if (!sessionData) {
            continue;
        }
        
        // console.log("Data: ", sessionData);
        // if not from today
        if ((sessionData.start * 1000) < new Date().setHours(0, 0, 0, 0)) {
            console.error("Continue")
            continue;
        }
        sessions.push(sessionData);
    }

    return sessions;
};

const getUsage = async () => {
    const keys = await client.keys('agg:total:*');
    
    let data = [];
    for (const key of keys) {
        console.log("Key: ", key);
        const usage = await client.get(key);
        
        if (!usage) {
            console.warn(`No usage data for key: ${key}`);
            continue;
        }

        const name = key.replace('agg:total:', '');
        data.push({ name, usage});
    }

    return data;
}
export { getData, getUsage};