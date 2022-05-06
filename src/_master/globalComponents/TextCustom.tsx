/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import {COLORS} from '../constant/themes';

interface props {
  style?: any;
  otherprops?: any;
  isBold?: boolean;
  children: any;
}

const TextCustom = ({children, isBold, style, ...otherprops}: props) => {
  return (
    <Text
      style={[
        {color: COLORS.gray, fontWeight: isBold ? 'bold' : 'normal'},
        style,
      ]}
      {...otherprops}>
      {children}
    </Text>
  );
};

export default TextCustom;
