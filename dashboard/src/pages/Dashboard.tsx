import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import DailyBalanceChart from '../components/DailyBalanceChart';
import ExampleChart from '../components/ExampleChart';
import { useWidth } from '../hooks/useWidth';
import { getBalanceByDay } from '../data/utils';
import { generateExpenses } from '../data/generateExpenses';
import { student } from '../data/profiles';

interface Props {}
const Dashboard = (props: Props) => {
    const classes = useStyles();

    const yearlySalary = 100_000;

    const expenses = generateExpenses(student);

    console.log('EXPENSES', expenses);

    return (
        <Box className={classes.wrapper}>
            <DailyBalanceChart data={getBalanceByDay(yearlySalary)} />
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
            maxWidth: 600,
        },
    })
);

export default Dashboard;
