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
  $primaryBlue: "#F9F9F9",

  $outline: 0
});

const HomeNavigation = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    headerMode: "none"
  }
);

const SettingsNavigation = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  {
    initialRouteName: "Settings"
  }
);

const DrawerNavigation = createDrawerNavigator(
  {
    Home: HomeNavigation,
    Settings: SettingsNavigation
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(DrawerNavigation);
