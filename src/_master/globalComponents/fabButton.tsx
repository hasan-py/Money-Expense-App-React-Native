import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../constant/themes';

function FabButton(props: any) {
  return (
    <>
      <TouchableOpacity
        onPress={() => props.onPress()}
        style={[styles.fabStyle]}>
        <Icon
          name={props.name || 'plus'}
          size={props.size || 40}
          color={COLORS.white}
        />
      </TouchableOpacity>
    </>
  );
}

export default FabButton;

const styles = StyleSheet.create({
  fabStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    position: 'absolute',
    top: '80%',
    right: 17,
    height: 60,
    backgroundColor: COLORS.gray,
    borderRadius: 100,
  },
});
