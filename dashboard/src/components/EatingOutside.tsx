import React from 'react';
import { Paper, Box, Typography, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import RestaurantIcon from '@material-ui/icons/Restaurant';
import image from '../assets/eating_outfilter.png';

interface Props {
    onAccept: () => void;
    onSkip: () => void;
}

const EatingOutside = (props: Props) => {
    const classes = useStyles();

    return (
        <Paper>
            <Box>
                <Box p={2} pb={0}>
                    <Box className={classes.tag} mb={3}>
                        <RestaurantIcon /> <Box mr={1} /> Take a look at your eating you habits!
                    </Box>
                </Box>
                <img src={image} alt="" className={classes.image} />
                <Box p={2}>
                    <Typography variant="body1">You're eating out too much</Typography>
                    <Typography variant="body2">
                    Your spending on eating out is way above your peers - you should look into your habits. Have a nice home food meal once! 
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
                    <Box mt={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Button variant="outlined" onClick={props.onAccept}>
                            I'll start cooking
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

export default EatingOutside;
