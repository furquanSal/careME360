import { View, Text, ScrollView, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo';
import PageHeader from '../Components/Shared/PageHeader'
import Colors from '../../assets/Shared/Colors';
export default function BMICalculator() {
  const { isLoaded,signOut } = useAuth();
  return (
    <View style={{padding:20, backgroundColor:Colors.bgColor, height:'100%'}}>
      <PageHeader title={'BMI Calculator'} backButton={false} />
    </View>
  )
}