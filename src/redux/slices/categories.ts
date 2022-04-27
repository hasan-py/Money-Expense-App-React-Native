import {createSlice} from '@reduxjs/toolkit';

const initialCategoriesState: any = [];

export const categoriesSlice = createSlice({
  name: 'categoriesSlice',
  initialState: initialCategoriesState,
  reducers: {
    addCategory: (state, action) => {
      const {payload} = action;
      state.push(payload);
    },
  },
});
