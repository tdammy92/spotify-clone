import {StyleSheet, Text, View, ScrollView,TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

//Local imports
import Song from '../Song/Song';
import {colors, spacing, BorderRadius, TextSize} from '../../theme/theme';

export default function AlbumCategory({navigation,item}) {
  return (

   

    <View style={styles.albumWrapper}>
      <Text style={styles.albumTitle}>{item.title}</Text>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {item.albums.map((sItem, ind) => {
            return (
              <Song
                key={`${ind}`}
                img={sItem.imageUri}
                title={sItem.artistsHeadline}
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
