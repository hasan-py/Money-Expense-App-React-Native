import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Dashboard} from '../dashboard';
import {Categories} from '../categories';
import {CustomDrawerContent} from '../../_master/globalComponents/drawer/CustomDrawerContent';
import {Expenses} from '../expenses';

export type NavigationsParamList = {
  Dashboard: undefined;
  Categories: undefined;
  Expenses: undefined;
};

const Drawer = createDrawerNavigator<NavigationsParamList>();

export function Navigations() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Categories" component={Categories} />
        <Drawer.Screen name="Expenses" component={Expenses} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
