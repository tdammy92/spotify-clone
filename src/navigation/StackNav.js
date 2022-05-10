import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//local imports
import {Register, Login, Intro,PlayerScreen} from '../screens';
import TabNav from './TabNav';
import {getData} from '../services/Db';

const {Navigator, Screen} = createStackNavigator();

export default function Stack() {
  const [IsAuthenticated, setIsAuthenticated] = useState(false);

  async function getUserFromDB() {
    // const user = await getData('accessToken').then();

    await getData('accessToken')
      .then(data => data)
      .then(accessToken => {

      //  const res = JSON.parse(value)
        // console.log('fromStack',accessToken);
        if (accessToken) {
          setIsAuthenticated(true)
        } else {
          setIsAuthenticated(false)
        }
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getUserFromDB();
  }, []);

  return (
    <Navigator
      screenOptions={{
        header: () => null,
      }}>
      {!IsAuthenticated && <Screen name="intro" component={Intro} />}
      {/* <Screen name="login" component={Login} />
      <Screen name="register" component={Register} /> */}
      <Screen name="homeScreen" component={TabNav} />
      <Screen name="playerScreen" component={PlayerScreen} />
    </Navigator>
  );
}
