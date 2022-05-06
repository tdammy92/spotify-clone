
//Modle imports 
import { StyleSheet, Text, View ,ImageBackground,Image,Platform} from 'react-native'
import React from 'react'



//local imports 
import {vh,vw,normalize,Button} from '../../components'


function Intro({navigation}){
  return (
    <View style={styles.container}>
                <ImageBackground
                    style={styles.backImage}
                    source={require('../../../assets/images/banner.jpg')}
                >
                    <View style={styles.upperContainer}>
                        <View style={styles.textContainer}>
                        <Image style={styles.logoImg} source={require('../../../assets/images/spotify_logo_white.png')} />
                            <Text style={styles.quatationText}>Millions of songs.</Text>
                            <Text style={styles.quatationText}>Free on Spotify.</Text>
                        </View>
                    </View>
                    </ImageBackground>
                    <View style={styles.lowerContainer}>
                        <View style={styles.buttonContainer}>
                        <Button
                            height={Platform.OS==="ios"? 40:50}
                            width={300}
                            imageSource={null}
                            color='white'
                            borderColor='transparent'
                            backgroundColor='#028a0f'
                            buttonText='Sign up free'
                            onPress={() => console.log('i got clicked')}
                        />
                        <Button
                            height={Platform.OS==="ios"? 40:50}
                            width={300}
                            color='white'
                            borderColor='grey'
                            buttonText='Continue with phone number'
                            imageSource={require('../../../assets/images/mobile.png')}
                        />
                        <Button
                            height={Platform.OS==="ios"? 40:50}
                            width={300}
                            color='white'
                            borderColor='grey'
                            buttonText='Continue with Google'
                            imageSource={require('../../../assets/images/google.png')}
                            onPress={()=>console.log('i was clicked')}
                        />
                        <Button
                            height={Platform.OS==="ios"? 40:50}
                            width={300}
                            color='white'
                            borderColor='grey'
                            buttonText='Continue with Facebook'
                            imageSource={require('../../../assets/images/facebook.png')}
                            onPress={()=>alert('Coming Soon')}
                        />
                        {Platform.OS==='ios'?
                        <Button
                            height={40}
                            width={300}
                            color='white'
                            borderColor='grey'
                            buttonText='Continue with Apple'
                            imageSource={require('../../../assets/images/apple.png')}
                            onPress={()=>alert('Coming Soon')}
                        />
                    :null}
                        <Text style={styles.loginText} onPress={() => navigation.navigate('homeScreen')}>Log in</Text>
                        </View>
                    </View>
                
            </View>
  )
}

export default Intro

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    backImage: {
        flex:0.7
    },
    upperContainer: {
        flex: 3,
        backgroundColor: 'rgba(0,0,0,0.82)',
    },
    lowerContainer: {
        flex: 0.75,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.85)'
    },
    logoImg: {
        marginTop: vh(10),
        marginBottom:vh(10),
        height: normalize(55),
        width: normalize(55)
    },
    quatationText: {
        color: 'white',
        fontSize:Platform.OS==="ios"?vh(29):vh(32),
        fontWeight: '700',
        marginBottom: vh(10)
    },
    textContainer: {
        alignItems:'center',
        justifyContent:'center',
        top:vh(180)
    },
    loginText: {
        color: 'white',
        fontWeight: '500',
        marginTop: vh(20),
        fontSize:Platform.OS==="ios"?16:vh(17),
        fontWeight:'bold'
    },
    buttonContainer:{
        marginTop:vh(30),
        alignItems:'center'
    }
})