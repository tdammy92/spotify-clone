import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableWithoutFeedback
} from 'react-native';
import React, {useState, useEffect} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Local imports
import styles from './Library.style';
import LibraryData from '../../services/Data/LibraryData';


function Library() {
  const [IsGrid, setIsGrid] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      {/* Header section */}
      <View style={styles.headerWrapper}>
        <View style={styles.headerLeft}>
          <View style={styles.leftWrapperIcon}>
            <Text style={{color: 'white'}}>D</Text>
          </View>
          <Text style={{color: 'white', fontSize: 20}}>Your Library</Text>
        </View>
        <View style={styles.headerRight}>
          <EvilIcons name="search" color="white" size={30} />
          <Feather
            name="plus"
            color="white"
            size={26}
            style={{marginLeft: 22}}
          />
        </View>
      </View>

      {/* List section */}

      <View style={[styles.ListContainer,{
          //  alignItems:IsGrid? 'center':null,
      }]}>
        <FlatList
          data={LibraryData}
          key={IsGrid}
          keyExtractor={(_, id) => `${'data' + id}`}
          numColumns={IsGrid === false ? 1 : 2}
          renderItem={({item}) => {
            return (
              <View
                style={[
                  styles.ListWrapper,
                  {
                    flexDirection: IsGrid ? null : 'row',
                    height: IsGrid ? 150 : 80,
               
                    marginTop:IsGrid? 30:null,
         
                paddingHorizontal:IsGrid? 25:10,
                  },
                ]}>
                <Image
                  style={{
                    width:IsGrid? 100:50,
                    height: IsGrid? 100:50,
                    borderRadius: 40,
                    marginRight: 15,
                  }}
                  source={{uri: item.artwork}}
                />
                <View style={{
                  justifyContent:IsGrid? 'space-between':null,
                  alignItems:IsGrid? 'center':null,
                }}>
                  <Text style={{color: 'white'}}>{item.artist}</Text>
                  <Text style={{color: 'white'}}>artist</Text>
                </View>
              </View>
            );
          }}
          ListHeaderComponent={
            <View style={styles.ListHeaderWarpper}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialCommunityIcons
                  name="arrow-up-down"
                  color="white"
                  size={22}
                  style={{marginRight: 7}}
                />
                <Text style={{color: 'white', fontSize: 12}}>
                  Recently Played
                </Text>
              </View>
              {!IsGrid ? (
                <TouchableWithoutFeedback  onPress={()=>setIsGrid(!IsGrid)}>

                <MaterialCommunityIcons
                  name="view-grid-outline"
                  color="white"
                  size={24}
                  style={{marginLeft: 20}}
                />
                </TouchableWithoutFeedback>
              ) : (
                <TouchableWithoutFeedback  onPress={()=>setIsGrid(!IsGrid)}>

                <MaterialCommunityIcons
                  name="view-headline"
                  color="white"
                  size={24}
                  style={{marginLeft: 20}}
                />
                </TouchableWithoutFeedback>
              )}
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}

export default Library;
