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
                width={122}
                height={122}
                style={{
                    filter: "drop-shadow(0px 0px 0px rgb(0 0 0 / 0.5))",
                    margin: "auto"
                }}
            >
                <path
                    className="CircularProgressbar-trail"
                    style={{
                        stroke: "#d9d9d9",
                        strokeWidth: "1px",
                        fill: "none"
                    }}
                    d="m 49.999617,0.49987251 c -27.26776,0 -49.49890951,22.23277249 -49.49890951,49.50051649 0,27.26775 22.23114951,49.50051 49.49890951,49.50051 27.26778,0 49.50051,-22.23276 49.50051,-49.50051 0,-27.267744 -22.23273,-49.50051649 -49.50051,-49.50051649 z m 0,11.00313849 a 38.497875,38.497875 0 0 1 38.49898,38.497378 38.497875,38.497875 0 0 1 -38.49898,38.49737 38.497875,38.497875 0 0 1 -38.49737,-38.49737 38.497875,38.497875 0 0 1 38.49737,-38.497378 z" 
                />

                <path
                    className="CircularProgressbar-path"
                    d={pathDescription}
                    strokeWidth={strokeWidth}
                    fillOpacity={0}
                    style={{
                        stroke: '#058FEC',
                        strokeLinecap: 'round',
                        strokeDasharray: `${diameter}px ${diameter}px`,
                        strokeDashoffset: `${((100 - percentage) / 100 * diameter)}px`,
                        transform: 'rotate(0.5turn)',
                        transformOrigin: "center center",
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                    }}
                />
                <circle cx="50" cy="50" r={'31'} fill='#FFC24C' filter="url(#shadow)"></circle>
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
                        fontSize: '20px',
                        textShadow: "0px 0px 4px rgba(0, 0, 0, 0.2)"
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
