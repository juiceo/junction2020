export type ExpenseCategory = 'Food' | 'Transport' | 'Travel' | 'Sports' | 'Living' | 'Streaming' | 'Entertainment';

export type RandomExpense = {
    category: ExpenseCategory;
    label: string;
    min: number;
    max: number;
    probability: number;
};

export type FixedExpense = {
    category: ExpenseCategory;
    label: string;
    amount: number;
};

export type SpenderProfile = {
    dailyRandomExpenses: RandomExpense[];
    monthlyRandomExpenses: RandomExpense[];
    monthlyFixedExpenses: FixedExpense[];
};

export const student: SpenderProfile = {
    dailyRandomExpenses: [
        {
            category: 'Food',
            label: 'Groceries',
            min: 5,
            max: 10,
            probability: 0.8,
        },
        {
            category: 'Food',
            label: 'Lunch',
            min: 2.6,
            max: 2.6,
            probability: 1,
        },
        {
            category: 'Food',
            label: 'Coffee',
            min: 2,
            max: 4,
            probability: 0.9,
        },
    ],
    monthlyRandomExpenses: [
        {
            category: 'Entertainment',
            label: 'Movie tickets',
            min: 15,
            max: 20,
            probability: 1,
        },
    ],
    monthlyFixedExpenses: [
        {
            category: 'Transport',
            label: 'Public transport ticket',
            amount: 60,
        },
        {
            category: 'Transport',
            label: 'Gym membership',
            amount: 60,
        },
    ],
};
