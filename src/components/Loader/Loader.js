import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React from 'react'

export default function Loader() {
  return (
    <View   style={styles.container}>
     <ActivityIndicator size="large" color="green" />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        zIndex:20,
        backgroundColor: '#1b1813',
        flex:1,
        opacity:0.6,
        alignItems:'center',
        justifyContent:'center'
    }
})