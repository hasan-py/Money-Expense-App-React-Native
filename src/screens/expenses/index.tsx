import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {categoriesSliceActions} from '../../redux/slices';
import FabButton from '../../_master/globalComponents/fabButton';
import {CustomTextInput} from '../../_master/globalComponents/fromControl/customTextInput';
import GlobalModal from '../../_master/globalComponents/globalModal';

export function Expenses() {
  const expensesData = useSelector((state: any) => state?.expenses);
  const [showModal, setShowModal] = useState(false);

  const [fromData, setFromData] = useState({
    expenseName: '',
    amount: '',
    category: '',
  });

  const setFieldValue = (key: string, value: any) => {
    setFromData({
      ...fromData,
      [key]: value,
    });
  };

  const dispatch = useDispatch();

  return (
    <>
      <View style={styles.wrapper}>
        <Text>Expenses</Text>

        <FlatList
          data={expensesData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => (
            <>
              <View style={styles.categoryCard}>
                <Text>{`${index + 1}. ${item?.name}`}</Text>
              </View>
            </>
          )}
        />

        {/* Create Catergory Modal */}
        <GlobalModal isMid showModal={showModal} setShowModal={setShowModal}>
          <View style={styles.modalContainer}>
            <CustomTextInput
              setValue={(e: string) => setFieldValue('expenseName', e)}
              value={fromData?.expenseName}
              name={'expenseName'}
              label={'Expense Name'}
              placeholder={'Type a expense name'}
            />

            <CustomTextInput
              setValue={(e: string) => setFieldValue('amount', e)}
              value={fromData?.amount}
              name={'amount'}
              keyboardType={'numeric'}
              label={'Amount'}
              placeholder={'Amount'}
            />

            <View>
              <Button
                disabled={
                  fromData?.amount?.length === 0 &&
                  fromData?.amount?.length === 0
                }
                onPress={() => {
                  // dispatch(
                  //   categoriesSliceActions.addCategory({
                  //     name: categoryName,
                  //   }),
                  // );
                  // setCategoryName('');
                  setShowModal(false);
                }}
                title="Add Category"
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
  categoryCard: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 2,
    marginVertical: 10,
  },
  modalContainer: {
    padding: 20,
  },
});
