import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//Local imports
import AlbumDetails from '../../services/Data/albumDetails';

export default function Player() {
  const [Song, setSong] = useState(AlbumDetails.tracks[0]);

  return (
    <View style={styles.PlayerContainer}>
      <View style={styles.PlayerDetails}>
        <Image style={styles.PlayerImage} source={{uri: Song.imageUri}} />
        <View  style={{marginLeft:10,justifyContent:'center'}}>
          <Text  style={{color:'white'}}>{Song.title}</Text>
          <Text  style={{color:'white',fontSize:12}}>{Song.artist}</Text>
        </View>
      </View>
      <View style={styles.PlayerControls}>
        <TouchableWithoutFeedback>
          <Feather name="heart" color="white" size={22} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback >
          <FontAwesome name="play" color="white" size={22}  style={{marginLeft:24}}/>
        </TouchableWithoutFeedback>
        {/* <TouchableWithoutFeedback >
          <FontAwesome name="pause" color="white" size={22}  style={{marginLeft:24}}/>
        </TouchableWithoutFeedback> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  PlayerContainer: {
height:60,
backgroundColor: '#1b1813',
position:'absolute',
bottom:49,
width:'100%',
zIndex:10,
flexDirection:'row',
borderBottomWidth:1,
borderBottomColor:'black',
justifyContent:'space-between'

  
  },
  PlayerDetails: {
    flexDirection:'row'
  },
  PlayerImage: {
    height:"98%",
    width:'30%'
  },
  PlayerControls: {
    height:'100%',
    flexDirection:'row',
    // justifyContent:'center'
    alignItems:'center',
    marginRight:10,
    paddingHorizontal:10,
  },
});
