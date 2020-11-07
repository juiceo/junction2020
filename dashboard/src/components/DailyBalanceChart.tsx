import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, IconButton } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import classNames from 'classnames';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CloseIcon from '@material-ui/icons/Close';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { DailyBalance } from '../data/utils';
import moment from 'moment';

interface Props {
    data: DailyBalance[];
}

const DeficitChart = (props: Props) => {
    const { data } = props;
    const classes = useStyles();
    const [activeDay, setActiveDay] = useState<string | null>(null);

    const gradientOffset = () => {
        const dataMax = Math.max(...data.map((i) => i.balance));
        const dataMin = Math.min(...data.map((i) => i.balance));

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
            const date = moment(label).format('MMM Do YYYY');
            const balance = payload[0].payload.balance;
            const rollingAverage = payload[0].payload.rollingAverage;
            return (
                <Box className={classes.tooltip}>
                    <Typography variant="caption">{date}</Typography>
                    <Typography
                        variant="body1"
                        className={classNames({
                            [classes.negative]: balance < 0,
                            [classes.positive]: balance > 0,
                        })}
                    >
                        {balance > 0 ? '+' + balance.toFixed(2) : balance.toFixed(2)}€
                    </Typography>
                    <Typography variant="body2">
                        30-day average:{' '}
                        <span
                            className={classNames({
                                [classes.negative]: rollingAverage < 0,
                                [classes.positive]: rollingAverage > 0,
                            })}
                        >
                            {' '}
                            {rollingAverage > 0 ? '+' + rollingAverage.toFixed(2) : rollingAverage.toFixed(2)}€
                        </span>
                    </Typography>
                </Box>
            );
        }

        return null;
    };

    const renderTransactions = (day: string) => {
        const item = data.find((item) => item.date === day);

        if (item) {
            return (
                <List>
                    {item.transactions.map((transaction) => (
                        <ListItem key={transaction.id} divider>
                            <ListItemIcon>
                                {transaction.rahamaara > 0 ? <AttachMoneyIcon /> : <AttachMoneyIcon />}
                            </ListItemIcon>
                            <ListItemText primary={transaction.rahamaara / 100 + '€'} secondary={transaction.label} />
                        </ListItem>
                    ))}
                </List>
            );
        }

        return null;
    };

    return (
        <>
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
                        onClick={(args: any) => setActiveDay(args.activeLabel)}
                    >
                        <CartesianGrid stroke="rgba(0,0,0,0.25)" />
                        <XAxis
                            dataKey="date"
                            tickFormatter={(date) => moment(date).format('MMM YYYY')}
                            minTickGap={30}
                        />
                        <YAxis />
                        <Tooltip content={CustomTooltip} />
                        <defs>
                            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                                <stop offset={off} stopColor="green" stopOpacity={1} />
                                <stop offset={off} stopColor="red" stopOpacity={1} />
                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="balance" stroke="#000" fill="url(#splitColor)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            {activeDay && (
                <Box mt={3}>
                    <Typography>
                        {moment(activeDay).format('MMM Do YYYY')}{' '}
                        <IconButton onClick={() => setActiveDay(null)}>
                            <CloseIcon />
                        </IconButton>
                    </Typography>
                    <Typography variant="body2">Transactions</Typography>
                    {renderTransactions(activeDay)}
                </Box>
            )}
        </>
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
        negative: {
            color: '#FF4242',
        },
        positive: {
            color: '#32cd32',
        },
    })
);

export default DeficitChart;
