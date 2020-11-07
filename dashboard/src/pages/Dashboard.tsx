import React from 'react';
import { Box, Typography, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import moment from 'moment';

import DailyBalanceChart from '../components/DailyBalanceChart';
import { getBalanceByDay } from '../data/utils';
import { generateExpenses } from '../data/generateExpenses';
import { student } from '../data/profiles';

interface Props {}
const Dashboard = (props: Props) => {
    const classes = useStyles();

    const yearlySalary = 100_000;

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
                    Means Dashboard
                </Typography>
                <Paper>
                    <Box p={2}>
                        <DailyBalanceChart data={getBalanceByDay(yearlySalary)} />
                    </Box>
                </Paper>
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
