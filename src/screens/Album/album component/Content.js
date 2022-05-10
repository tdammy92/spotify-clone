import * as React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import {onScroll} from 'react-native-redash';
import Feather from 'react-native-vector-icons/Feather';

//Local imports
import useDimension from '../../../services/useDimension';
import Track from './Track';
import ShufflePlay, {BUTTON_HEIGHT} from './ShufflePlay';
import Header from './Header';


export default ({y,albumDetails}) => {



  const {interpolateNode, Extrapolate} = Animated;
  const {MIN_HEADER_HEIGHT, MAX_HEADER_HEIGHT, HEADER_DELTA} = useDimension();
  const navigation = useNavigation();
  const height = interpolateNode(y, {
    // inputRange: [-MAX_HEADER_HEIGHT, 0],
    inputRange: [-MAX_HEADER_HEIGHT, -BUTTON_HEIGHT / 2],
    outputRange: [0, MAX_HEADER_HEIGHT + BUTTON_HEIGHT],
    // outputRange: [0, MAX_HEADER_HEIGHT],
    extrapolate: Extrapolate.CLAMP,
  });
  const opacity = interpolateNode(y, {
    inputRange: [-MAX_HEADER_HEIGHT / 2, 0, MAX_HEADER_HEIGHT / 2],
    outputRange: [0, 1, 0],
    // inputRange: [-MAX_HEADER_HEIGHT, 0],
    // outputRange: [0, MAX_HEADER_HEIGHT],
    extrapolate: Extrapolate.CLAMP,
  });

  // console.log({albumDetails})

    // console.log({albumDetails})

  // const artists = albumDetails?.artists;
  // const artistname = artists[0]?.name;
  // const name= albumDetails?.name;
  // const items = albumDetails?.tracks?.items;
  // const album_type = albumDetails?.album_type;
  // const release_date = albumDetails?.release_date;

  
  // const {artists,name,tracks:{items},album_type,release_date} = albumDetails;
  // const tracks = albumDetails?.tracks.items;

  const {artists,name,tracks:{items},album_type,release_date} = albumDetails;
  // const {artists,name,tracks:{items},album_type,release_date} = albumDetails;
  const artistname = artists[0]?.name

  return (
    <Animated.ScrollView
      onScroll={onScroll({y})}
      style={[
        styles.container,
        {paddingTop: MIN_HEADER_HEIGHT - BUTTON_HEIGHT / 2},
      ]}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={1}
      stickyHeaderIndices={[1]}>
      <View
        style={{
          height: MAX_HEADER_HEIGHT - BUTTON_HEIGHT,
        }}>
        <Animated.View style={[styles.gradient, {height}]}>
          <LinearGradient
            style={StyleSheet.absoluteFill}
            start={{x: 0, y: 0.3}}
            end={{x: 0, y: 1}}
            colors={['transparent', 'rgba(0, 0, 0, 0.2)', 'black']}
          />
        </Animated.View>
        <Animated.View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'absolute',
            top: -5,
            opacity: opacity,
            paddingHorizontal: 15,
            // zIndex:10
          }}>
          <TouchableWithoutFeedback  onPress={()=>navigation.goBack()}>
            <Feather name="chevron-left" color="white" size={32}/>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Feather name="heart" color="white" size={32}/>
          </TouchableWithoutFeedback>
        </Animated.View>

        <View style={styles.artistContainer}>
          <Animated.Text style={[styles.artist, {opacity}]}>
            {artistname}
          </Animated.Text>
          <Animated.Text style={[styles.artistDetails]}>{name}</Animated.Text>
          <Animated.Text style={[styles.artistDetails2]}>
          { album_type} | {release_date} 
          </Animated.Text>
        </View>
      </View>
      <View style={styles.header}>
        <Header {...{y, artistname}} />
        <ShufflePlay album_type={album_type}/>
      </View>

      <View style={styles.tracks}>
        {items.map((track, key) => (
          <Track index={key + 1} {...{track, key, artistname,albumDetails}} />
        ))}
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  gradient: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
  },
  artistContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artist: {
    textAlign: 'center',
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  artistDetails: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    // fontWeight: 'bold',
  },
  artistDetails2: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    // fontWeight: 'bold',
  },
  header: {
    marginTop: -BUTTON_HEIGHT,
  },
  tracks: {
    paddingTop: 32,
    backgroundColor: 'black',
  },
});
