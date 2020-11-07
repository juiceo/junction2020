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
    salary: number,
    startDate: Moment = moment().year(2019).startOf('year'),
    endDate: Moment = moment()
): ExpenseTransaction[] => {
    const result: ExpenseTransaction[] = [];
    const salaryPerDay = (salary * 12) / 365;

    console.log('salary per day', salaryPerDay);

    while (startDate.isBefore(endDate)) {
        const { dailyRandomExpenses, monthlyRandomExpenses, monthlyFixedExpenses } = profile;

        result.push({
            timestamp: startDate.toISOString(),
            amount: salaryPerDay.toFixed(2),
            category: 'Salary',
            label: 'Salary',
        });

        dailyRandomExpenses.forEach((expense) => {
            if (expense.probability > Math.random()) {
                result.push({
                    timestamp: startDate.toISOString(),
                    amount: (-1 * getRandomAmount(expense.min, expense.max)).toFixed(2),
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
                        amount: (-1 * getRandomAmount(expense.min, expense.max)).toFixed(2),
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
                    amount: (-1 * expense.amount).toFixed(2),
                    category: expense.category,
                    label: expense.label,
                });
            });
        }

        startDate.add(1, 'day');
    }

    return result;
};
