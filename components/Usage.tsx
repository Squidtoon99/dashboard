'use client';

import { Forward } from "./icons/forward";

import { Pie, PieChart } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartConfig = {
    usage: {
        label: "Usage",
        color: "#60a5fa",
    },
} satisfies ChartConfig;



const Usage = ({ usageData }: { usageData: any; }) => {
    console.log("usage data: ", usageData);
    return<div className="space-y-4">
        <div className="inline-flex items-center justify-center p-3 rounded-lg">
            <div className="w-6 h-6 text-green-500">
                <Forward/>
            </div>
        </div>
        <h3 className="text-xl">{"Chart"}</h3>
        <div className="text-zinc-500 leading-relaxed">

            <ChartContainer config={chartConfig} className="min-h-[200px] w-[200px]">
                <PieChart width={200} height={200}>
                    <Pie dataKey="usage" data={usageData} fill="#60a5fa" />
                </PieChart>
            </ChartContainer>
        </div>
    </div>
};

export default Usage;
