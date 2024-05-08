import * as React from 'react';
import { LineChart, lineElementClasses, axisClasses } from '@mui/x-charts';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

export default function SimpleAreaChart() {
    return (
        <LineChart
            width={500}
            height={300}
            series={[{ data: uData, area: true, showMark: false, color: 'rgba(158, 220, 243, .25)' }]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
            sx={{
                [`& .${lineElementClasses.root}`]: {
                    display: 'none',
                },
                [`.${axisClasses.root}`]: {
                    [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                        stroke: 'gray',
                        strokeWidth: 3,
                    },
                    [`.${axisClasses.tickLabel}`]: {
                        fill: 'white',
                    },
                },
            }}
        />
    );
}
