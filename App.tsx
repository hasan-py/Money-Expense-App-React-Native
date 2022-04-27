import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import GlobalStore from './src/redux/store';
import {Navigations} from './src/screens/_navigations';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="black" />
      <Provider store={GlobalStore}>
        <Navigations />
      </Provider>
    </>
  );
};

export default App;
