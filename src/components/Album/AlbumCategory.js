import {StyleSheet, Text, View, ScrollView,TouchableWithoutFeedback} from 'react-native';
import React,{useEffect,useState} from 'react';
// import { useNavigation } from '@react-navigation/native';
import { useDispatch,useSelector } from 'react-redux';

//Local imports
import Song from '../Song/Song';
import {colors, spacing, BorderRadius, TextSize} from '../../theme/theme';
import { getAlbumDetails } from '../../store/albumReducer';




export default function AlbumCategory({item,category,release}) {


  


  const dispatch = useDispatch()
  
  
  useEffect(() => {

    // console.log("from albumScreen",albumId);
    dispatch()
  }, [])
  
  return (
    <View style={styles.albumWrapper}>
      <Text style={styles.albumTitle}>{item.title}</Text>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {item.title === 'Happy Vibes' && release?.albums?.items.map((sItem, ind) => {
            return (
              <Song
                key={`${sItem.id}`}
                img={sItem.images[0].url}
                title={sItem.name}
                owner={sItem?.owner?.display_name}
        
              />
            );
          })}
          {item.title === 'Categories' && category?.categories?.items.map((sItem, ind) => {
            return (
              <Song
                key={`${sItem.id}`}
                img={sItem.icons[0].url}
                title={sItem.name}
        
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
 
  );
}

const styles = StyleSheet.create({

    albumWrapper:{
        marginHorizontal:10
    },
  albumTitle: {
    fontSize: TextSize.title2.fontSize,
    color: 'white',
    marginVertical: spacing.medium,
  },
});
