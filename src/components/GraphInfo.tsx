import { LineChart, lineElementClasses, axisClasses } from '@mui/x-charts';

const xLabels = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
];
const xLabelsHour = [
    '00:00',
    "01:00",
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00'
];

export default function SimpleAreaChart(uData) {
    return uData?.data.length === xLabelsHour.length ? (
        <LineChart
            width={500}
            height={300}
            series={[{ data: uData.data, area: true, showMark: false, color: 'rgba(158, 220, 243, .25)' }]}
            xAxis={[{ scaleType: 'point', data: xLabelsHour }]}
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
    ) : (
        <LineChart
            width={500}
            height={300}
            series={[{ data: uData.data, area: true, showMark: false, color: 'rgba(158, 220, 243, .25)' }]}
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
