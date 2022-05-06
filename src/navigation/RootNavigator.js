
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './StackNav';

const RootNavigator = () => {
  return (
    <NavigationContainer>
     <Stack/>
    </NavigationContainer>
  )
}

export default RootNavigator

