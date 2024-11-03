const MetricCard = ({ value, description, unit }: { value: string; description: string; unit?: string; }) => {
    return <div>
        <div className="flex flex-col items-center">
            <div className="text-6xl font-bold">{value} {unit || ""}</div>
            <div className="text-zinc-500">{description}</div>
        </div>
    </div>
};

export default MetricCard;