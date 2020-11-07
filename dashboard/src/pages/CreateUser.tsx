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
import { useHistory } from 'react-router';

import { generateExpenses } from '../data/generateExpenses';
import { student, instagramInfluencer, businessPerson, constructionWorker } from '../data/profiles';

interface Props {}
const CreateUser = (props: Props) => {
    const classes = useStyles();
    const history = useHistory();
    const [accountNo, setAccountNo] = useState<string>(Math.floor(Math.random() * 1000000000000000).toString());
    const [salary, setSalary] = useState<string>('');
    const [profile, setProfile] = useState<string>('student');
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProfile((event.target as HTMLInputElement).value);
    };

    const getExpensesForProfile = (profile: string, salary: number) => {
        switch (profile) {
            case 'student': {
                return generateExpenses(student, salary, moment().year(2020).startOf('year'), moment());
            }
            case 'instagramInfluencer': {
                return generateExpenses(instagramInfluencer, salary, moment().year(2020).startOf('year'), moment());
            }
            case 'constructionWorker': {
                return generateExpenses(constructionWorker, salary, moment().year(2020).startOf('year'), moment());
            }
            case 'businessPerson': {
                return generateExpenses(businessPerson, salary, moment().year(2020).startOf('year'), moment());
            }
            default:
                return [];
        }
    };

    const handleCreateUser = async () => {
        setLoading(true);
        const expenses = getExpensesForProfile(profile, Number(salary));
        const transactions = expenses.map((expense) => {
            return {
                accountno: accountNo.toString(),
                amount: Number(expense.amount),
                tstamp: moment(expense.timestamp).format('YYYY-MM-DD'),
                category: expense.category,
                label: expense.label,
            };
        });

        try {
            const options = {
                method: 'POST',
                body: JSON.stringify(transactions),
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            await fetch(
                `https://cors-anywhere.herokuapp.com/https://yolobets.herokuapp.com/account/${accountNo}/transactions`,
                options as any
            )
                .then((res) => res.json())
                .then((res) => console.log(res));
            history.push('/dashboard/' + accountNo);
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
                            <TextField
                                fullWidth
                                label="Salary per month"
                                variant="outlined"
                                value={salary}
                                onChange={(e) => setSalary(e.target.value as string)}
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
