// pages/Home.jsx
import MetricCard from "@/components/MetricCard";
import TimelineSection from "@/components/timeline/TimelineSection";
import BenefitCard from "@/components/BenefitCard";
import Usage from "@/components/Usage";
import { Diamond } from "@/components/icons/diamond";
import { Session } from "@/lib/types";
import { getData, getUsage } from '@/lib/redis';

export default async function Home() {

  const sessions = await getData();
  const usageData = await getUsage();
  const date = new Date();
  
  return (
    <div className="min-h-screen bg-black text-white p-8 pt-24 font-mono">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <MetricCard value="56%" description="Productive today" />
          <MetricCard
            value="120"
            unit="Min"
            description="Time online today"
          />
        </div>

        {/* Timeline Section */}
        <TimelineSection sessions={sessions} now={Date.now()} />

        {/* Benefits Section */}
        <div className="pt-8">
          <div className="text-lg mb-8">+ HIGHLIGHTS TODAY</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <BenefitCard
              icon={<Diamond />}
              title="Daily Summary"
              description="Today you had `20%` more productive time than yesterday. Keep it up!"
            />
             <Usage usageData={usageData}/>
          </div>
      </div>
      </div>
    </div>
  );
}
