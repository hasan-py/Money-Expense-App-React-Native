import {createSlice} from '@reduxjs/toolkit';

const initialExpensesState: any = [
  {
    name: 'Hola',
    amount: 100,
  },
  {
    name: 'Khola',
    amount: 130,
  },
];

export const expensesSlice = createSlice({
  name: 'expensesSlice',
  initialState: initialExpensesState,
  reducers: {
    addExpense: (state, action) => {
      const {payload} = action;
      state.push(payload);
    },
  },
});
