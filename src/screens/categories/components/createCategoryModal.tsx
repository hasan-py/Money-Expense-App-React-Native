import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {categoriesSliceActions} from '../../../redux/slices';
import {COLORS} from '../../../_master/constant/themes';
import FabButton from '../../../_master/globalComponents/fabButton';
import {CustomTextInput} from '../../../_master/globalComponents/fromControl/customTextInput';
import GlobalModal from '../../../_master/globalComponents/globalModal';

export function CreateCategoryModal() {
  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const dispatch = useDispatch();

  return (
    <>
      <GlobalModal isSmall showModal={showModal} setShowModal={setShowModal}>
        <View style={styles.modalContainer}>
          <CustomTextInput
            setValue={setCategoryName}
            value={categoryName}
            name={'category'}
            label={'Category Name'}
            placeholder={'Type a category name'}
          />

          <View>
            <Button
              disabled={categoryName?.length === 0}
              onPress={() => {
                dispatch(
                  categoriesSliceActions.addCategory({
                    name: categoryName,
                  }),
                );
                setCategoryName('');
                setShowModal(false);

                Toast.show({
                  type: 'success',
                  text1: 'Category',
                  text2: 'Category created successfully',
                });
              }}
              title="Add Category"
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
  wrapper: {flex: 1},
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 3,
    backgroundColor: COLORS.white,
    elevation: 2,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  modalContainer: {
    padding: 20,
  },
});
