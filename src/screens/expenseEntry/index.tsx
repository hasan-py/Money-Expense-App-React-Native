import * as React from 'react';
import {Button, View} from 'react-native';

export function ExpenseEntry({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.navigate('ExpenseList')} title="List" />
    </View>
  );
}
