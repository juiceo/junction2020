import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useParams } from 'react-router';
import { meanBy, sumBy } from 'lodash';
import classNames from 'classnames';
import moment from 'moment';
import MakeBets from './MakeBets';

import DailyBalanceChart from '../components/DailyBalanceChart';
import { DailyBalance, getBalanceByDay } from '../data/utils';
import WhatshotIcon from '@material-ui/icons/Whatshot';

import img1 from '../assets/erotic-painting.png';
import Opportunities from '../components/Opportunities';
import { ReactComponent as Logo } from '../assets/isolated-layout.svg';

interface Props {}

const ACCOUNT_BALANCE = 2000;

const Dashboard = (props: Props) => {
    const classes = useStyles();
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<DailyBalance[]>([]);
    const { accountNumber } = useParams<{ accountNumber: string }>();

    const fetchTransactions = useCallback(async () => {
        setLoading(true);
        const url = `http://localhost:5000/?start=2020-01-01&end=2021-01-01&account=${accountNumber}`;
        await fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(getBalanceByDay(data));
            });
        setLoading(false);
    }, [accountNumber]);

    useEffect(() => {
        fetchTransactions();
    }, [fetchTransactions]);

    const averageDeficit = meanBy(data, 'balance');
    const totalDeficit = sumBy(data, 'balance');
    const runwayDays = averageDeficit < 0 ? Math.floor((ACCOUNT_BALANCE * -1) / averageDeficit) : null;

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.content}>
                <Typography variant="body1" gutterBottom>
                    Means Dashboard - {accountNumber}
                </Typography>

                {loading ? (
                    <Box display="flex" width="100%" height={300} alignItems="center" justifyContent="center">
                        Loading
                    </Box>
                ) : (
                    <>
                        <Paper>
                            <Box py={2}>
                                <DailyBalanceChart data={data} />
                            </Box>
                        </Paper>
                        <Box mt={2} className={classes.highlights}>
                            <Paper>
                                <Box p={2} display="flex" alignItems="stretch" flexDirection="column">
                                    <Typography variant="caption">Avg. surplus / deficit</Typography>
                                    <Typography
                                        variant="body1"
                                        className={classNames({
                                            [classes.positive]: averageDeficit > 0,
                                            [classes.negative]: averageDeficit < 0,
                                        })}
                                    >
                                        {averageDeficit > 0
                                            ? '+' + averageDeficit.toFixed(2)
                                            : averageDeficit.toFixed(2)}
                                        € / day
                                    </Typography>
                                </Box>
                            </Paper>
                            <Paper>
                                <Box p={2} display="flex" alignItems="stretch" flexDirection="column">
                                    <Typography variant="caption">Total savings / loss</Typography>
                                    <Typography
                                        variant="body1"
                                        className={classNames({
                                            [classes.positive]: totalDeficit > 0,
                                            [classes.negative]: totalDeficit < 0,
                                        })}
                                    >
                                        {totalDeficit > 0 ? '+' + totalDeficit.toFixed(2) : totalDeficit.toFixed(2)}€
                                    </Typography>
                                </Box>
                            </Paper>
                            <Paper>
                                <Box p={2} display="flex" alignItems="stretch" flexDirection="column">
                                    <Typography variant="caption">Runway left</Typography>
                                    <Typography
                                        variant="body1"
                                        className={classNames({
                                            [classes.positive]: !runwayDays,
                                            [classes.warning]: runwayDays && runwayDays < 100,
                                            [classes.negative]: runwayDays && runwayDays < 10,
                                        })}
                                    >
                                        {runwayDays ?? '∞'} days
                                    </Typography>
                                </Box>
                            </Paper>
                        </Box>
                        <Box mt={2}>
                            <Opportunities
                                averageDeficit={averageDeficit}
                                totalDeficit={totalDeficit}
                                runwayDays={runwayDays}
                            />
                        </Box>
                        <Box mt={2}>
                            <MakeBets />
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(2),
            paddingTop: theme.spacing(4),
        },
        content: {
            borderRadius: 4,
            width: '100%',
            maxWidth: 800,
        },
        highlights: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridColumnGap: theme.spacing(2),
            gridRowGap: theme.spacing(2),
            [theme.breakpoints.down('sm')]: {
                gridTemplateColumns: '1fr',
            },
        },
        negative: {
            color: '#FF4242',
        },
        positive: {
            color: '#32cd32',
        },
        warning: {
            color: 'orange',
        },
    })
);

export default Dashboard;
