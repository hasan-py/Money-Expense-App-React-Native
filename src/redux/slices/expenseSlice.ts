import {createSlice} from '@reduxjs/toolkit';
import moment from 'moment';
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
      const currentDateTime = moment().format();
      state.push({
        ...payload,
        id: `expense-${state.length + 1}`,
        updatedAt: currentDateTime,
      });

      state.reverse(); // For Descending Order
      setAsyncStorage('@expenses', state);
      return state;
    },
  },
});
