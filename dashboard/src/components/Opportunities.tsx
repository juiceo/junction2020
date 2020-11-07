import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';

import ExpenseWarning from './ExpenseWarning';
import CircularEconomy from './CircularEconomy';
import EatingOutside from './EatingOutside';
import InvestGambling from './InvestGambling';
import SalaryAlert from './SalaryAlert';
import SavingsGoal from './SavingsGoal';
import DoneCard from './DoneCard';
import InvestmentOpportunity from './InvestmentOpportunity';

interface Props {
    averageDeficit: number;
    totalDeficit: number;
    runwayDays: number | null;
}
const Opportunities = (props: Props) => {
    const classes = useStyles();
    const [index, setIndex] = useState<number>(0);

    const showInvestment = props.averageDeficit > 8;
    const showSavingsGoal = props.averageDeficit > -2 && props.averageDeficit < 5;
    const showSalary = props.averageDeficit < -2;
    const showExpense = props.averageDeficit < -2;
    const showCircular = props.averageDeficit < 1;
    const views = [];

    const getText = () => {
        if (props.averageDeficit < -2) {
            return 'Oh-oh! You seem to be a bit strapped for cash - here are a few opportunities to save some money';
        }
        if (props.averageDeficit > 2) {
            return 'Nice, you seem to be doing pretty well for yourself! Make sure you are getting the most of your extra money';
        }

        return 'Looks like you are doing alright for yourself - but not saving too much! Check out these tips to start accumulating some savings';
    };

    if (showInvestment) {
        views.push(
            <Box p={2} key="investment">
                <InvestmentOpportunity
                    monthlySurplus={props.totalDeficit / 12}
                    onSkip={() => setIndex((prev) => prev + 1)}
                    onAccept={() => {}}
                />
            </Box>
        );
    }

    if (showSavingsGoal) {
        views.push(
            <Box p={2}>
                <SavingsGoal onSkip={() => setIndex((prev) => prev + 1)} onAccept={() => {}} />
            </Box>
        );
    }

    if (showSalary) {
        views.push(
            <Box p={2}>
                <SalaryAlert
                    onSkip={() => setIndex((prev) => prev + 1)}
                    onAccept={() => {
                        window.open('https://glassdoor.com', '_blank');
                    }}
                />
            </Box>
        );
    }

    if (showExpense) {
        views.push(
            <Box p={2}>
                <ExpenseWarning onSkip={() => setIndex((prev) => prev + 1)} onAccept={() => {}} />
            </Box>
        );
    }

    if (showCircular) {
        views.push(
            <Box>
                <CircularEconomy onSkip={() => setIndex((prev) => prev + 1)} onAccept={() => {}} />
            </Box>
        );
    }

    if (views.length === 0) {
        return null;
    }

    views.push(
        <Box p={2}>
            <DoneCard />
        </Box>
    );

    return (
        <Box m={-2}>
            <Box p={5}>
                <Typography variant="body1" align="center">
                    {getText()}
                </Typography>
            </Box>
            <SwipeableViews index={index}>{views}</SwipeableViews>
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
