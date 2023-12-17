import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import Appointment from '../Screens/Appointment'
import Profile from '../Screens/Profile'
import BMICalculator from '../Screens/BMICalculator'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Homenavigation from './Homenavigation'
import Explores from '../Screens/Explores'
import Colors from '../../assets/Shared/Colors'
const Tab=createBottomTabNavigator()
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarStyle:{
            backgroundColor:Colors.bgColor,
            borderTopColor:Colors.cyan,
            paddingBottom:4,
            paddingTop:0,
        }
    }}>
        <Tab.Screen name='Home' component={Homenavigation}
            options={{
                tabBarIcon:({color,size})=>(
                    <Ionicons name="home" size={size} color={Colors.headings} />
                ),
                tabBarLabelStyle: {
                  color: Colors.headings 
                }
            }}
        />
        <Tab.Screen name='Explore' component={Explores} 
        options={{
            tabBarIcon:({color,size})=>(
                <Ionicons name="search" size={size} color={Colors.headings} />
            ),
            tabBarLabelStyle: {
              color: Colors.headings 
            }
        }}/>
        <Tab.Screen name='Appointment' component={Appointment} 
        options={{
            tabBarIcon:({color,size})=>(
                <Ionicons name="calendar" size={size} color={Colors.headings} />
            ),
            tabBarLabelStyle: {
              color: Colors.headings 
            }
        }}/>
          <Tab.Screen name='BMI' component={BMICalculator} 
          options={{
              tabBarIcon:({color,size})=>(
                  // <FontAwesome name="Person" size={size} color={Colors.headings} />
                  <Ionicons name="body" size={size} color={Colors.headings} />
              ),
              tabBarLabelStyle: {
                color: Colors.headings
              }
          }}/>
        <Tab.Screen name='Profile' component={Profile} 
        options={{
            tabBarIcon:({color,size})=>(
                <FontAwesome name="user-circle" size={size} color={Colors.headings} />
            ),
            tabBarLabelStyle: {
              color: Colors.headings 
            }
        }}/>
    </Tab.Navigator>
  )
}