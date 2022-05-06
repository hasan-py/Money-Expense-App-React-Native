import moment from 'moment';
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {expensesSliceActions} from '../../../redux/slices';
import {COLORS} from '../../../_master/constant/themes';
import FabButton from '../../../_master/globalComponents/fabButton';
import CustomDatePicker from '../../../_master/globalComponents/fromControl/customDatePicker';
import {CustomSelect} from '../../../_master/globalComponents/fromControl/customSelect';
import {CustomTextInput} from '../../../_master/globalComponents/fromControl/customTextInput';
import GlobalModal from '../../../_master/globalComponents/globalModal';
import {clearFormData} from '../utils';

export function CreateExpensesModal({
  formData,
  setFormData,
  setFieldValue,
  showModal,
  setShowModal,
}: any) {
  const dispatch = useDispatch();
  const categoriesListStore = useSelector((state: any) => state?.categories);

  return (
    <>
      {/* Create Expense's Modal */}
      <GlobalModal isMid showModal={showModal} setShowModal={setShowModal}>
        <View style={styles.modalContainer}>
          <CustomTextInput
            setValue={(e: string) => setFieldValue('expenseName', e)}
            value={formData?.expenseName}
            name={'expenseName'}
            label={'Expense Name'}
            placeholder={'Type a expense name'}
          />

          <CustomTextInput
            setValue={(e: string) => setFieldValue('amount', e)}
            value={formData?.amount}
            name={'amount'}
            keyboardType={'numeric'}
            label={'Amount ৳'}
            placeholder={'Amount'}
          />

          <CustomDatePicker
            label="Expense Date"
            name="expenseDate"
            value={formData?.expenseDate}
            setValue={(e: any) => setFieldValue('expenseDate', e)}
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
              disabled={
                formData?.expenseName?.length === 0 ||
                formData?.amount?.length === 0 ||
                !formData?.category?.value
              }
              onPress={() => {
                dispatch(
                  expensesSliceActions.addExpense({
                    expenseName: formData?.expenseName,
                    amount: formData?.amount,
                    category: formData?.category,
                    createdAt: moment(
                      formData?.expenseDate || new Date(),
                    ).format(),
                  }),
                );
                clearFormData(setFormData);
                setShowModal(false);
                Toast.show({
                  type: 'success',
                  text1: 'Expenses',
                  text2: 'Expenses created successfully',
                });
              }}
              title="Add Expense"
              color={COLORS.gray}
            />
          </View>
        </View>
      </GlobalModal>

      <FabButton
        onPress={() => {
          setShowModal(true);
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
});
