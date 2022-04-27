import {combineReducers} from 'redux';
import {categoriesSlice} from './categories';
import {expensesSlice} from './expenseSlice';

/* All slice combine in one reducer */
export const rootReducer = combineReducers({
  expenses: expensesSlice.reducer,
  categories: categoriesSlice.reducer,
});

/* All reducer slice actions export */
export const {actions: categoriesSliceActions} = categoriesSlice;
export const {actions: expensesSliceActions} = expensesSlice;
