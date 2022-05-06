import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

//Local imports
import {Header} from '../../components';
import {colors, spacing, BorderRadius, TextSize} from '../../theme/theme';
import searchData from '../../services/Data/searchData';
import styles from './Search.style';

//Random color gennrator
const GenerateColor = () => {
  const r = () => (Math.random() * 256) >> 0;
  const color = `rgb(${r()},${r()}, ${r()})`;
  return color;
};

//List Code 

function SearchList({item}) {
  const color = GenerateColor();
  return (
    <View style={[styles.SearchList, {backgroundColor: color}]}>
      <Text style={styles.searchListText}>{item.title}</Text>
      <View
        style={[
          styles.box,
          {
            transform: [{rotate: '38deg'}],
            height:'100%'
          },
        ]}>
        <Image  style={{width:50,height:50}} source={{uri: item.imageUri}} />
      </View>
    </View>
  );
}





function Search() {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginHorizontal: spacing.medium}}>
        {/* Header section */}
        <View style={styles.HeaderContainer}>
          <Text style={styles.HeaderText}>Search</Text>
        </View>

        {/* Search box */}

        <View style={styles.SearchWrapper}>
          <EvilIcons name="search" size={35} color={colors.primary} />

          <TextInput
            style={styles.searchText}
            placeholder="Artists,songs, or podcast"
            placeholderTextColor={colors.primary}
          />
        </View>
      </View>

      <View style={{marginHorizontal: 10, marginTop: 20, marginBottom: 20}}>
        <FlatList
          data={searchData}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={(item, id) => `${'data' + id}`}
          renderItem={({item}) => <SearchList item={item}/>}

          ListHeaderComponent={<View style={{marginLeft:12,marginBottom:20}}>
            <Text  style={{color:'white'}}>Browse all</Text>
          </View>}
        />
      </View>
    </SafeAreaView>
  );
}

export default Search;
