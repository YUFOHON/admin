export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface Month {
  id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}

export interface Day {
  id: string;
  date: string;
  revenue: number;
  expenses: number;
}

export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
  createdAt: string;
  updatedAt: string;
}

export interface GetProductsResponse {
  id: string;
  _id: string;
  __v: number;
  price: number;
  expense: number;
  transactions: Array<string>;
  createdAt: string;
  updatedAt: string;
}

export interface GetTransactionsResponse {
  id: string;
  _id: string;
  __v: number;
  buyer: string;
  amount: number;
  productIds: Array<string>;
  createdAt: string;
  updatedAt: string;
}

export interface GetListingsResponse {
  id: string;
  _id: string;
  __v: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: Date;
  category: string;
  roomCount: number;
  bedCount: number;
  bathroomCount: number;
  guestCount: number;
  locationValue: string;
  userId: string;
  price: number;
  ownerImg: string;
}

export interface GetUsersResponse {
  _id: string;
  name: string;
  email: string;
  emailVerified: string | null;
  image: string;
  createdAt: string;
  updatedAt: string;
  favoritedIds: string[];
}
