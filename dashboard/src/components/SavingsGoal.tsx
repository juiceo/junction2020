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

import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import image from '../assets/vacation.png';

interface Props {
    onAccept: () => void;
    onSkip: () => void;
}

const SavingsGoal = (props: Props) => {
    const classes = useStyles();

    return (
        <Paper>
            <Box>
                <Box p={2} pb={0}>
                    <Box className={classes.tag} mb={3}>
                        <FlightTakeoffIcon /> <Box mr={1} /> Vacation savings goal
                    </Box>
                </Box>
                <img src={image} alt="" className={classes.image} />
                <Box p={2}>
                    <Typography variant="body1">Set a savings goal</Typography>
                    <Typography variant="body2">
                        Planning a vacation? Make sure you can afford it! Set a savings goal now and you'll have no
                        problem affording your dream vacation. Here's how much you need to save per day to afford a
                        vacation in {moment().add(6, 'months').format('MMMM YYYY')}:
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar alt="Turkey" src="https://cdn.countryflags.com/thumbs/turkey/flag-800.png" />
                            </ListItemAvatar>
                            <ListItemText primary="Alania, Turkey" secondary="5€ / day" />
                            <ListItemSecondaryAction>
                                <Button size="small">Set goal</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar alt="Turkey" src="https://cdn.countryflags.com/thumbs/bulgaria/flag-400.png" />
                            </ListItemAvatar>
                            <ListItemText primary="Sunny Beach, Bulgaria" secondary="3€ / day" />
                            <ListItemSecondaryAction>
                                <Button size="small">Set goal</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar alt="Estonia" src="https://cdn.countryflags.com/thumbs/estonia/flag-800.png" />
                            </ListItemAvatar>
                            <ListItemText primary="Tallinn, Estonia" secondary="2€ / day" />
                            <ListItemSecondaryAction>
                                <Button size="small">Set goal</Button>
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

export default SavingsGoal;
