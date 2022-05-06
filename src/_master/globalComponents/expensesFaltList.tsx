/* eslint-disable react-native/no-inline-styles */
import moment from 'moment';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {COLORS} from '../constant/themes';
import TextCustom from './TextCustom';

export function ExpensesFlatList({expensesData}: any) {
  return (
    <>
      <FlatList
        data={expensesData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => (
          <View key={index} style={styles.expensesCard}>
            <View>
              <TextCustom style={styles.moneyEmoji}>{'💸'}</TextCustom>
            </View>

            <View>
              <TextCustom isBold>{item?.expenseName}</TextCustom>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextCustom>{item?.category?.label}</TextCustom>
                <TextCustom>
                  {' | '}
                  {moment(item?.createdAt).format('DD ddd yyyy')}
                </TextCustom>
              </View>
              <TextCustom>
                {+item?.amount ? (+item?.amount?.toString()).toFixed(2) : 0}
                {' ৳'}
              </TextCustom>
            </View>
          </View>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  expensesCard: {
    padding: 15,
    borderRadius: 3,
    backgroundColor: COLORS.white,
    elevation: 2,
    flexDirection: 'row',
    marginVertical: 5,
  },
  moneyEmoji: {fontSize: 40, marginRight: 10},
});
