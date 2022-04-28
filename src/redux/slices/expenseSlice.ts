import {createSlice} from '@reduxjs/toolkit';
import {setAsyncStorage} from '../../_master/utils/asyncStorage';

const initialExpensesState: any = [];

export const expensesSlice = createSlice({
  name: 'expensesSlice',
  initialState: initialExpensesState,
  reducers: {
    setInitialExpenses: (state, action) => {
      return action?.payload;
    },

    addExpense: (state, action) => {
      const {payload} = action;
      state.push(payload);
      setAsyncStorage('@expenses', state);
      return state;
    },
  },
});
