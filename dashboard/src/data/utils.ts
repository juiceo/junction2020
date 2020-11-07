import transactions from './transactions.json';
import { groupBy, sumBy } from 'lodash';
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

        console.log(`${day} + (${dailySum}) =`, currentBalance + dailySum);

        result.push({
            date: moment(day, 'DD/MM/YYYY').toISOString(),
            balance: dailySum,
            accumulatedBalance: currentBalance + dailySum,
        });

        return result;
    }, [] as DailyBalance[]);
};

export const dailyBalanceToChartValues = (data: DailyBalance[]): ChartValue[] => {
    return data.map((item) => ({
        date: item.date,
        value: item.accumulatedBalance,
    }));
};
