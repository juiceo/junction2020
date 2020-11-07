import React from 'react';
import { Paper, Box, Typography, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import CasinoIcon from '@material-ui/icons/Casino';
import image from '../assets/gamblingfilter.png';

interface Props {
    onAccept: () => void;
    onSkip: () => void;
}

const InvestGambling = (props: Props) => {
    const classes = useStyles();

    return (
        <Paper>
            <Box>
                <Box p={2} pb={0}>
                    <Box className={classes.tag} mb={3}>
                        <CasinoIcon /> <Box mr={1} /> Invest your savings
                    </Box>
                </Box>
                <img src={image} alt="" className={classes.image} />
                <Box p={2}>
                    <Typography variant="body1">... on Eurojackpot!</Typography>
                    <Typography variant="body2">
                    Are you interested in being a millionaire? Bet your savings and you can make up to 15M€!

                    </Typography>
                    <Box mt={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Button variant="outlined" onClick={props.onAccept}>
                            Bet your money
                        </Button>
                        <Box mt={3} />
                        <Button size="small" onClick={props.onSkip}>
                            Next suggestion
                        </Button>
                    </Box>
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
        image: {
            width: '100%',
            height: 300,
            objectFit: 'cover',
        },
    })
);

export default InvestGambling;
