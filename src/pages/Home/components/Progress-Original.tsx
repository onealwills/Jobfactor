import { Typography } from "@mui/material";

type Props = {
    strokeWidth?: number,
    value: number,
    divider?: number
}
const Progress = ({ strokeWidth = 12, value = 0, divider = 100 }: Props) => {
    const radius = (50 - strokeWidth / 2);
    const pathDescription = `
      M 50,50 m 0,-${radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
      a ${radius},${radius} 0 1 1 0,-${2 * radius}
    `;

    const diameter = Math.PI * 2 * radius;
    const percentage = (value / divider) * 100;

    return (
        <>
            <svg
                className={'CircularProgressbar'}
                viewBox="0 0 100 100"
                width={150}
                height={150}
                style={{
                    filter: "drop-shadow(0px 0px 0px rgb(0 0 0 / 0.5))",
                    margin: "auto"
                }}
            >
                
                <path
                    className="CircularProgressbar-trail"
                    d={pathDescription}
                    strokeWidth={strokeWidth}
                    fillOpacity={0}
                    style={{
                        stroke: 'white',
                    }}
                />

                <path
                    className="CircularProgressbar-path"
                    d={pathDescription}
                    strokeWidth={strokeWidth}
                    fillOpacity={0}
                    style={{
                        stroke: '#05668D',
                        strokeLinecap: 'round',
                        strokeDasharray: `${diameter}px ${diameter}px`,
                        strokeDashoffset: `${((100 - percentage) / 100 * diameter)}px`,
                        transform: 'rotate(0.5turn)',
                        transformOrigin: "center center",
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                    }}
                />
                <circle cx="50" cy="50" r={'33'} fill='#FFC24C'></circle>
                <text
                    x={50}
                    y={50}
                    style={{
                        backgroundColor: '#FFC24C',
                        borderRadius: 100,
                        padding: 5,
                        fontWeight: '700',
                        dominantBaseline: 'central',
                        textAnchor: 'middle',
                        fill: 'white',
                        fontSize: '16px',
                        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                    }}
                >
                    {value}
                </text>
            </svg>
            <Typography
                sx={{
                    color: '#23282B',
                    fontWeight: '600',
                    fontSize: '16px',
                    fontFamily: 'open sans',
                }}
            >
                Jobfactor Score
            </Typography>
        </>
    );
};

export default Progress
