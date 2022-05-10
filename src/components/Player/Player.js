import React, {useState,useEffect,useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  Animated
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch,useSelector } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//Local imports
import AlbumDetails from '../../services/Data/albumDetails';
import { playerSelector } from '../../store/playerReducer';
import { transform } from '@babel/core';

export default function Player() {
  // const [Song, setSong] = useState(AlbumDetails.tracks[0]);
  const [Isplaying, setIsplaying] = useState(true)
  const {recentlyPlayed,showPlayer}= useSelector(playerSelector)

  const scale = useRef(new Animated.Value(0)).current;


  const navigation = useNavigation()

//this will navigate to player screen
  function HandleNavigation() {
    navigation.navigate('playerScreen')

    // console.log("Player wiggt was clicked");
  }


  useEffect(() => {
   Animated.spring(scale,{toValue:1,useNativeDriver:false}).start();
  }, [])
  





  const {name,images,artists}  = recentlyPlayed[0]?.track?.album
  // console.log("from player Wgt",recentlyPlayed[0]?.track?.album?.artists[0]?.name);
  // console.log("from player Wgt",recentlyPlayed[0]?.track?.album?.images[0].url);
  // console.log("from player Wgt",recentlyPlayed[0]?.track?.album?.name);

 

  return (

    <TouchableWithoutFeedback  onPress={HandleNavigation}>
    <Animated.View style={[styles.PlayerContainer,{transform:[{scale}]}]}>
      <View style={styles.PlayerDetails}>
       {images && <Image style={styles.PlayerImage} source={{uri: images[0]?.url}} />}
        <View  style={{marginLeft:10,justifyContent:'center'}}>
        { name && <Text  style={{color:'white'}}>{name}</Text>}
          <Text  style={{color:'white',fontSize:12}}>{artists[0]?.name}</Text>
        </View>
      </View>
      <View style={styles.PlayerControls}>
        <TouchableWithoutFeedback>
          <Feather name="heart" color="white" size={22} />
        </TouchableWithoutFeedback>
      {Isplaying &&  <TouchableWithoutFeedback  onPress={()=>setIsplaying(!Isplaying)}>
          <FontAwesome name="play" color="white" size={22}  style={{marginLeft:24}}/>
        </TouchableWithoutFeedback>}
      { !Isplaying && <TouchableWithoutFeedback  onPress={()=>setIsplaying(!Isplaying)} >
          <FontAwesome name="pause" color="white" size={22}  style={{marginLeft:24}}/>
        </TouchableWithoutFeedback>}
      </View>
    </Animated.View>
    </TouchableWithoutFeedback>
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
