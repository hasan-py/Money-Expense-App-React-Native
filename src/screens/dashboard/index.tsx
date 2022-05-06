import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {COLORS} from '../../_master/constant/themes';
import {ExpensesFlatList} from '../../_master/globalComponents/expensesFaltList';
import TextCustom from '../../_master/globalComponents/TextCustom';
import {filterTodaysData} from './utils';

export function Dashboard() {
  const expensesDataStore = useSelector((state: any) => state?.expenses);
  const [expensesData, setExpensesData] = useState<any>([]);
  const navigation = useNavigation();

  useEffect(() => {
    if (expensesDataStore) {
      filterTodaysData(expensesDataStore, setExpensesData);
    }
  }, [expensesDataStore]);

  // AsyncStorage.getAllKeys()
  //   .then(keys => AsyncStorage.multiRemove(keys))
  //   .then(() => alert('success'));

  return (
    <View style={styles.wrapper}>
      {/* Total Expense Card */}
      <View style={styles.totalCard}>
        <View>
          <TextCustom style={styles.totalText}>
            {expensesDataStore
              ?.reduce((acc: number, obj: any) => acc + +obj?.amount, 0)
              .toFixed(2) || 0}
            {' ৳'}
          </TextCustom>
          <TextCustom style={styles.totalExpenseText}>
            {'💶'} Total Expense's
          </TextCustom>
        </View>
        <View style={styles.dividerLine} />
        <View>
          <TextCustom style={styles.totalText}>
            {expensesData
              ?.reduce((acc: number, obj: any) => acc + +obj?.amount, 0)
              .toFixed(2) || 0}
            {' ৳'}
          </TextCustom>
          <TextCustom style={styles.totalExpenseText}>
            {'💷'} Today's Expense
          </TextCustom>
        </View>
      </View>

      {/* Today's Expense */}
      {expensesData?.length > 0 ? (
        <>
          <View style={styles.todayExpenseWrapper}>
            <TextCustom isBold>Today's Expense</TextCustom>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Expenses' as never);
              }}>
              <TextCustom isBold>View all</TextCustom>
            </TouchableOpacity>
          </View>

          <ExpensesFlatList expensesData={expensesData} />
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {flex: 1, marginHorizontal: 20, marginVertical: 10},
  totalCard: {
    padding: 20,
    backgroundColor: COLORS.white,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
  },
  modalContainer: {
    padding: 20,
  },
  totalText: {fontSize: 18, fontWeight: 'bold', color: COLORS.gray},
  dividerLine: {
    height: '100%',
    width: 1.5,
    backgroundColor: COLORS.grayLight,
  },
  todayExpenseWrapper: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalExpenseText: {
    color: COLORS.gray,
  },
});
