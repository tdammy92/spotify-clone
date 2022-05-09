/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//Module Imports
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';

//Local imports
import {RootNavigator} from './src/navigation';
import store from './src/store/store';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar
       translucent
        backgroundColor="transparent"
       />

       <Provider store={store}>
      <RootNavigator />

       </Provider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
