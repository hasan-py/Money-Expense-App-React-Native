import React from 'react';
import {StyleSheet} from 'react-native';
import {COLORS} from '../constant/themes';
import TextCustom from './TextCustom';

export function NoDataFound({data, message}: any) {
  return (
    <>
      {data?.length === 0 ? (
        <TextCustom style={styles.textStyle}>
          {message || 'No data found'}
        </TextCustom>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: COLORS.gray,
    textAlign: 'center',
    marginVertical: 10,
  },
});
