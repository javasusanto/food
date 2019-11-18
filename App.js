import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import SearchScreen from './src/screens/SearchScreen'
import ResultShowScreen from './src/screens/ResultShowScreen'


const navigator = createStackNavigator ({
  Search : SearchScreen,
  ShowScreen: ResultShowScreen

},{
  initialRouteName : 'Search',
  defaultNavigationOptions:{
    title:'Bussiness Search'
  }
})

export default createAppContainer(navigator)
 
