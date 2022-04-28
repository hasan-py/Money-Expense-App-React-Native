import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {categoriesSliceActions} from '../../redux/slices';
import FabButton from '../../_master/globalComponents/fabButton';
import {CustomTextInput} from '../../_master/globalComponents/fromControl/customTextInput';
import GlobalModal from '../../_master/globalComponents/globalModal';

export function Categories() {
  const categoriesData = useSelector((state: any) => state?.categories);
  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState('');

  const dispatch = useDispatch();

  return (
    <>
      <View style={styles.wrapper}>
        <Text>Categories</Text>

        <FlatList
          data={categoriesData}
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
