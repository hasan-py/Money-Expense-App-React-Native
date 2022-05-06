import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {COLORS} from '../../_master/constant/themes';
import {ExpensesFlatList} from '../../_master/globalComponents/expensesFaltList';
import {NoDataFound} from '../../_master/globalComponents/noDataFound';
import TextCustom from '../../_master/globalComponents/TextCustom';
import {CreateExpensesModal} from './components/createExpenseModal';
import {FilterExpensesModal} from './components/filterExpenseModal';

export function Expenses() {
  const expensesDataStore = useSelector((state: any) => state.expenses);

  const [showModal, setShowModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [expensesData, setExpensesData] = useState<any>([]);

  useEffect(() => {
    setExpensesData(expensesDataStore);
  }, [expensesDataStore]);

  /* Initial State for form control */
  const [formData, setFormData] = useState<any>({
    expenseName: '',
    amount: '',
    category: '',
    fromDate: new Date(),
    toDate: new Date(),
  });

  /* State Setter */
  const setFieldValue = (key: string, value: any) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  return (
    <>
      <View style={styles.wrapper}>
        {/* Tab Section */}
        <View style={styles.tabWrapper}>
          <TouchableOpacity
            onPress={() => {
              setExpensesData(expensesDataStore);
            }}>
            <TextCustom style={styles.btnTab}>All Expenses</TextCustom>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setFilterModal(true);
            }}>
            <TextCustom style={styles.btnTabActive}>Filter Expenses</TextCustom>
          </TouchableOpacity>
        </View>

        {/* No Data Found */}
        <NoDataFound data={expensesData} message="No expense available" />

        {/* All Expense's List View */}
        <ExpensesFlatList expensesData={expensesData} />

        {/* Create Expense's Modal */}
        <CreateExpensesModal
          formData={formData}
          setFormData={setFormData}
          setFieldValue={setFieldValue}
          showModal={showModal}
          setShowModal={setShowModal}
        />

        {/* Filter Expense's Modal */}
        <FilterExpensesModal
          formData={formData}
          setExpensesData={setExpensesData}
          setFieldValue={setFieldValue}
          filterModal={filterModal}
          setFilterModal={setFilterModal}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {flex: 1, marginHorizontal: 20},
  tabWrapper: {
    marginTop: 8,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnTabActive: {
    color: COLORS.gray,
    fontSize: 14,
    fontWeight: 'bold',
  },
  btnTab: {
    fontSize: 14,
    color: COLORS.gray,
  },
});
