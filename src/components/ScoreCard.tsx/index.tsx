import { Box, Typography } from '@mui/material';
import React from 'react';

interface Props {
    strokeWidth?: number;
    value: number;
    divider?: number;
}

const ScoreCard = ({ strokeWidth = 12, value = 0, divider = 100 }: Props) => {
    const radius = 50 - strokeWidth / 2;
    const pathDescription = `
      M 50,50 m 0,-${radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
      a ${radius},${radius} 0 1 1 0,-${2 * radius}
    `;

    const diameter = Math.PI * 2 * radius;
    const percentage = (value / divider) * 100;
    const [color, setColor] = React.useState('transparent');
    React.useEffect(() => {
        if (value === 250) {
            setColor('#808080');
        } else if (value > 250 && value <= 400) {
            setColor('#E75541');
        } else if (value > 400 && value <= 500) {
            setColor('#F6C70E');
        } else if (value > 500 && value <= 600) {
            setColor('#49B6FF');
        } else if (value > 600 && value <= 700) {
            setColor('#95C97A');
        } else if (value > 700 || value >= divider) {
            setColor('#07AF22');
        } else {
            setColor('transparent');
        }
    }, [value, divider]);
    return (
        <Box component="span">
            <svg
                className={'CircularProgressbar'}
                viewBox="0 0 100 100"
                width={122}
                height={122}
                style={{
                    margin: 'auto'
                }}
            >
                <defs>
                    <linearGradient
                        id="shadowGrad"
                        x1="0"
                        y1="0"
                        x2="100"
                        y2="100"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#fafafa" offset={0} />
                        <stop stopColor="#efefef" offset={1} />
                    </linearGradient>
                    <filter id="blur" x="0" y="0">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
                    </filter>
                </defs>
                <circle
                    cx="54"
                    cy="54"
                    r="40"
                    fill="url(#shadowGrad)"
                    filter="url(#blur)"
                />
                <path
                    className="CircularProgressbar-trail"
                    style={{
                        stroke: '#d9d9d9',
                        strokeWidth: '1px',
                        fill: '#ffffff'
                    }}
                    d="m 49.999617,0.49987251 c -27.26776,0 -49.49890951,22.23277249 -49.49890951,49.50051649 0,27.26775 22.23114951,49.50051 49.49890951,49.50051 27.26778,0 49.50051,-22.23276 49.50051,-49.50051 0,-27.267744 -22.23273,-49.50051649 -49.50051,-49.50051649 z m 0,11.00313849 a 38.497875,38.497875 0 0 1 38.49898,38.497378 38.497875,38.497875 0 0 1 -38.49898,38.49737 38.497875,38.497875 0 0 1 -38.49737,-38.49737 38.497875,38.497875 0 0 1 38.49737,-38.497378 z"
                />

                <path
                    className="CircularProgressbar-path"
                    d={pathDescription}
                    strokeWidth={strokeWidth}
                    fillOpacity={0}
                    style={{
                        stroke: color,
                        strokeLinecap: 'round',
                        strokeDasharray: `${diameter}px ${diameter}px`,
                        strokeDashoffset: `${
                            ((100 - percentage) / 100) * diameter
                        }px`,
                        transform: 'rotate(0.5turn)',
                        transformOrigin: 'center center',
                        transition: 'stroke-dashoffset 0.5s ease 0s'
                    }}
                />
                <circle cx="50" cy="50" r={'31'} fill="#FFC24C"></circle>
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
                        textShadow: '0px 0px 4px rgba(0, 0, 0, 0.2)'
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
                    fontFamily: 'open sans'
                }}
            >
                Jobfactor Score
            </Typography>
        </Box>
    );
};

export default ScoreCard;
