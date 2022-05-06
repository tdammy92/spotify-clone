import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Register,Login,Intro } from '../screens';
import TabNav from './TabNav';




const {Navigator, Screen} = createStackNavigator();


export default function Stack() {
  return (
    <Navigator  screenOptions={{
      header: () => null,
    }} >
      <Screen name="intro" component={Intro} />
      <Screen name="login" component={Login} />
      <Screen name="register" component={Register} />
      <Screen name="homeScreen" component={TabNav} />
    </Navigator>
  );
}
