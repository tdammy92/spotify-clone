import {StyleSheet} from 'react-native';
import React from 'react';
import {colors, spacing, BorderRadius, TextSize} from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090c0d",
  },
  headerWrapper:{
      width:'100%',
      height:55,
      elevation:5,
      paddingTop:20,
      marginTop:10,
      paddingHorizontal:10,
      borderBottomColor:'black',
      borderBottomWidth:1,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'

  },
  headerLeft:{
      flexDirection:'row',
      width:'40%',
      alignItems:'center'
    
  },


  leftWrapperIcon:{
      borderRadius:50,
      height:30,
      width:30,
      backgroundColor:"#028a0f",
      alignItems:'center',
      justifyContent:'center',
      marginRight:22,
      
  },
  

  headerRight:{
    flexDirection:'row',
    // width:'40%',
    alignItems:'center'

  },

  ListContainer:{
      marginBottom:80,
   
     
  },

  ListHeaderWarpper:{
      height:50,
      marginTop:8,
      flexDirection:'row',
     
      justifyContent:'space-between',
      alignItems:'center',
      paddingHorizontal:10,
  },

  ListWrapper:{
      flex:1,
    //   alignSelf:'center',
      alignItems:'center',
      
  }
});

export default styles;
