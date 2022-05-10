import * as React from "react";
import { View, Text, StyleSheet,TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from 'react-native-vector-icons/Feather';




export default ({ track, index,albumDetails }) => {


  const navigation = useNavigation()

  function HnadleNavigation() {
    navigation.navigate('playerScreen',{track,albumDetails})
  }

const {name,artists}= track

 return (
 <TouchableWithoutFeedback  onPress={HnadleNavigation}>

 <View style={styles.row}>
    <View style={styles.cell}>
      <Text style={styles.index}>{index}</Text>
    </View>
    <View style={[styles.cell, { flex: 1 }]}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.artist}>{artists[0].name}</Text>
    </View>
    <View style={styles.cell}>
      <Feather name="more-vertical" color="#b2b3b4" size={24} />
    </View>
  </View>
 </TouchableWithoutFeedback>
  
  )};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    backgroundColor: "black",
  },
  cell: {
    padding: 16,
    justifyContent: "center",
  },
  index: {
    color: "#b2b3b4",
  },
  artist: {
    color: "#b2b3b4",
  },
  name: {
    color: "white",
  },
});
