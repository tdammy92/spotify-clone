import {StyleSheet, Text, View, Image,TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

//Local imports
import {colors, spacing, BorderRadius, TextSize} from '../../theme/theme';


export default function Song({img, title,owner,albumId}) {


  const navigation = useNavigation();

  function HandlePress() {

    if (albumId) {

      // console.log(albumId)
      navigation.navigate('album',{albumId})
      // console.log(albumId);
    }
  }


  return (
    <TouchableWithoutFeedback  onPress={HandlePress}>

    <View style={styles.SongContainer} >
      <Image style={styles.thumbImage} source={{uri:img}} />
      <Text  style={styles.thumbImageTitle}>{title.substr(0,10)}</Text>
    { owner? <Text  style={styles.thumbImageTitle}>{owner.substr(0,15)}</Text>  : null}
    </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    SongContainer:{
        // width:120,
        margin:spacing.small
    },
    thumbImage:{
        height:120,
        width:120
    },
    thumbImageTitle:{
        width:120,
        // width:"100%",
        color:colors.borders,
        fontSize:TextSize.body.fontSize,
        lineHeight:TextSize.body.LineHight,
        marginVertical:spacing.small,
    }
});
