import { View, Text, ScrollView, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo';
import PageHeader from '../Components/Shared/PageHeader'
import Colors from '../../assets/Shared/Colors';
export default function Profile() {
  const { isLoaded,signOut } = useAuth();
  return (
    <View style={{padding:20, backgroundColor:Colors.bgColor, height:'100%'}}>
      <PageHeader title={'My Profile'} backButton={false} />

      <Button title='Logout'
      color='red'
      onPress={()=>signOut()}></Button>
    
    </View>
  )
}

const styles = StyleSheet.create({
  logout:{
      fontSize:28,
      fontWeight:'bold',
      color:'red'
  }
})