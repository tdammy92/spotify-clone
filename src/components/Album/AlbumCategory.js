import {StyleSheet, Text, View, ScrollView,TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

//Local imports
import Song from '../Song/Song';
import {colors, spacing, BorderRadius, TextSize} from '../../theme/theme';

export default function AlbumCategory({navigation,item,category,release}) {
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
