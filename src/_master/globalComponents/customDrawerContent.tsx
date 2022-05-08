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
        <View key={index} style={{marginHorizontal: 10, marginVertical: 8}}>
          <TouchableOpacity
            onPress={() => {
              if (state?.index !== index) {
                return navigation.navigate(item?.link);
              }
            }}
            style={{
              ...styles.menu,
              backgroundColor:
                state?.index === index ? COLORS.grayLight : COLORS.white,
            }}>
            <Icon name={item?.icon} size={26} color={COLORS.gray} />
            <TextCustom isBold style={{marginLeft: 10, fontSize: 16}}>
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
    width: 45,
    height: 45,
    borderRadius: 5,
  },
  logoTextWrapper: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderColorLight,
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
