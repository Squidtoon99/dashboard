import { Card, CardContent } from "@/components/ui/card";
import {useEffect} from "react"
import {Labels, Background} from "./vectors";
import { Session } from "@/lib/types";

const FadeGradient = () => {
    return <div className="absolute w-1/4 h-full right-0 pointer-events-none bg-gradient-to-r from-transparent to-black"></div>
}

const colors = {
    Work: "bg-green-500",
    Entertainment: "bg-red-500",
    Utility: "bg-yellow-500",
    Idle: "bg-gray-500",
    Unclear: "bg-gray-500"
}
const TimelineSection = ({ sessions, now }: {sessions: Session[], now: number}) => {
    // labels is a list of times as a 2 digit number (the horu) (minimum 6, maximum 24) starting from 6 to 24 or sessions[0].start to sessions[sessions.length - 1].start
    // the distance between each label is 141
    
    let labels = [];
    for (let i = 6; i < 24; i++) {
        labels.push(i);
    }


    console.log("Generated labels: ", labels);
    let totalDuration = 0;
    for (const session of sessions) {
        totalDuration += session.duration;
    }
    console.log("Total duration: ", totalDuration);
    return <>
        <div className="space-y-8 relative">
            <figure className="relative w-[100%] justify-self-center col-span-12">
                <div className="overflow-y-scroll pr-[100px] relative" style={{ scrollbarWidth: "none" }}>
                    <div className="relative z-10 flex">
                        {sessions.map((session, idx) => {
                            // make the width the percentage of the duration of the session
                            let width = (session.duration / totalDuration) * 100;
                            // make the left the percentage of the duration of the session
                            let left = (((session.start*1000) - now) / totalDuration) * 100;

                            return <div key={session.id} className={`${colors[session.classification]} absolute`} style={{ width: `${width+2}%`, left: `${idx * 30}px`, opacity: "70%"}}>
                                <div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-6 h-24 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                        <FadeGradient />
                        <svg id="svg-timeline-c" width="1732" height="174" viewBox="0 0 1732 174" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Labels />
                        <Background labels={[...labels]} />
                        </svg>
                </div>
            </figure>
        </div>
    </>;
}

export default TimelineSection;