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


export default ({y, album: {artist, name, tracks, release, duration}}) => {
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
          }}>
          <TouchableWithoutFeedback  onPress={()=>navigation.goBack()}>
            <Feather name="chevron-left" color="white" size={38} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Feather name="heart" color="white" size={38} />
          </TouchableWithoutFeedback>
        </Animated.View>

        <View style={styles.artistContainer}>
          <Animated.Text style={[styles.artist, {opacity}]}>
            {artist}
          </Animated.Text>
          <Animated.Text style={[styles.artistDetails]}>{name}</Animated.Text>
          <Animated.Text style={[styles.artistDetails2]}>
           Album {release} | {duration}
          </Animated.Text>
        </View>
      </View>
      <View style={styles.header}>
        <Header {...{y, artist}} />
        <ShufflePlay />
      </View>

      <View style={styles.tracks}>
        {tracks.map((track, key) => (
          <Track index={key + 1} {...{track, key, artist}} />
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
    fontSize: 48,
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
