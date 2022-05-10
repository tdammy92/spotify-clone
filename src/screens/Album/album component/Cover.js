import * as React from "react";
import {
  Image, StyleSheet,Text
} from "react-native";
import Animated from "react-native-reanimated";
import useDimension from "../../../services/useDimension";
import { BUTTON_HEIGHT } from "./ShufflePlay";




export default ({y,albumDetails}) => {
  
  const { interpolateNode, Extrapolate } = Animated;

  const {MIN_HEADER_HEIGHT, MAX_HEADER_HEIGHT,HEADER_DELTA} = useDimension()
  // console.log("from Cover",y);

  const scale = interpolateNode(y, {
    inputRange: [(-MAX_HEADER_HEIGHT), 0],
    outputRange: [4, 1],
    extrapolateRight: Extrapolate.CLAMP,
  });
  const opacity = interpolateNode(y, {
    inputRange: [-64, 0, HEADER_DELTA],
    outputRange: [0, 0.2, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const {images}= albumDetails


  return (
    <Animated.View style={[styles.container, { transform: [{ scale }], height: MAX_HEADER_HEIGHT + BUTTON_HEIGHT * 2 }]}>


    {images &&  <Image style={styles.image} source={{uri:images[0]?.url}} />}
      <Animated.View
        style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "black", opacity }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
   
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});
