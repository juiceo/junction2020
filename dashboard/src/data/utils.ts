import transactions from './transactions.json';
import { groupBy, sumBy, minBy, maxBy, pick, sortBy, meanBy } from 'lodash';
import moment from 'moment';

export interface DailyBalance {
    date: string;
    balance: number;
    accumulatedBalance: number;
    rollingAverage: number;
}

export interface ChartValue {
    date: string;
    value: number;
}

export const getBalanceByDay = (transactions: any[]) => {
    const transactionsByDay = groupBy(transactions, (t) => moment(t.tstamp).format('YYYY-MM-DD'));
    const days = Object.keys(transactionsByDay).sort();

    return days.reduce((result, date, index) => {
        const currentBalance = index === 0 ? 0 : result[index - 1].accumulatedBalance;
        const transactions = transactionsByDay[date];
        const dailySum = sumBy(transactions, (t) => Number(t.rahamaara));

        const item = {
            date,
            balance: dailySum / 100,
            accumulatedBalance: currentBalance + dailySum / 100,
            rollingAverage: meanBy(result.slice(index - 30, index), 'balance'),
        };

        result.push(item);

        return result;
    }, [] as DailyBalance[]);
};

// export const getDataWithMonthlySalary = (transactions: any[], yearlySalary: number) => {
//     const dailySalary = yearlySalary / 365;
//     const base = pick(transactions[0], ['accountno', 'bix_receiver', 'counterparty_account_id', 'iban_receiver']);
//     const startDate = minBy(transactions, (t) => moment(t.bookdate, 'DD/MM/YYYY').unix()).bookdate;
//     const endDate = maxBy(transactions, (t) => moment(t.bookdate, 'DD/MM/YYYY').unix()).bookdate;

//     const current = moment(startDate, 'DD/MM/YYYY').startOf('month');
//     const end = moment(endDate, 'DD/MM/YYYY').endOf('month');

//     const result: any[] = [];

//     while (current.isBefore(end)) {
//         result.push({
//             ...base,
//             amount: dailySalary.toFixed(2),
//             bookdate: current.format('DD/MM/YYYY'),
//             paymentdate: current.format('DD/MM/YYYY'),
//             reference: '0',
//             saldo: 0,
//             taplajikd: '588',
//             tstamp: '2019-11-28 09:17:25.161290280',
//             valuedate: current.format('DD/MM/YYYY'),
//             vientiselitekd: '710',
//             category: 'Tulot',
//         });

//         current.add(1, 'day');
//     }

//     return [...transactions, ...result];
// };
