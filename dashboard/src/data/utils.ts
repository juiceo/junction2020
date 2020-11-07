import transactions from './transactions.json';
import { groupBy, sumBy, minBy } from 'lodash';
import moment from 'moment';

export interface DailyBalance {
    date: string;
    balance: number;
    accumulatedBalance: number;
}

export interface ChartValue {
    date: string;
    value: number;
}

export const getBalanceByDay = () => {
    const transactionsByDay = groupBy(transactions, 'bookdate');
    const days = Object.keys(transactionsByDay);
    const dates = days.map((day) => moment(day, 'DD/MM/YYYY').toISOString());
    const sorted = dates.sort();

    return sorted.reduce((result, date, index) => {
        const day = moment(date).format('DD/MM/YYYY');
        const currentBalance = index === 0 ? 0 : result[index - 1].accumulatedBalance;
        const transactions = transactionsByDay[day];
        const dailySum = sumBy(transactions, (t) => Number(t.amount));

        result.push({
            date: moment(day, 'DD/MM/YYYY').toISOString(),
            balance: dailySum,
            accumulatedBalance: currentBalance + dailySum,
        });

        return result;
    }, [] as DailyBalance[]);
};

export const getDataWithMonthlySalary = (transactions: any[]) => {
    const startDate = minBy(transactions, (t) => moment(t.bookdate).unix());
    const endDate = maxBy(transactions, (t) => moment(t.bookdate).unix());
    //     {
    //     "accountno": "3",
    //     "amount": "-18.87",
    //     "bic_receiver": "           ",
    //     "bookdate": "18/11/2019",
    //     "counterparty_account_id": "155",
    //     "iban_receiver": "1",
    //     "paymentdate": "18/11/2019",
    //     "reference": "1",
    //     "saldo": "26417.06",
    //     "taplajikd": "162",
    //     "tstamp": "2019-11-18 20:07:44.516129010",
    //     "valuedate": "18/11/2019",
    //     "vientiselitekd": "0",
    //     "﻿category": "Shoppailu"
    // },
};
