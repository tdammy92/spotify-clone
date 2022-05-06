import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  LogBox
} from 'react-native';
import React,{useEffect} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';

//local imports
import {colors, spacing, BorderRadius, TextSize} from '../../theme/theme';
import DummyData from '../../services/Data/albumCategories.js';
import TopData from '../../services/Data/TopGridData';
import {AlbumCategory} from '../../components';

import styles from './Home.style';

//TopGrid Section
function TopList({item}) {
  return (
    <View style={styles.TopGridItem}>
      <View style={{height: '100%', width: '30%'}}>
        <Image style={{height: '100%'}} source={{uri: item.artwork}} resizeMode='cover' />
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
              <Text style={styles.HeaderText}>Good Morning</Text>

              <View style={styles.IconWrapper}>
                <TouchableOpacity style={{marginRight: 15}}>
                  <Entypo
                    name="back-in-time"
                    color={colors.borders}
                    size={26}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <EvilIcons name="gear" color={colors.borders} size={30} />
                </TouchableOpacity>
              </View>
            </View>

            {/* top body section grid */}
            <View style={{marginHorizontal: 20,display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
              {/* <FlatList
                data={TopData}
                keyExtractor={(_, i) => `${'data' + i}`}
                numColumns={2}
                renderItem={({item}) => <TopList item={item} />}
              /> */}
              {TopData.map((item,i)=>{
                return <TopList key={`${'id'+i}`} item={item} />
              })}
            </View>

            {/* Body section */}
            <View style={styles.albumConatiner}>
              <ScrollView>
                {DummyData.map((item, i) => (
                  <AlbumCategory key={item.id} item={item} />
                ))}
              </ScrollView>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default Home;
