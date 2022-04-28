import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

export function Dashboard() {
  const expensesData = useSelector((state: any) => state?.expenses);

  return (
    <View style={styles.wrapper}>
      <View style={styles.totalCard}>
        <Text style={styles.totalText}>
          {expensesData?.reduce(
            (acc: number, obj: any) => acc + obj?.amount,
            0,
          ) || 0}{' '}
          BDT{' '}
        </Text>
        <Text>Total Expense</Text>
      </View>

      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Recent Expense</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {margin: 20},
  totalCard: {
    padding: 20,
    backgroundColor: 'white',
    elevation: 1,
    borderRadius: 5,
  },
  modalContainer: {
    padding: 20,
  },
  totalText: {fontSize: 18, fontWeight: 'bold'},
});
