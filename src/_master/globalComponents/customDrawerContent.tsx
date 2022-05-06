/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
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
          <Icon name={'cash-fast'} size={25} color={COLORS.white} />
        </View>
        <TextCustom isBold style={styles.logoText}>
          Money Expense
        </TextCustom>
      </View>

      {drawerMenu?.map((item, index) => (
        <View key={index} style={{margin: 5}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(item?.link);
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
    backgroundColor: COLORS.gray,
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
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
