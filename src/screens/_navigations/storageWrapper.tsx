import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {categoriesSliceActions, expensesSliceActions} from '../../redux/slices';
import {getAsyncStorage} from '../../_master/utils/asyncStorage';

export function StorageWrapper(props: any) {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await initializeAsyncStorageData();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Get all data from async storage and set to redux */
  const initializeAsyncStorageData = async () => {
    let categories = await getAsyncStorage('@categories');
    let expenses = await getAsyncStorage('@expenses');

    dispatch(categoriesSliceActions.setInitialCatergories(categories || []));
    dispatch(expensesSliceActions.setInitialExpenses(expenses || []));
  };

  return <>{props?.children}</>;
}
