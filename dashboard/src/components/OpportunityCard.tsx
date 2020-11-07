import React from 'react';
import { Paper, Box, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import WhatshotIcon from '@material-ui/icons/Whatshot';
import EventIcon from '@material-ui/icons/Event';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

import img1 from '../assets/erotic-painting.png';

interface Props {
    variant: 'hot-opportunity' | 'saving-goal' | 'investment' | 'circular-economy';
    title: string;
    description?: string;
}

const OpportunityCard = (props: Props) => {
    const classes = useStyles();

    const renderLabel = () => {
        switch (props.variant) {
            case 'hot-opportunity':
                return (
                    <Box className={classes.tag}>
                        <WhatshotIcon /> <Box mr={1} /> Hot opportunity!
                    </Box>
                );
            case 'saving-goal':
                return (
                    <Box className={classes.tag}>
                        <EventIcon /> <Box mr={1} />
                        Set a savings goal
                    </Box>
                );
            case 'investment':
                return (
                    <Box className={classes.tag}>
                        <AccountBalanceIcon /> <Box mr={1} />
                        Make money make money
                    </Box>
                );
            case 'circular-economy': {
                return (
                    <Box className={classes.tag}>
                        <SwapHorizIcon /> <Box mr={1} />
                        Circular economy
                    </Box>
                );
            }
        }
    };

    return (
        <Paper>
            <Box p={2}>
                {renderLabel()}
                <Typography variant="body1">{props.title}</Typography>
                <Typography variant="body2">{props.description}</Typography>
                {/* <Typography variant="body1">
                    <WhatshotIcon /> Opportunity
                </Typography>
                <Typography variant="body2">
                    Make music for porn movies! On average you would need to do this for{' '}
                    <strong>2.5hrs per week</strong> to get back to even!
                </Typography> */}
            </Box>
            <img src={img1} width="100%" height="300" alt="" style={{ objectFit: 'cover' }} />
        </Paper>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tag: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
    })
);

export default OpportunityCard;
