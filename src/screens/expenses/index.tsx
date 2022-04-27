import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {expensesSliceActions} from '../../redux/slices';
import FabButton from '../../_master/globalComponents/fabButton';
import GlobalModal from '../../_master/globalComponents/globalModal';
import {useDispatch, useSelector} from 'react-redux';

export function Expenses() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const expensesData = useSelector((state: any) => state?.expenses);

  return (
    <View style={{flex: 1}}>
      <Text>Expenses</Text>

      {/* Category List Will be here! */}
      <>
        {expensesData?.map((item: any, key: number) => (
          <View key={key}>
            <Text>{item?.name}</Text>
          </View>
        ))}
      </>

      <FabButton
        onPress={() => {
          dispatch(
            expensesSliceActions.addExpense({
              name: 'Hellow!!',
              amount: 170,
            }),
          );
          console.log('Added');
          // setShowModal(true);
        }}
      />

      {/* Create Catergory Modal */}
      <GlobalModal showModal={showModal} setShowModal={setShowModal}>
        <View>
          <Text>Expenses Modal</Text>
        </View>
      </GlobalModal>
    </View>
  );
}
