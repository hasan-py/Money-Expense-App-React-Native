/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../constant/themes';
import TextCustom from './TextCustom';

const drawerMenu = [
  {link: 'Dashboard', icon: 'chart-box-outline'},
  {link: 'Categories', icon: 'expand-all-outline'},
  {link: 'Expenses', icon: 'cash-minus'},
];

export function CustomDrawerContent(props: any) {
  const {navigation, state} = props;

  return (
    <>
      <View style={styles.logoTextWrapper}>
        <View style={styles.logoWrapper}>
          <Image
            style={styles.logo}
            source={require('../../../assets/MoneyExpense.png')}
          />
        </View>
        <TextCustom isBold style={styles.logoText}>
          Money Expense
        </TextCustom>
      </View>

      {drawerMenu?.map((item, index) => (
        <View key={index} style={{margin: 10}}>
          <TouchableOpacity
            onPress={e => {
              console.log('E', JSON.stringify(e.eventPhase, null, 2));
              navigation.navigate(item?.link);
              // setTimeout(() => {}, 500);
            }}
            style={{
              ...styles.menu,
              backgroundColor:
                state?.index === index ? COLORS.grayLight : COLORS.white,
            }}>
            <Icon name={item?.icon || 'home'} size={24} color={COLORS.gray} />
            <TextCustom isBold style={{marginLeft: 10}}>
              {item?.link}
            </TextCustom>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  logoWrapper: {
    marginLeft: 15,
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  logoTextWrapper: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderColor,
    marginBottom: 10,
  },
  logoText: {
    paddingHorizontal: 10,
    fontSize: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
