import * as React from "react";
import { View, StyleSheet,Text } from "react-native";
import Animated,{useValue} from "react-native-reanimated";

//Local imports
import album from "../../services/Data/albumDetails";
import Content from "./album component/Content";
import Cover from "./album component/Cover";


export default () => {
  
  
  const { Value } = Animated;
  const y = new Value(0);

  return (
    <View style={styles.container}>
      <Cover {...{ y, album }} />
      <Content {...{ y, album }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
