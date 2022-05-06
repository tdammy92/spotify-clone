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

//Local imports
import {RootNavigator} from './src/navigation';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar
      //  barStyle={'light-content'} 
      //  backgroundColor={'black'} 
       translucent
        backgroundColor="transparent"
       />
      <RootNavigator />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
