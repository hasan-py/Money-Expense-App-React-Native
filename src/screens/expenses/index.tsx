import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {expensesSliceActions} from '../../redux/slices';
import {COLORS} from '../../_master/constant/themes';
import FabButton from '../../_master/globalComponents/fabButton';
import {CustomSelect} from '../../_master/globalComponents/fromControl/customSelect';
import {CustomTextInput} from '../../_master/globalComponents/fromControl/customTextInput';
import GlobalModal from '../../_master/globalComponents/globalModal';

export function Expenses() {
  const dispatch = useDispatch();
  const expensesDataStore = useSelector((state: any) => state.expenses);
  const categoriesListStore = useSelector((state: any) => state?.categories);

  const [showModal, setShowModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [expensesData, setExpensesData] = useState<any>([]);

  useEffect(() => {
    setExpensesData(expensesDataStore);
  }, [expensesDataStore]);

  const [formData, setFormData] = useState<any>({
    expenseName: '',
    amount: '',
    category: '',
  });

  const clearFormData = (setter: Function) => {
    setter({expenseName: '', amount: '', category: ''});
  };

  const setFieldValue = (key: string, value: any) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const filterDataHandler = () => {
    const filterData = expensesDataStore?.filter(
      (item: any) => item?.category?.value === formData?.category?.value,
    );
    setExpensesData(filterData);
    setFilterModal(false);
  };

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.tabWrapper}>
          <TouchableOpacity
            onPress={() => {
              setExpensesData(expensesDataStore);
            }}>
            <Text style={styles.btnTabActive}>Last Month</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              clearFormData(setFormData);
              setFilterModal(true);
            }}>
            <Text style={styles.btnTab}>Filter Expenses</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={expensesData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => (
            <View key={index} style={styles.expensesCard}>
              <Text style={styles.moneyEmoji}>{'💸'}</Text>
              <View style={{flexDirection: 'column'}}>
                <Text style={{fontWeight: 'bold'}}>{item?.expenseName}</Text>
                <Text>{item?.category?.label}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text>
                    {+item?.amount ? (+item?.amount?.toString()).toFixed(2) : 0}
                    {' ৳'}
                  </Text>
                  <Text style={{marginLeft: 10, fontSize: 12}}>
                    {moment(item?.createdAt).format('DD ddd yyyy hh:mm A')}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />

        {/* Create Catergory Modal */}
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
                  dispatch(expensesSliceActions.addExpense(formData));
                  clearFormData(setFormData);
                  setShowModal(false);
                }}
                title="Add Expense"
              />
            </View>
          </View>
        </GlobalModal>

        <GlobalModal
          isMid
          showModal={filterModal}
          setShowModal={setFilterModal}>
          <View style={styles.modalContainer}>
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
                  filterDataHandler();
                }}
                title="View Expenses"
              />
            </View>
          </View>
        </GlobalModal>

        <FabButton
          onPress={() => {
            setShowModal(true);
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {flex: 1},
  expensesCard: {
    padding: 15,
    borderRadius: 3,
    backgroundColor: 'white',
    elevation: 2,
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  modalContainer: {
    padding: 20,
  },
  tabWrapper: {
    marginTop: 8,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  btnTabActive: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  btnTab: {
    fontSize: 14,
    color: COLORS.gray,
  },
  moneyEmoji: {fontSize: 40, marginRight: 10},
});
