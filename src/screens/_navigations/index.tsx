import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {COLORS} from '../../_master/constant/themes';

import {CustomDrawerContent} from '../../_master/globalComponents/customDrawerContent';
import {Categories} from '../categories';
import {Dashboard} from '../dashboard';
import {Expenses} from '../expenses';
import {StorageWrapper} from './storageWrapper';

export type NavigationsParamList = {
  Dashboard: undefined;
  Categories: undefined;
  Expenses: undefined;
};

const Drawer = createDrawerNavigator<NavigationsParamList>();

export function Navigations() {
  return (
    <StorageWrapper>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: COLORS.gray,
            },
            headerTintColor: COLORS.white,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          drawerContent={props => <CustomDrawerContent {...props} />}
          initialRouteName="Dashboard">
          <Drawer.Screen name="Dashboard" component={Dashboard} />
          <Drawer.Screen name="Categories" component={Categories} />
          <Drawer.Screen name="Expenses" component={Expenses} />
        </Drawer.Navigator>
      </NavigationContainer>
    </StorageWrapper>
  );
}
