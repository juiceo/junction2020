import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useParams } from 'react-router';
import { meanBy, sumBy } from 'lodash';
import moment from 'moment';

import DailyBalanceChart from '../components/DailyBalanceChart';
import { DailyBalance, getBalanceByDay } from '../data/utils';
import WhatshotIcon from '@material-ui/icons/Whatshot';

import img1 from '../assets/erotic-painting.png';

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
    const runwayDays = averageDeficit < 0 ? Math.floor((ACCOUNT_BALANCE * -1) / averageDeficit) : '∞';

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
                            <Box p={2}>
                                <DailyBalanceChart data={data} />
                            </Box>
                        </Paper>
                        <Box mt={2} className={classes.highlights}>
                            <Paper>
                                <Box p={2} display="flex" alignItems="stretch" flexDirection="column">
                                    <Typography variant="caption">Average deficit</Typography>
                                    <Typography variant="body1">{averageDeficit.toFixed(2)}€ / day</Typography>
                                </Box>
                            </Paper>
                            <Paper>
                                <Box p={2} display="flex" alignItems="stretch" flexDirection="column">
                                    <Typography variant="caption">Total savings / loss</Typography>
                                    <Typography variant="body1">{totalDeficit.toFixed(2)}€</Typography>
                                </Box>
                            </Paper>
                            <Paper>
                                <Box p={2} display="flex" alignItems="stretch" flexDirection="column">
                                    <Typography variant="caption">Runway left</Typography>
                                    <Typography variant="body1">{runwayDays} days</Typography>
                                </Box>
                            </Paper>
                        </Box>
                        <Box mt={2}>
                            <Paper>
                                <Box p={2}>
                                    <Typography variant="body1">
                                        <WhatshotIcon /> Opportunity
                                    </Typography>
                                    <Typography variant="body2">
                                        Make music for porn movies! On average you would need to do this for{' '}
                                        <strong>2.5hrs per week</strong> to get back to even!
                                    </Typography>
                                </Box>
                                <img src={img1} width="100%" height="300" alt="" style={{ objectFit: 'cover' }} />
                            </Paper>
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
            paddingTop: theme.spacing(4),
        },
        content: {
            borderRadius: 4,
            overflow: 'hidden',
            width: '100%',
            maxWidth: 800,
        },
        highlights: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridColumnGap: theme.spacing(2),
        },
    })
);

export default Dashboard;
