import React from 'react';
import {Button, Text, View} from 'react-native';

const drawerMenu = ['Dashboard', 'Categories', 'Expenses'];

export function CustomDrawerContent(props: any) {
  const {navigation, state} = props;

  return (
    <>
      <View style={{padding: 20}}>
        <Text>Money Expense</Text>
      </View>

      {drawerMenu?.map((item, index) => (
        <View key={index} style={{margin: 5}}>
          <Button
            color={state?.index === index ? 'skyblue' : 'gray'}
            title={item}
            onPress={() => {
              navigation.navigate(item);
            }}
          />
        </View>
      ))}
    </>
  );
}
