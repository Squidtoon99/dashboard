const Labels = () => {
    return <g id="timeline-labels"><text x="20" y="35">Hello World</text></g>;
};


const Background = ({ labels }: {labels: number[]}) => {
    const start = 138.2;
    const distance = 141;
    return <g id="timeline-progress-background"><g fill="#A2A2A2" fontSize="12" fontFamily="Roboto, Arial, sans-serif">
        {labels.map((label, index) => {
            return <g key={index}>
                <text x={start + distance * index} y="35">{label}</text>
            </g>;
        })}
    </g>
<line y1="-0.5" x2="141" y2="-0.5" transform="matrix(-3.36578e-06 -1 1 -5.6768e-10 139 141)" stroke="#585858" strokeDasharray="2 2"></line><line y1="-0.5" x2="141" y2="-0.5" transform="matrix(-3.36578e-06 -1 1 -5.6768e-10 279 141)" stroke="#585858" strokeDasharray="2 2"></line><line y1="-0.5" x2="141" y2="-0.5" transform="matrix(-3.36578e-06 -1 1 -5.6768e-10 419 141)" stroke="#585858" strokeDasharray="2 2"></line><line y1="-0.5" x2="141" y2="-0.5" transform="matrix(-3.36578e-06 -1 1 -5.6768e-10 559 141)" stroke="#585858" strokeDasharray="2 2"></line><line y1="-0.5" x2="141" y2="-0.5" transform="matrix(-3.36578e-06 -1 1 -5.6768e-10 699 141)" stroke="#585858" strokeDasharray="2 2"></line><line y1="-0.5" x2="141" y2="-0.5" transform="matrix(-3.36578e-06 -1 1 -5.6768e-10 839 141)" stroke="#585858" strokeDasharray="2 2"></line><line y1="-0.5" x2="141" y2="-0.5" transform="matrix(-3.36578e-06 -1 1 -5.6768e-10 979 141)" stroke="#585858" strokeDasharray="2 2"></line><line y1="-0.5" x2="141" y2="-0.5" transform="matrix(-3.36578e-06 -1 1 -5.6768e-10 1119 141)" stroke="#585858" strokeDasharray="2 2"></line><line y1="-0.5" x2="141" y2="-0.5" transform="matrix(-3.36578e-06 -1 1 -5.6768e-10 1259 141)" stroke="#585858" strokeDasharray="2 2"></line><line y1="-0.5" x2="141" y2="-0.5" transform="matrix(-3.36578e-06 -1 1 -5.6768e-10 1399 141)" stroke="#585858" strokeDasharray="2 2"></line><line y1="-0.5" x2="141" y2="-0.5" transform="matrix(-3.36578e-06 -1 1 -5.6768e-10 1539 141)" stroke="#585858" strokeDasharray="2 2"></line><line y1="-0.5" x2="141" y2="-0.5" transform="matrix(-3.36578e-06 -1 1 -5.6768e-10 1679 141)" stroke="#585858" strokeDasharray="2 2"></line></g>;
}

// what is the distance between each label?

export {Labels, Background};