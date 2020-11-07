import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useParams } from 'react-router';
import moment from 'moment';

import DailyBalanceChart from '../components/DailyBalanceChart';
import { getBalanceByDay } from '../data/utils';
import { generateExpenses } from '../data/generateExpenses';
import { student } from '../data/profiles';

interface Props {}
const Dashboard = (props: Props) => {
    const classes = useStyles();
    const [loading, setLoading] = useState<boolean>(true);
    const { accountNumber } = useParams<{ accountNumber: string }>();

    const fetchTransactions = useCallback(async () => {
        setLoading(true);
        const url = `http://localhost:5000/?start=2020-01-01&end=2021-01-01?account=${accountNumber}`;
        await fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log('DATA', data);
            });
        setLoading(false);
    }, [accountNumber]);

    useEffect(() => {
        fetchTransactions();
    }, [fetchTransactions]);

    const expenses = generateExpenses(
        student,
        moment().year(2020).startOf('year'),
        moment().year(2020).startOf('year').add(1, 'month')
    );

    console.log('EXPENSES', expenses);

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
                    <Box>Hello</Box>
                )}
                {/* <Paper>
                    <Box p={2}>
                        <DailyBalanceChart data={getBalanceByDay(yearlySalary)} />
                    </Box>
                </Paper> */}
                {/* <Box mt={2} className={classes.stats}>
                    
                </Box> */}
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
    })
);

export default Dashboard;
