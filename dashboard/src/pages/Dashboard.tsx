import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import DailyBalanceChart from '../components/DailyBalanceChart';
import ExampleChart from '../components/ExampleChart';
import { useWidth } from '../hooks/useWidth';
import { getBalanceByDay } from '../data/utils';

interface Props {}
const Dashboard = (props: Props) => {
    const classes = useStyles();

    const width = useWidth();
    const constrainedWidth = Math.min(width, 800);

    return (
        <Box className={classes.wrapper}>
            <DailyBalanceChart data={getBalanceByDay()} />
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
