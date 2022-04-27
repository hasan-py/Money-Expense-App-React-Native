import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Dashboard} from '../dashboard';
import {ExpenseEntry} from '../expenseEntry';
import {ExpenseList} from '../expenseList';

export type NavigationsParamList = {
  Dashboard: undefined;
  ExpenseEntry: undefined;
  ExpenseList: undefined;
};

const Drawer = createDrawerNavigator<NavigationsParamList>();

export function Navigations() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="ExpenseEntry" component={ExpenseEntry} />
        <Drawer.Screen name="ExpenseList" component={ExpenseList} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
