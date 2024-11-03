// Usage.jsx
'use client';

import { useState, useEffect } from 'react';
import { Forward } from './icons/forward';
import { Bar, BarChart, XAxis, YAxis, Tooltip } from 'recharts';
import { ChartContainer } from '@/components/ui/chart';

const chartConfig = {
    usage: {
        label: 'Usage',
        color: '#60a5fa',
    },
};

const Usage = () => {
    const [usageData, setUsageData] = useState([]);

    useEffect(() => {
        // Fetch the usage data when the component mounts
        const fetchUsageData = async () => {
            try {
                const response = await fetch('./api/usage.js'); // Call the API endpoint
                const result = await response.json();

                // Debugging: log the result from the API
                console.log("Fetched usage data:", result.data);

                setUsageData(result.data); // Set the fetched data to state
            } catch (error) {
                console.error('Error fetching usage data:', error);
            }
        };

        fetchUsageData();
    }, []);

    // Debugging: log the usageData state after it's set
    console.log("Usage data for chart:", usageData);

    return (
        <div className="space-y-4">
            <div className="inline-flex items-center justify-center p-3 rounded-lg">
                <div className="w-6 h-6 text-green-500">
                    <Forward />
                </div>
            </div>
            <h3 className="text-xl">Usage Chart</h3>
            <div className="text-zinc-500 leading-relaxed">
                <ChartContainer
                    config={chartConfig}
                    className="min-h-[300px] w-full"
                    style={{ backgroundColor: '#fff', padding: '20px' }} // Ensure proper background color
                >
                    <BarChart width={500} height={300} data={usageData}>
                        <XAxis dataKey="name" stroke="#000" /> {/* Set stroke color for visibility */}
                        <YAxis stroke="#000" />
                        <Tooltip />
                        <Bar dataKey="usage" fill="#60a5fa" />
                    </BarChart>
                </ChartContainer>
            </div>
        </div>
    );
};

export default Usage;
