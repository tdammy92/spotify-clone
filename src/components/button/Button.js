
//module imports
import { StyleSheet, Text, View,Image, TouchableOpacity,Platform } from 'react-native'
import React from 'react'

//local imports
import { vw,vh } from '../Dimension/Dimension'

export default function Button({backgroundColor,color,disabled,height,width,borderColor,buttonText,onPress,imageSource}) {
  return (
    <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: backgroundColor,
              opacity: disabled ? 0.4 : 1,
              height: vh(height),
              width: vw(width),
              borderColor: borderColor,
            },
          ]}
          disabled={disabled}
          onPress={onPress}>
          <View>
            <Text style={[styles.buttonText, {color: color}]}>
              {buttonText}
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.imageSocial} source={imageSource} />
          </View>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 40,
        marginBottom: vh(10),
      },
      buttonText: {
        fontWeight: 'bold',
        fontSize: Platform.OS === 'ios' ? null : vh(17),
      },
      buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:10
      },
      imageSocial: {
        height: vh(30),
        width: vw(30),
      },
      imageContainer: {
        position: 'absolute',
        left: 12,
      },
})