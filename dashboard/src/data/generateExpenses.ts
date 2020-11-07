import { ExpenseCategory, SpenderProfile } from './profiles';
import moment, { Moment } from 'moment';

export type ExpenseTransaction = {
    timestamp: string;
    amount: string;
    category: ExpenseCategory;
    label: string;
};

export const getRandomAmount = (min: number, max: number): number => {
    const diff = max - min;
    return min + Math.random() * diff;
};

export const generateExpenses = (
    profile: SpenderProfile,
    startDate: Moment = moment().year(2019).startOf('year'),
    endDate: Moment = moment()
): ExpenseTransaction[] => {
    const result: ExpenseTransaction[] = [];

    while (startDate.isBefore(endDate)) {
        const { dailyRandomExpenses, monthlyRandomExpenses, monthlyFixedExpenses } = profile;

        dailyRandomExpenses.forEach((expense) => {
            if (expense.probability > Math.random()) {
                result.push({
                    timestamp: startDate.toISOString(),
                    amount: getRandomAmount(expense.min, expense.max).toFixed(2),
                    category: expense.category,
                    label: expense.label,
                });
            }
        });

        if (Math.random() <= 0.03) {
            monthlyRandomExpenses.forEach((expense) => {
                if (expense.probability > Math.random()) {
                    result.push({
                        timestamp: startDate.toISOString(),
                        amount: getRandomAmount(expense.min, expense.max).toFixed(2),
                        category: expense.category,
                        label: expense.label,
                    });
                }
            });
        }

        if (startDate.day() === 15) {
            monthlyFixedExpenses.forEach((expense) => {
                result.push({
                    timestamp: startDate.toISOString(),
                    amount: expense.amount.toFixed(2),
                    category: expense.category,
                    label: expense.label,
                });
            });
        }

        startDate.add(1, 'day');
    }

    return result;
};
