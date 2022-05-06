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
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontSize: TextSize.title2.fontSize,
    color: colors.borders,
    fontWeight:'bold',
  },

  IconWrapper:{
    flexDirection:'row',
    alignItems:'center'

  },
  linearGradient: {
    flex: 1,
    paddingBottom: 50,
  },

  screenWrapper:{
    marginTop:40,
  },
  albumConatiner:{
      marginHorizontal:10,
       marginBottom:10,
  },

  TopGridItem:{
    // flex:1,
    flexDirection:'row',
    width:'45%',
    height:50,
    backgroundColor:'#202020',
    // alignItems:'center',
    marginVertical:5,
    marginHorizontal:5,

  }
 
});

export default styles;


