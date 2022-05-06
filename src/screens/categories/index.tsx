/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {COLORS} from '../../_master/constant/themes';
import {NoDataFound} from '../../_master/globalComponents/noDataFound';
import TextCustom from '../../_master/globalComponents/TextCustom';
import {CreateCategoryModal} from './components/createCategoryModal';

export function Categories() {
  const categoriesData = useSelector((state: any) => state?.categories);

  return (
    <>
      <View style={styles.wrapper}>
        <NoDataFound data={categoriesData} message="No categories available" />

        {/* Caegory List View */}
        <FlatList
          style={{marginVertical: 10}}
          data={categoriesData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => (
            <View key={index} style={styles.categoryCard}>
              <TextCustom style={styles.catIconWrapper}>
                <Icon
                  name={'expand-all-outline'}
                  size={20}
                  color={COLORS.gray}
                />
              </TextCustom>
              <TextCustom isBold>{item?.name}</TextCustom>
            </View>
          )}
        />

        <CreateCategoryModal />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {flex: 1, marginHorizontal: 10},
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
  catIconWrapper: {
    marginRight: 10,
    backgroundColor: COLORS.grayLight,
    padding: 5,
    borderRadius: 5,
    opacity: 0.5,
  },
});
