import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import loginImage from './../../assets/images/bannerImages/loginImage.png'
import Colors from '../../assets/Shared/Colors'
import { Button } from 'react-native'
import SignInWithOAuth from '../Components/SignInWithOAuth'
export default function Login() {
  return (
    <View style={{alignItems:'center',
    backgroundColor:Colors.LIGHT_GRAY}}>
      <Image source={loginImage}
      style={styles.appImage}
      />
      <View style={{backgroundColor:Colors.white,
        padding:25,
        alignItems:'center',
        marginTop:-50,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        
    }}>
        <Text style={styles.heading}>CareMe360</Text>
        <Text style={styles.heading}>Your Health, Your Way!</Text>
        <Text style={{textAlign:'center',marginTop:20,
    }}>Nurturing Wellness, Connecting Lives – Your Comprehensive Healthcare Companion</Text>
       <SignInWithOAuth/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    appImage:{
        width:280,
        height:450,
        objectFit:'cover',
        marginTop:100,
        borderRadius:20,
        borderWidth:6,
        borderColor:'#000'
    },
    heading:{
        fontSize:28,
        fontWeight:'bold'
    }
})