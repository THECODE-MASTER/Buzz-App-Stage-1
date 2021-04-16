import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FB from './fb';
import TW from './tw';
import TK from './tk';
import IN from './in';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
  return (
  <AppContainer />
  );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:FB},
  Twitter:{screen:TW},
  Instagram:{screen:IN},
  Tik_Tok:{screen:TK},
})

const AppContainer = createAppContainer(TabNavigator)