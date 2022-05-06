import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {COLORS} from '../../../_master/constant/themes';
import CustomDatePicker from '../../../_master/globalComponents/fromControl/customDatePicker';
import {CustomSelect} from '../../../_master/globalComponents/fromControl/customSelect';
import GlobalModal from '../../../_master/globalComponents/globalModal';
import {filterDataHandler} from '../utils';

export function FilterExpensesModal({
  formData,
  setExpensesData,
  setFieldValue,
  filterModal,
  setFilterModal,
}: any) {
  const expensesDataStore = useSelector((state: any) => state.expenses);
  const categoriesListStore = useSelector((state: any) => state?.categories);

  return (
    <>
      <GlobalModal showModal={filterModal} setShowModal={setFilterModal}>
        <View style={styles.modalContainer}>
          <CustomDatePicker
            label="From Date"
            name="date"
            value={formData?.fromDate}
            setValue={(e: any) => setFieldValue('fromDate', e)}
          />

          <CustomDatePicker
            label="To Date"
            name="date"
            value={formData?.toDate}
            setValue={(e: any) => setFieldValue('toDate', e)}
          />

          <CustomSelect
            setValue={(e: string) => setFieldValue('category', e)}
            value={formData?.category}
            name={'category'}
            keyboardType={'numeric'}
            label={'Category'}
            placeholder={'Category'}
            options={
              categoriesListStore?.map((item: any) => {
                return {
                  value: item?.id,
                  label: item?.name,
                };
              }) || []
            }
          />

          <View>
            <Button
              onPress={() => {
                filterDataHandler(
                  expensesDataStore,
                  formData,
                  setFilterModal,
                  setExpensesData,
                );
              }}
              title="View Expenses"
              color={COLORS.gray}
            />
          </View>
        </View>
      </GlobalModal>
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
});
