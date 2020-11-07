type Category = 'Food' | 'Transport';

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
