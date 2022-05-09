import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './StackNav';

import {Player} from '../components';

const RootNavigator = () => {
  return (
    <SafeAreaProvider >
      <NavigationContainer>
 
        <Stack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigator;
