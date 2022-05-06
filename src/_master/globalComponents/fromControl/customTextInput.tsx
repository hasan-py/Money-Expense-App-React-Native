/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput, View} from 'react-native';
import {COLORS} from '../../constant/themes';
import TextCustom from '../TextCustom';

export function CustomTextInput(props: any) {
  const {setValue, value, name, label} = props;

  return (
    <>
      <View>
        <TextCustom isBold>{label}</TextCustom>
        <TextInput
          onChangeText={e => setValue(e)}
          value={value}
          placeholder={'Category Name'}
          name={name}
          style={{
            borderBottomWidth: 1,
            borderColor: COLORS.borderColorDark,
            marginBottom: 20,
            paddingVertical: 5,
          }}
          {...props}
        />
      </View>
    </>
  );
}
