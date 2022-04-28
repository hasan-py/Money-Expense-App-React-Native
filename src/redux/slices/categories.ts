import {createSlice} from '@reduxjs/toolkit';
import {setAsyncStorage} from '../../_master/utils/asyncStorage';

const initialCategoriesState: any = [];

export const categoriesSlice = createSlice({
  name: 'categoriesSlice',
  initialState: initialCategoriesState,
  reducers: {
    setInitialCatergories: (state, action) => {
      return action?.payload;
    },

    addCategory: (state, action) => {
      state.push(action?.payload);
      setAsyncStorage('@categories', state);
      return state;
    },
  },
});
