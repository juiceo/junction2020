import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DailyBalance, dailyBalanceToChartValues } from '../data/utils';

interface Props {
    data: DailyBalance[];
}

const DeficitChart = (props: Props) => {
    const { data } = props;

    const chartData = dailyBalanceToChartValues(data);

    const gradientOffset = () => {
        const dataMax = Math.max(...data.map((i) => i.accumulatedBalance));
        const dataMin = Math.min(...data.map((i) => i.accumulatedBalance));

        if (dataMax <= 0) {
            return 0;
        }
        if (dataMin >= 0) {
            return 1;
        }

        return dataMax / (dataMax - dataMin);
    };

    const off = gradientOffset();

    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <AreaChart
                    data={chartData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <defs>
                        <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                            <stop offset={off} stopColor="green" stopOpacity={1} />
                            <stop offset={off} stopColor="red" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="value" stroke="#000" fill="url(#splitColor)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DeficitChart;
