import transactions from './transactions.json';
import { groupBy, sumBy, minBy, maxBy, pick, sortBy } from 'lodash';
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

export const getBalanceByDay = (yearlySalary: number) => {
    const dataWithSalary = getDataWithMonthlySalary(transactions, yearlySalary);
    const transactionsByDay = groupBy(dataWithSalary, 'bookdate');
    const days = Object.keys(transactionsByDay);
    const dates = days.map((day) => moment(day, 'DD/MM/YYYY').toISOString());
    const sorted = sortBy(dates, (date) => moment(date).valueOf());

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

export const getDataWithMonthlySalary = (transactions: any[], yearlySalary: number) => {
    const dailySalary = yearlySalary / 365;
    const base = pick(transactions[0], ['accountno', 'bix_receiver', 'counterparty_account_id', 'iban_receiver']);
    const startDate = minBy(transactions, (t) => moment(t.bookdate, 'DD/MM/YYYY').unix()).bookdate;
    const endDate = maxBy(transactions, (t) => moment(t.bookdate, 'DD/MM/YYYY').unix()).bookdate;

    const current = moment(startDate, 'DD/MM/YYYY').startOf('month');
    const end = moment(endDate, 'DD/MM/YYYY').endOf('month');

    const result: any[] = [];

    while (current.isBefore(end)) {
        result.push({
            ...base,
            amount: dailySalary.toFixed(2),
            bookdate: current.format('DD/MM/YYYY'),
            paymentdate: current.format('DD/MM/YYYY'),
            reference: '0',
            saldo: 0,
            taplajikd: '588',
            tstamp: '2019-11-28 09:17:25.161290280',
            valuedate: current.format('DD/MM/YYYY'),
            vientiselitekd: '710',
            category: 'Tulot',
        });

        current.add(1, 'day');
    }

    return [...transactions, ...result];
};
