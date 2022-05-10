import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect,useState} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useDispatch, useSelector} from 'react-redux';

//local imports
import {colors, spacing, BorderRadius, TextSize} from '../../theme/theme';
import DummyData from '../../services/Data/albumCategories.js';
import TopData from '../../services/Data/TopGridData';
import {Player, Loader, Song} from '../../components';
import {removeData,getData} from '../../services/Db';
import styles from './Home.style';
import {fetchUserPlaylist, playlistSelector} from '../../store/playlistReducer';
import {fetchCategories, categorySelector} from '../../store/categoryReducer';
import {FetchCurrentlyPlaying,getRecentlyPlayedSongs,playerSelector} from '../../store/playerReducer'
import {albumRelease, albumSelector} from '../../store/albumReducer';
import AlbumCateObject from '../../components/Album/AlbumCateObject';


function removeLS() {
    removeData('accessToken')
  removeData('userData')
  removeData('userid')
}

//TopGrid Section
function TopList({item}) {


  // removeData('accessToken')
  // removeData('userData')
  // removeData('userid')

  // useEffect(() => {

  // }, [])

  return (
    <View style={styles.TopGridItem}>
      <View style={{height: '100%', width: '30%'}}>
        <Image
          style={{height: '100%'}}
          source={{uri: item.artwork}}
          resizeMode="cover"
        />
      </View>

      <View
        style={{
          width: '70%',
          marginLeft: 10,
          justifyContent: 'center',
          height: '100%',
        }}>
        <Text style={{color: 'white', fontSize: TextSize.header.fontSize}}>
          {item.title}
        </Text>
      </View>
    </View>
  );
}

const Home = () => {
  const dispatch = useDispatch();
  const {IsLoading, data} = useSelector(playlistSelector);
  const {isLoading:{categoryLoading}, category} = useSelector(categorySelector);
  const {release,isLoading:{albumLoading}} = useSelector(albumSelector);
  const {recentlyPlayed}=  useSelector(playerSelector)
  const [greet, setgreet] = useState('')
  const [User, setUser] = useState({})



  //check time to greet user
function greetUser() {
const time = new Date().getHours();

if (time===0 || time<12) return setgreet('Morning');
if (time===1 || time<17) return setgreet('Afternoon');
setgreet('Evening')
  
}

//function to get the currenly logged in user from Local DB
async function getUserFromDB() {
  const user = await getData('userData');
  setUser(user)
}

  useEffect(() => {
    // dispatch(getRecentlyPlayedSongs())
    // dispatch(fetchUserPlaylist());
    // dispatch(fetchCategories());
    // dispatch(albumRelease());
    // dispatch(FetchCurrentlyPlaying())
    getUserFromDB()
    greetUser()
  }, []);

  if (categoryLoading  ) {
    return <Loader />;
  }
  
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <LinearGradient
          useAngle={true}
          angle={-45}
          angleCenter={{x: -5, y: 0.1}}
          colors={['black', '#5800ff', 'white']}
          style={styles.linearGradient}>
          <View style={styles.screenWrapper}>
            {/* Header section */}
            <View style={styles.HeaderContainer}>
              <Text style={styles.HeaderText}>Good {greet}  {User?.display_name} </Text>

              <View style={styles.IconWrapper}>
                <TouchableOpacity style={{marginRight: 15}}>
                  <Entypo
                    name="back-in-time"
                    color={colors.borders}
                    size={26}
                  />
                </TouchableOpacity>
                <TouchableOpacity  onPress={removeLS}>
                  <EvilIcons name="gear" color={colors.borders} size={30} />
                </TouchableOpacity>
              </View>
            </View>

            {/* top body section grid */}
            <View
              style={{
                marginHorizontal: 20,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              {/* <FlatList
                data={TopData}
                keyExtractor={(_, i) => `${'data' + i}`}
                numColumns={2}
                renderItem={({item}) => <TopList item={item} />}
              /> */}
              {TopData.map((item, i) => {
                return <TopList key={`${'id' + i}`} item={item} />;
              })}
            </View>

            {/* Body section */}
   <View style={styles.albumConatiner}>
            <ScrollView>
                {/* {console.log(category.categories)} */}
                {AlbumCateObject?.map((item, i) => {
                  return (
                    <View key={`${'data' + i}`} style={styles.albumWrapper}>
                      <Text style={styles.albumTitle}>{item.title}</Text>
                      <View>
                        <ScrollView
                          showsHorizontalScrollIndicator={false}
                          horizontal={true}>
                   {item.title === 'Recently Played' &&
                          recentlyPlayed?.map((sItem, ind) => {
                            const {album,artists} = sItem?.track;
                            {/* console.log("albumId",album?.id) */}
                              return (
                                <Song
                                  key={`${"sItem"+ind}`}
                                  img={album?.images[0]?.url}
                                  title={artists[0]?.name}
                                  albumId={album?.id}
                                  // owner={sItem?.owner?.display_name}
                                />
                              );
                            })} 
                          {item.title === 'New Release' &&
                            release?.albums?.items.map((sItem, ind) => {
                              return (
                                <Song
                                  key={`${sItem?.id}`}
                                  img={sItem?.images[0].url}
                                  title={sItem?.name}
                                  owner={sItem?.owner?.display_name}
                                  // albumId={}
                                />
                              );
                            })}
                    
                            {item.title === 'Popular Playlists' &&
                          data?.items?.map((sItem, ind) => {
                              return (
                                <Song
                                  key={`${sItem?.id}`}
                                  img={sItem?.images[0].url}
                                  title={sItem?.name}
                                  owner={sItem?.owner?.display_name}
                                  // albumId={}
                                />
                              );
                            })}
                       
                          {item.title === 'Categories' &&
                            category?.categories?.items?.map((sItem, ind) => {
                              return (
                                <Song
                                  key={`${sItem.id}`}
                                  img={sItem?.icons[0]?.url}
                                  title={sItem?.name}
                                  // albumId={}
                                />
                              );
                            })}
                        </ScrollView>
                      </View>
                    </View>
                  );
                })}
                {/* {AlbumCateObject.map((item, i) => {
                 return <AlbumCategory key={item.id} item={item} release={release}/>
                })} */}

                {/* {AlbumCateObject.map((item, i) => {

                 return <AlbumCategory key={item.id} item={item} category={category}/>
                })} */}
              </ScrollView>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default Home;
