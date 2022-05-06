import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';

import GlobalStore from './src/redux/store';
import {Navigations} from './src/screens/_navigations';
import {COLORS} from './src/_master/constant/themes';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar backgroundColor={COLORS.gray} />
      <Provider store={GlobalStore}>
        <Navigations />
        <Toast position="bottom" />
      </Provider>
    </>
  );
};

export default App;
