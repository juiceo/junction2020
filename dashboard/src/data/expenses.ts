export type Category = 'Food' | 'Transport';

export type Expense = {
    label: string;
    category: Category;
};

export type RandomExpense = {
    label: string;
    min: number;
    max: number;
    probability: number;
};

export type FixedExpense = {
    label: string;
    amount: number;
};

export const expenses_daily_random: Expense[] = [
    {
        label: 'Groceries',
        category: 'Food',
    },
    {
        label: 'Groceries',
        category: 'Food',
    },
];

export const expenses_monthly_random: Expense[] = [
    {
        label: 'Movie tickets',
        category: 'Entertainment',
    },
    {
        label: 'Flight tickets',
        category: 'Travel',
    },
];

export const expenses_monthly_fixed: Expense[] = [
    {
        label: 'Public transport ticket',
        category: 'Transport',
    },
];
