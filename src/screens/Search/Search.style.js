import {StyleSheet} from 'react-native';
import React from 'react';
import {colors, spacing, BorderRadius, TextSize} from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090c0d",
  },
  HeaderContainer: {
    flexDirection: 'row',
    marginTop:30,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontSize: TextSize.title2.fontSize,
    color: colors.text,
    // fontWeight:'bold',
  },
  
  
  SearchWrapper:{
    borderRadius:spacing.small,
backgroundColor:colors.text,
flexDirection:'row',
alignItems:'center',
paddingHorizontal:spacing.medium
  },

  searchText:{
      fontSize:16,
      fontWeight:'bold',
      color:colors.primary,
      width:'100%'
  },

  SearchList:{
    overflow:'hidden',
    marginHorizontal:10,
    marginVertical:5,
    flexDirection:'row',
    width:'45%',
    // alignItems:'flex-end',
    // justifyContent:'space-between',
    height:70,
    borderRadius:spacing.small,
    elevation:4,
  },
  
  searchListText:{
    color:'white',
    marginTop:7,
    marginLeft:7
  },
  box: {
    height: "100%",

 position:'absolute',
 right:-8,
    // backgroundColor: "#61dafb",
    alignItems: "center",
    justifyContent: "center"
  },
});

export default styles;


