import React from 'react';
import { Paper, Box, Typography, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import WhatshotIcon from '@material-ui/icons/Whatshot';

interface Props {
    onAccept: () => void;
    onSkip: () => void;
}

const ExpenseWarning = (props: Props) => {
    const classes = useStyles();

    return (
        <Paper>
            <Box p={2}>
                <Box className={classes.tag} mb={3}>
                    <WhatshotIcon /> <Box mr={1} /> You're burning money!
                </Box>
                <Typography variant="body1">Eat at home more often</Typography>
                <Typography variant="body2">
                    You are spending a lot on eating out! Here's your spending compared to the average in your income
                    bracket:{' '}
                </Typography>
                <Box display="flex" flexDirection="row" my={4}>
                    <Box
                        className={classes.red}
                        flex={1}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography variant="h3">1235,90€</Typography>
                        <Typography variant="body1">You</Typography>
                    </Box>
                    <Box flex={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Typography variant="h3">675,09€</Typography>
                        <Typography variant="body1">Average</Typography>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Button variant="outlined" onClick={props.onAccept}>
                        Set a spending limit
                    </Button>
                    <Box mt={3} />
                    <Button size="small" onClick={props.onSkip}>
                        Next suggestion
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        red: {
            color: '#eb4c00',
        },
        tag: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            color: '#eb4c00',
        },
    })
);

export default ExpenseWarning;
