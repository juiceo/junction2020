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
            category: 'Sports',
            label: 'Gym membership',
            amount: 60,
        },
    ],
};



export const constructionWorker: SpenderProfile = {
    dailyRandomExpenses: [
        {
            category: 'Food',
            label: 'Groceries',
            min: 15,
            max: 30,
            probability: 0.2,
        },
        {
            category: 'Food',
            label: 'Lunch',
            min: 10.70,
            max: 10.70,
            probability: 1,
        },
        {
            category: 'Transport',
            label: 'Gas',
            min: 40,
            max: 60,
            probability: 0.1,
        },
        {
            category: 'Transport',
            label: 'Parking ticket',
            min: 80,
            max: 80,
            probability: 0.05,
        },
    ],
    monthlyRandomExpenses: [
        {
            category: 'Travel',
            label: 'Flight tickets',
            min: 100,
            max: 200,
            probability: 0.2,
        },
        {
            category: 'Travel',
            label: 'Hotel',
            min: 200,
            max: 400,
            probability: 0.2,
        },
    ],
    monthlyFixedExpenses: [
        {
            category: 'Transport',
            label: 'Public transport ticket',
            amount: 60,
        },
        {
            category: 'Living',
            label: 'Electricity',
            amount: 30,
        },
        {
            category: 'Living',
            label: 'Home insurance',
            amount: 20,
        },
    ],
};


export const instagramInfluencer: SpenderProfile = {
    dailyRandomExpenses: [

        {
            category: 'Food',
            label: 'Lunch',
            min: 10,
            max: 15,
            probability: 0.5,
        },
        {
            category: 'Food',
            label: 'Coffee',
            min: 4,
            max: 8,
            probability: 0.9,
        },
        {
            category: 'Food',
            label: 'Groceries',
            min: 5,
            max: 10,
            probability: 0.8,
        },
    ],
    monthlyRandomExpenses: [
        {
            category: 'Entertainment',
            label: 'Dinner',
            min: 40,
            max: 80,
            probability: 1,
        },
    ],
    monthlyFixedExpenses: [
        {
            category: 'Streaming',
            label: 'Spotify',
            amount: 10,
        },
        {
            category: 'Streaming',
            label: 'Netflix',
            amount: 15,
        },
    ],
};



export const businessPerson: SpenderProfile = {
    dailyRandomExpenses: [

        {
            category: 'Food',
            label: 'Lunch',
            min: 10,
            max: 15,
            probability: 1,
        },
        {
            category: 'Transport',
            label: 'Taxi',
            min: 20,
            max: 40,
            probability: 0.5,
        },
        {
            category: 'Sports',
            label: 'Tennis',
            min: 20,
            max: 40,
            probability: 0.2,
        },
    ],
    monthlyRandomExpenses: [
        {
            category: 'Entertainment',
            label: 'Dinner',
            min: 40,
            max: 80,
            probability: 1,
        },
        {
            category: 'Travel',
            label: 'Flight tickets',
            min: 200,
            max: 1000,
            probability: 0.4,
        },
        {
            category: 'Travel',
            label: 'Hotel',
            min: 500,
            max: 2000,
            probability: 0.4,
        },
    ],
    monthlyFixedExpenses: [
        {
            category: 'Streaming',
            label: 'Spotify',
            amount: 10,
        },
        {
            category: 'Streaming',
            label: 'Netflix',
            amount: 15,
        },
        {
            category: 'Living',
            label: 'Phone bill',
            amount: 50,
        },
    ],
};
