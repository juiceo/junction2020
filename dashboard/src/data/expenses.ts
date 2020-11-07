export type Category = 'Food' | 'Transport' | 'Travel' | 'Sports' | 'Living' | 'Streaming' | 'Entertainment';

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
        label: 'Coffee',
        category: 'Food',
    },
    {
        label: 'Groceries',
        category: 'Food',
    },
    {
        label: 'Lunch',
        category: 'Food',
    },
    {
        label: 'Taxi',
        category: 'Transport',
    },
    {
        label: 'Gas',
        category: 'Transport',
    },
    {
        label: 'Parking ticket',
        category: 'Transport',
    },
    {
        label: 'Tennis',
        category: 'Sports',
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
    {
        label: 'Hotel',
        category: 'Travel',
    },
    {
        label: 'Dinner',
        category: 'Entertainment',
    },
];

export const expenses_monthly_fixed: Expense[] = [
    {
        label: 'Public transport ticket',
        category: 'Transport',
    },
    {
        label: 'Rent',
        category: 'Living',
    },
    {
        label: 'Netflix',
        category: 'Streaming',
    },
    {
        label: 'Phone bill',
        category: 'Living',
    },
    {
        label: 'Electricity',
        category: 'Living',
    },
    {
        label: 'Home insurance',
        category: 'Living',
    },
    {
        label: 'Spotify',
        category: 'Streaming',
    },
    {
        label: 'Gym membership',
        category: 'Sports',
    },
    {
        label: 'Internet',
        category: 'Living',
    },
];
