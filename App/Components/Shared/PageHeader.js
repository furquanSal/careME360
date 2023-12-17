import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../assets/Shared/Colors';
export default function PageHeader({title,backButton=true}) {
    const navigation=useNavigation();
  return (
    <View style={{display:'flex',flexDirection:'row',
    gap:5,alignItems:'center'}}>
       {backButton? <TouchableOpacity onPress={()=>navigation.goBack()}>
            <View style={{
              backgroundColor: Colors.headings,
              borderRadius: 25,
              width: 30, // Adjust the width and height based on your icon size
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: Colors.cyan,
            }}>
      <Ionicons name="ios-arrow-back" 
      size={20} color='white' />
    </View>
        </TouchableOpacity>:null}
      <Text style={{fontSize:25,
    fontFamily:'appfont-semi',textAlign:'center'}}>{title}</Text>
    </View>
  )
}