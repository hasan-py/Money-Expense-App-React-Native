import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {categoriesSliceActions} from '../../redux/slices';
import FabButton from '../../_master/globalComponents/fabButton';
import GlobalModal from '../../_master/globalComponents/globalModal';

export function Categories() {
  const categoriesData = useSelector((state: any) => state?.categories);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <Text>Categories</Text>

      {/* Category List Will be here! */}
      <>
        {categoriesData?.map((item: any, key: number) => (
          <View key={key}>
            <Text>{item?.name}</Text>
          </View>
        ))}
      </>

      <FabButton
        onPress={() => {
          dispatch(
            categoriesSliceActions.addCategory({
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
          <Text>Hola</Text>
        </View>
      </GlobalModal>
    </View>
  );
}
