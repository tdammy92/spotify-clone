import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
// import { useNavigation } from '@react-navigation/native';


export default function PlayerScreen({navigation, route}) {
  const {track, albumDetails} = route.params;

  //   const  p = albumDetails?.images[0].url
  const coverImage = albumDetails?.images[0]?.url;


//   const navigation = useNavigation()

  //   console.log("from playscreen",p);
  return (
    <View style={styles.container}>
      <LinearGradient
        style={StyleSheet.absoluteFill}
        start={{
          x: 0,
          y: 0.2,
        }}
        end={{
          x: 0,
          y: 1.5,
        }}
        colors={['#AE3D57', 'black']}>
        <ScrollView contentContainerStyle={{height: '100%'}}>
          <View style={styles.mainWarpper}>
            {/* Top section */}

            <View style={styles.HeaderWrapper}>
              <TouchableWithoutFeedback  onPress={()=>navigation.goBack()}>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  color="white"
                  size={25}
                />
              </TouchableWithoutFeedback>

              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                }}>
                This is {track?.artists[0].name}
              </Text>
              <TouchableWithoutFeedback>
                <MaterialIcons name="more-horiz" color="white" size={25} />
              </TouchableWithoutFeedback>
            </View>

            {/* Image section */}
            <View style={styles.ImageWrapper}>
              <Image
                style={styles.trackImage}
                source={{
                  uri: coverImage,
                  //   uri: 'https://corengr.com/wp-content/uploads/2021/12/Adekunle-Gold-819x1024.jpeg',
                }}
              />
            </View>

            {/* control section */}

            <View style={styles.bottomSection}>
              <View style={styles.songDetailsSection}>
                <View style={{}}>
                  <Text
                    style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
                    {track?.name}
                  </Text>
                  <Text style={{color: 'white', fontSize: 16}}>
                    {track?.artists[0].name}
                  </Text>
                </View>
                <TouchableWithoutFeedback>
                  <Feather name="heart" color="white" size={25} />
                </TouchableWithoutFeedback>
              </View>
              <View style={styles.controlWrapper}>
                <View>
                  <View
                    style={{
                      height: 3,
                      width: '100%',
                      backgroundColor: 'white',
                      opacity: 0.6,
                    }}></View>
                  <View
                    style={{
                      height: 10,
                      width: 10,
                        borderRadius:5,
                      backgroundColor: 'white',
                      position: 'absolute',
                      top: -4,
                    }}></View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 8,
                  }}>
                  <Text style={{color: 'white'}}>0.0</Text>
                  <Text style={{color: 'white'}}>-2.45</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 18,
                  }}>
                  <Ionicons name="shuffle" color="white" size={20} />
                  <AntDesign name="stepbackward" color="white" size={30} />
                  <AntDesign name="play" color="white" size={45} />
                  <AntDesign name="stepforward" color="white" size={30} />
                  <AntDesign name="retweet" color="white" size={20} />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 18,
                  }}>
                
                  
                  {/* <AntDesign name="retweet" color="white" size={20} /> */}
                  <Ionicons name="ios-desktop-sharp" color="white" size={20} />
                  <Ionicons name="list-sharp" color="white" size={20} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    // borderColor:'blue',
    // borderWidth:2
  },
  mainWarpper: {
    marginTop: 40,
    marginHorizontal: 15,
    // flex:1,
    height: '100%',
    // borderColor:'green',
    // borderWidth:2
  },
  HeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ImageWrapper: {
    marginTop: 40,
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    // height: '70%',
    // backgroundColor:'blue'
  },
  trackImage: {
    height: RFPercentage(45),
    width: RFPercentage(45),
    resizeMode: 'contain',
    // zIndex:10,
  },

  bottomSection: {
    paddingHorizontal: 10,
  },
  songDetailsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  controlWrapper: {
    marginTop: 15,
    // paddingVertical:10
  },
});
