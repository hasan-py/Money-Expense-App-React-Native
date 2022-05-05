import {createSlice} from '@reduxjs/toolkit';
import moment from 'moment';
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
      const currentDateTime = moment().format();
      state.push({
        ...action?.payload,
        id: `catid-${state?.length + 1}`,
        createdAt: currentDateTime,
        updatedAt: currentDateTime,
      });

      state.reverse(); // For Descending Order
      setAsyncStorage('@categories', state);
      return state;
    },
  },
});
