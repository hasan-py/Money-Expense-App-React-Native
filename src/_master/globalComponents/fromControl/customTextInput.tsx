import React from 'react';
import {Text, TextInput, View} from 'react-native';

export function CustomTextInput(props: any) {
  const {setValue, value, name, label} = props;

  return (
    <>
      <View>
        <Text style={{fontWeight: 'bold'}}>{label}</Text>
        <TextInput
          onChangeText={e => setValue(e)}
          value={value}
          placeholder={'Category Name'}
          name={name}
          style={{
            borderBottomWidth: 1,
            borderColor: 'gray',
            marginBottom: 20,
            paddingVertical: 5,
          }}
          {...props}
        />
      </View>
    </>
  );
}
