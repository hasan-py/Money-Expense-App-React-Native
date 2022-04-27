import * as React from 'react';
import {Button, View} from 'react-native';

export function ExpenseList({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Dashboard')}
        title="Dashboard"
      />
    </View>
  );
}
