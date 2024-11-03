import React from 'react';

const BenefitCard = ({ icon, title, description }: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) => {
    return <div className="space-y-4">
        <div className="inline-flex items-center justify-center p-3 rounded-lg">
            <div className="w-6 h-6 text-green-500">
                {icon}
            </div>
        </div>
        <h3 className="text-xl">{title}</h3>
        <div className="text-zinc-500 leading-relaxed">
            {description}
        </div>
    </div>;
}

export default BenefitCard;