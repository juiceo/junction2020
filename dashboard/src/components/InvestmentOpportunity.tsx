import React from 'react';
import {
    Paper,
    Box,
    Typography,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    ListItemSecondaryAction,
    Avatar,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import moment from 'moment';

import TrendingUpIcon from '@material-ui/icons/TrendingUp';

import image from '../assets/investingfilter.png';

interface Props {
    onAccept: () => void;
    onSkip: () => void;
}

const InvestmentOpportunity = (props: Props) => {
    const classes = useStyles();

    return (
        <Paper>
            <Box>
                <Box p={2} pb={0}>
                    <Box className={classes.tag} mb={3}>
                        <TrendingUpIcon /> <Box mr={1} /> Make money make money
                    </Box>
                </Box>
                <img src={image} alt="" className={classes.image} />
                <Box p={2}>
                    <Typography variant="body1">Invest your surplus</Typography>
                    <Typography variant="body2">
                        Don't let your surplus money sit on your spending account without accumulating any interest!
                        With your spending habits, you could afford to invest <strong>400€/mo</strong> into various
                        financial instruments. Here's how much money you are missing out on:
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText
                                primary="OMX Helsinki (+35.56%)"
                                secondary={
                                    <Typography variant="body2">
                                        You could make an extra <strong className={classes.money}>412,60€</strong> per
                                        year
                                    </Typography>
                                }
                            />
                            <ListItemSecondaryAction>
                                <Button size="small">Invest</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="S&P 500 (+24.40%)"
                                secondary={
                                    <Typography variant="body2">
                                        You could make an extra <strong className={classes.money}>287,60€</strong> per
                                        year
                                    </Typography>
                                }
                            />
                            <ListItemSecondaryAction>
                                <Button size="small">Invest</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="OMX Helsinki (+22.30%)"
                                secondary={
                                    <Typography variant="body2">
                                        You could make an extra <strong className={classes.money}>260,10€</strong> per
                                        year
                                    </Typography>
                                }
                            />
                            <ListItemSecondaryAction>
                                <Button size="small">Invest</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                    <Box mt={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
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
        money: {
            color: '#B3DC4A',
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

export default InvestmentOpportunity;
