import React from 'react';
import { Paper, Box, Typography, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import SwapHorizIcon from '@material-ui/icons/Whatshot';

interface Props {
    onAccept: () => void;
    onSkip: () => void;
}

const CircularEconomy = (props: Props) => {
    const classes = useStyles();

    return (
        <Paper>
            <Box p={2}>
                <Box className={classes.tag} mb={3}>
                    <SwapHorizIcon /> <Box mr={1} /> Circular economy
                </Box>
                <Typography variant="body1">Rent your tools</Typography>
                <Typography variant="body2">
                    Do you have some tools you can set for rent? Here are a few people in your neighborhood looking to
                    rent some tools:
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
                        Rent your stuff
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
        },
    })
);

export default CircularEconomy;
