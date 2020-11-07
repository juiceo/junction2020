import React from 'react';
import { Paper, Box, Typography, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

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
                    <AttachMoneyIcon /> <Box mr={1} /> Salary Alert
                </Box>
                <Typography variant="body1">Check your salary</Typography>
                <Typography variant="body2">
                    Your salary last year was <strong>38,400€</strong> - a bit less than your industry average! If you
                    negotiate a <strong>200€ /mo</strong> raise, you can afford your current lifestyle!
                </Typography>
                <Box display="flex" flexDirection="row" my={4}>
                    <Box
                        className={classes.text}
                        flex={1}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography variant="h3">46,000€</Typography>
                        <Typography variant="body1" align="center">
                            Industry average (Senior software developer / Helsinki)
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Button variant="outlined" onClick={props.onAccept}>
                        See glassdoor
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
        text: {
            color: '#B3DC4A',
        },
        tag: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            color: '#B3DC4A',
        },
    })
);

export default ExpenseWarning;
