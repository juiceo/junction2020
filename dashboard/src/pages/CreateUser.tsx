import React, { useState } from 'react';
import {
    Box,
    Typography,
    Paper,
    TextField,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
    CircularProgress,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import moment from 'moment';

import DailyBalanceChart from '../components/DailyBalanceChart';
import { getBalanceByDay } from '../data/utils';
import { generateExpenses } from '../data/generateExpenses';
import { SpenderProfile } from '../data/profiles';
import { student, instagramInfluencer, businessPerson, constructionWorker } from '../data/profiles';

interface Props {}
const CreateUser = (props: Props) => {
    const classes = useStyles();
    const [accountNo, setAccountNo] = useState<string>('');
    const [profile, setProfile] = useState<string>('student');
    const [loading, setLoading] = useState<boolean>(false);

    const expenses = generateExpenses(
        student,
        moment().year(2020).startOf('year'),
        moment().year(2020).startOf('year').add(1, 'month')
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProfile((event.target as HTMLInputElement).value);
    };

    const getExpensesForProfile = (profile: string) => {
        switch (profile) {
            case 'student': {
                return generateExpenses(
                    student,
                    moment().year(2020).startOf('year'),
                    moment().year(2020).startOf('year').add(1, 'month')
                );
            }
            case 'instagramInfluencer': {
                return generateExpenses(
                    instagramInfluencer,
                    moment().year(2020).startOf('year'),
                    moment().year(2020).startOf('year').add(1, 'month')
                );
            }
            case 'constructionWorker': {
                return generateExpenses(
                    constructionWorker,
                    moment().year(2020).startOf('year'),
                    moment().year(2020).startOf('year').add(1, 'month')
                );
            }
            case 'businessPerson': {
                return generateExpenses(
                    businessPerson,
                    moment().year(2020).startOf('year'),
                    moment().year(2020).startOf('year').add(1, 'month')
                );
            }
            default:
                return [];
        }
    };

    const handleCreateUser = async () => {
        setLoading(true);
        const expenses = getExpensesForProfile(profile);
        const transactions = expenses.map((expense) => {
            return {
                accountno: accountNo.toString(),
                amount: Number(expense.amount) * -1,
                tstamp: moment(expense.timestamp).toISOString(),
                category: expense.category,
                label: expense.label,
            };
        });

        try {
            const options = {
                method: 'POST',
                body: JSON.stringify(transactions),
            };
            await fetch(`http://localhost:5000/account/${accountNo}/transactions`, options)
                .then((res) => res.json())
                .then((res) => console.log(res));
        } catch (err) {
            window.alert(`Error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.content}>
                <Typography variant="body1" gutterBottom>
                    Means Admin
                </Typography>
                <Paper>
                    <Box p={2}>
                        <Typography variant="h5" gutterBottom>
                            Create new user
                        </Typography>
                        <Box mt={3}>
                            <TextField
                                fullWidth
                                label="Account number"
                                variant="outlined"
                                value={accountNo}
                                onChange={(e) => setAccountNo(e.target.value as string)}
                                type="number"
                            />
                            <Box mt={3} />
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Profile</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={profile} onChange={handleChange}>
                                    <FormControlLabel value="student" control={<Radio />} label="Student" />
                                    <FormControlLabel
                                        value="instagramInfluencer"
                                        control={<Radio />}
                                        label="Instagram influencer"
                                    />
                                    <FormControlLabel
                                        value="constructionWorker"
                                        control={<Radio />}
                                        label="Construction worker"
                                    />
                                    <FormControlLabel
                                        value="businessPerson"
                                        control={<Radio />}
                                        label="Business person"
                                    />
                                </RadioGroup>
                            </FormControl>
                            <Box mt={3} />
                            {loading ? (
                                <CircularProgress />
                            ) : (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={!accountNo || !profile}
                                    onClick={handleCreateUser}
                                >
                                    Create user
                                </Button>
                            )}
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: theme.spacing(4),
        },
        content: {
            borderRadius: 4,
            overflow: 'hidden',
            width: '100%',
            maxWidth: 800,
        },
    })
);

export default CreateUser;
