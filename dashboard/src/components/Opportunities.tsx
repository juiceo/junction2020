import React, { useState } from 'react';
import { Box, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';

import OpportunityCard from './OpportunityCard';
import ExpenseWarning from './ExpenseWarning';
import CircularEconomy from './CircularEconomy';
import EatingOutside from './EatingOutside';
import InvestGambling from './InvestGambling';

interface Props {}
const Opportunities = (props: Props) => {
    const classes = useStyles();
    const [index, setIndex] = useState<number>(0);

    return (
        <Box m={-2}>
            <SwipeableViews index={index}>
                <Box p={2}>
                    <InvestGambling onSkip={() => setIndex((prev) => prev + 1)} onAccept={() => {}} />
                </Box>
                <Box p={2}>
                    <EatingOutside onSkip={() => setIndex((prev) => prev + 1)} onAccept={() => {}} />
                </Box>
                <Box p={2}>
                    <ExpenseWarning onSkip={() => setIndex((prev) => prev + 1)} onAccept={() => {}} />
                </Box>
                <Box p={2}>
                    <CircularEconomy onSkip={() => setIndex((prev) => prev + 1)} onAccept={() => {}} />
                </Box>
            </SwipeableViews>
        </Box>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        slide: {
            padding: 15,
            minHeight: 100,
            color: '#fff',
        },
        slide1: {
            background: '#FEA900',
        },
        slide2: {
            background: '#B3DC4A',
        },
        slide3: {
            background: '#6AC0FF',
        },
        actionButton: {
            textTransform: 'none',
        },
    })
);

export default Opportunities;
