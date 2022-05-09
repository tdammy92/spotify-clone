import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';

//Local imports
import styles from './Library.style';
import LibraryData from '../../services/Data/LibraryData';
import {getRecentlyPlayedSongs,playerSelector} from '../../store/playerReducer';
import {getData}  from "../../services/Db"

function Library() {
  const [IsGrid, setIsGrid] = useState(false);
  const [User, setUser] = useState({})
  const dispatch = useDispatch();


  //get recently played 
  const {recentlyPlayed}=  useSelector(playerSelector)


//function to get the currenly logged in user from Local DB
  async function getUserFromDB() {
    const user = await getData('userData');
    setUser(user)
  }


  useEffect(() => {
    dispatch(getRecentlyPlayedSongs());

    getUserFromDB()
    
  }, []);

  // console.log('from Library',recentlyPlayed.map((item)=>)artists);


  // console.log(User.display_name);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header section */}
      <View style={styles.headerWrapper}>
        <View style={styles.headerLeft}>
          <View style={styles.leftWrapperIcon}>
            <Text style={{color: 'white'}}>{User?.display_name?.substr(0,1)}</Text>
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

      <View
        style={[
          styles.ListContainer,
          {
            //  alignItems:IsGrid? 'center':null,
          },
        ]}>
        <FlatList
          data={recentlyPlayed}
          key={IsGrid}
          keyExtractor={(_, id) => `${'data' + id}`}
          numColumns={IsGrid === false ? 1 : 2}
          renderItem={({item}) => {
           
            // console.log(item.track.album.images[0].url
            // )
            return       <View
                style={[
                  styles.ListWrapper,
                  {
                    flexDirection: IsGrid ? null : 'row',
                    height: IsGrid ? 150 : 80,

                    marginTop: IsGrid ? 30 : null,

                    paddingHorizontal: IsGrid ? 25 : 10,
                  },
                ]}>
                <Image
                  style={{
                    width: IsGrid ? 100 : 50,
                    height: IsGrid ? 100 : 50,
                    borderRadius: 40,
                    marginRight: 15,
                  }}
                  source={{uri:item.track.album.images[0].url}}
                />
                <View
                  style={{
                    justifyContent: IsGrid ? 'space-between' : null,
                    alignItems: IsGrid ? 'center' : null,
                  }}>
                  <Text style={{color: 'white'}}>{item?.track?.artists[0]?.name}</Text>
                  <Text style={{color: 'white'}}>artist</Text>
                </View>
              </View>
            
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
                <TouchableWithoutFeedback onPress={() => setIsGrid(!IsGrid)}>
                  <MaterialCommunityIcons
                    name="view-grid-outline"
                    color="white"
                    size={24}
                    style={{marginLeft: 20}}
                  />
                </TouchableWithoutFeedback>
              ) : (
                <TouchableWithoutFeedback onPress={() => setIsGrid(!IsGrid)}>
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
