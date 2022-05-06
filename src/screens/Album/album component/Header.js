import * as React from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import useDimension from "../../../services/useDimension";
import { BUTTON_HEIGHT } from "./ShufflePlay";



export default ({ artist, y }) => {
  
  const { interpolateNode , Extrapolate } = Animated;
  const {MIN_HEADER_HEIGHT, MAX_HEADER_HEIGHT,HEADER_DELTA,StatusBarHeight} = useDimension()
  const opacity = interpolateNode (y, {
    inputRange: [HEADER_DELTA - 16, HEADER_DELTA],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const textOpacity = interpolateNode (y, {
    inputRange: [HEADER_DELTA - 8, HEADER_DELTA - 4],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });


  return (
    <Animated.View style={[styles.container, { opacity, top: BUTTON_HEIGHT / 2 - MIN_HEADER_HEIGHT,
    height: MIN_HEADER_HEIGHT, paddingTop:StatusBarHeight}]}>
      <Animated.Text style={[styles.title, { opacity: textOpacity }]}>{artist}</Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
   top:0,
    left: 0,
    right: 0,
   
    backgroundColor: "black",
 
  },
  title: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "400",
  },
});
