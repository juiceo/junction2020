import React from 'react';
import { Paper, Box, Typography, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import image from '../assets/autofilter.png';

interface Props {
    onAccept: () => void;
    onSkip: () => void;
}

const CircularEconomy = (props: Props) => {
    const classes = useStyles();

    return (
        <Paper>
            <Box>
                <Box p={2} pb={0}>
                    <Box className={classes.tag} mb={3}>
                        <SwapHorizIcon /> <Box mr={1} /> Circular economy
                    </Box>
                </Box>
                <img src={image} alt="" className={classes.image} />
                <Box p={2}>
                    <Typography variant="body1">Rent your stuff</Typography>
                    <Typography variant="body2">
                        Do you have some assets you can set for rent? You can make a little bit of extra money by
                        renting your car, power drill or other items people in your neighborhood may need to lend.
                    </Typography>
                    <Box mt={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Button variant="outlined" onClick={props.onAccept}>
                            Rent your stuff
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

export default CircularEconomy;
