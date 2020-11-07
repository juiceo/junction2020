import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import classNames from 'classnames';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import { DailyBalance } from '../data/utils';
import moment from 'moment';

interface Props {
    data: DailyBalance[];
}

const DeficitChart = (props: Props) => {
    const { data } = props;
    const classes = useStyles();

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

    const CustomTooltip = ({ active, payload, label }: any) => {
        // const classes = useTooltipStyles();
        if (active) {
            console.log('PAYLOAD', payload);
            const date = moment(label).format('MMM Do YYYY');
            const balance = payload[0].payload.balance;
            const accumulated = payload[0].payload.accumulatedBalance;
            return (
                <Box className={classes.tooltip}>
                    <Typography variant="caption">{date}</Typography>
                    <Typography variant="body1">{accumulated.toFixed(2)}€</Typography>
                    <Typography variant="body2" className={classNames()}>
                        {balance.toFixed(2)}
                    </Typography>
                    {/* <p className="intro">{getIntroOfPage(label)}</p> */}
                </Box>
            );
        }

        return null;
    };

    return (
        <div style={{ width: '100%', height: 300, padding: 16 }}>
            <ResponsiveContainer>
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid stroke="rgba(0,0,0,0.25)" />
                    <XAxis dataKey="date" tickFormatter={(date) => moment(date).format('MMM YYYY')} minTickGap={30} />
                    <YAxis />
                    <Tooltip content={CustomTooltip} />
                    <defs>
                        <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                            <stop offset={off} stopColor="green" stopOpacity={1} />
                            <stop offset={off} stopColor="red" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="accumulatedBalance" stroke="#000" fill="url(#splitColor)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tooltip: {
            display: 'flex',
            flexDirection: 'column',
            width: 200,
            background: theme.palette.background.paper,
            padding: theme.spacing(2),
        },
    })
);

export default DeficitChart;
