import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

EStyleSheet.build({
  $primaryBlue: "#B6D397",

  $outline: 0
});

const HomeNavigation = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: HomeScreen
  }
);

const DrawerNavigation = createDrawerNavigator({
  Home: HomeScreen,
  Setting: SettingsScreen
});

export default createAppContainer(DrawerNavigation);
