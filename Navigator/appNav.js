//-------react navigation imports --------
import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import {  createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


//------Screen Imports---------///
import LoginScreen from '../source/screen/loginScreen';
import HomeScreen from '../source/screen/homeScreen'
import ProfileScreen from '../source/screen/profileScreen'
import OrderScreen from '../source/screen/orderScreen'

//-----Icon Imports----//
import { Foundation } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LabMenu from '../source/screen/labMenu';
import CheckoutScreen from '../source/screen/checkoutScreen';


//------*******Navigators------*******//

const AuthStack = createStackNavigator({
    Login : LoginScreen, 
})


const AppNavigator = createMaterialBottomTabNavigator({
    Home : {screen:HomeScreen, navigationOptions:{
        tabBarLabel : 'Home',
        tabBarIcon:(tabInfo)=>{
            return <Foundation name="home" size={24} color={tabInfo.tintColor} />
        }
    }},

    Order : {screen:OrderScreen, navigationOptions:{
        tabBarLabel : 'Order',
        tabBarIcon :(tabInfo) => {
            return <EvilIcons name="search" size={24} color={tabInfo.tintColor} />
        }
    }},

    Profile : {screen:ProfileScreen, navigationOptions:{
        tabBarLabel : 'Profile',
        tabBarIcon : (tabInfo) => {
            return <MaterialCommunityIcons name="account" size={24} color={tabInfo.tintColor} />
        }
    }}

},{
    shifting : true,
    activeColor : '#009efd',
    barStyle : {backgroundColor:'white'}
})


const MainStack = createStackNavigator({
    Home : {screen : AppNavigator, navigationOptions:{
        header:()=>{
            return false
        }
    }},
    Menu : LabMenu,
    Checkout : CheckoutScreen  
})

const AppSwitch = createSwitchNavigator({
    
    Auth : AuthStack,
    Main : MainStack,
     
})

export default createAppContainer(AppSwitch)