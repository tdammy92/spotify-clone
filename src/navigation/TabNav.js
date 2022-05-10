//module imports
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';

//local imports
import {Player} from '../components';
import {FetchCurrentlyPlaying, playerSelector,getRecentlyPlayedSongs} from '../store/playerReducer';
import {fetchCategories, categorySelector} from '../store/categoryReducer'
import {fetchUserPlaylist} from '../store/playlistReducer'
import {albumRelease, albumSelector} from '../store/albumReducer'

import {Home, Search, Library, Album} from '../screens';
import {colors, spacing, BorderRadius, TextSize} from '../theme/theme';

const Stack = createStackNavigator();
const {Navigator, Screen} = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="hom" component={Home} />
      <Stack.Screen name="album" component={Album} />
    </Stack.Navigator>
  );
}

function TabNav() {
  const dispatch = useDispatch();

  const {currentlyPlaing,recentlyPlayed, showPlayer} = useSelector(playerSelector);
  

  useEffect(() => {
    dispatch(getRecentlyPlayedSongs())
    dispatch(FetchCurrentlyPlaying());
    dispatch(fetchUserPlaylist());
    dispatch(fetchCategories());
    dispatch(albumRelease());
  }, []);

  // console.log({currentlyPlaing});
  
  // console.log(showPlayer)
  return (
    <>
  {recentlyPlayed[0]?.track && <Player />}
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#1b1813',
            paddingTop: 5,
            paddingBottom: 5,
            borderTopWidth: 0,
          },

          tabBarHideOnKeyboard: true,
        }}>
        <Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialIcons name="home-filled" color={color} size={24} />
            ),
          }}
        />
        <Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({color}) => (
              <EvilIcons name="search" color={color} size={30} />
            ),
          }}
        />
        <Screen
          name="Your Library"
          component={Library}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="bookshelf"
                color={color}
                size={24}
              />
            ),
          }}
        />
      </Navigator>
    </>
  );
}

export default TabNav;
