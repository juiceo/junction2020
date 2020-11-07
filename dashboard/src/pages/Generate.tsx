import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { groupBy } from 'lodash';

import moment from 'moment';
import { sumBy } from 'lodash';

import { ExpenseTransaction, generateExpenses } from '../data/generateExpenses';
import { SpenderProfile } from '../data/profiles';
import { student, constructionWorker, instagramInfluencer, businessPerson } from '../data/profiles';

interface Props {}
const Generate = (props: Props) => {
    const [expenses, setExpenses] = useState<ExpenseTransaction[]>([]);

    const handleGenerateExpenses = (profile: SpenderProfile) => {
        setExpenses(generateExpenses(profile));
    };

    const expensesByMonth = groupBy(expenses, (expense) => moment(expense.timestamp).format('MMMM YYYY'));

    return (
        <Box p={2}>
            <Typography variant="h3">Generate expenses</Typography>
            <Button color="primary" variant="contained" onClick={() => handleGenerateExpenses(student)}>
                Student
            </Button>
            <Button color="primary" variant="contained" onClick={() => handleGenerateExpenses(constructionWorker)}>
                Construction worker
            </Button>
            <Button color="primary" variant="contained" onClick={() => handleGenerateExpenses(instagramInfluencer)}>
                Instagram influencer
            </Button>
            <Button color="primary" variant="contained" onClick={() => handleGenerateExpenses(businessPerson)}>
                Business person
            </Button>
            <Box p={2}>
                {Object.keys(expensesByMonth).map((month) => {
                    const expenses = expensesByMonth[month];
                    const total = sumBy(expenses, (e) => Number(e.amount));
                    return (
                        <Box mt={3}>
                            <Typography variant="h4" gutterBottom>
                                {month} - {total} EUR
                            </Typography>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Date</TableCell>
                                            <TableCell align="right">Label</TableCell>
                                            <TableCell align="right">Category</TableCell>
                                            <TableCell align="right">Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {expenses.map((expense) => (
                                            <TableRow key={expense.label + expense.timestamp}>
                                                <TableCell component="th" scope="row">
                                                    {moment(expense.timestamp).format('MMM Do YYYY')}
                                                </TableCell>
                                                <TableCell align="right">{expense.label}</TableCell>
                                                <TableCell align="right">{expense.category}</TableCell>
                                                <TableCell align="right">{expense.amount}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

const useStyles = makeStyles((theme: Theme) => createStyles({}));

export default Generate;
