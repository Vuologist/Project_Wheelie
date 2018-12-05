import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import AccountScreen from "./screens/AccountScreen";

EStyleSheet.build({
  $primaryStatusBar: "#E6E6E6",
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
    Settings: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        title: "Settings"
      })
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: () => ({
        title: "Account Info"
      })
    }
  },
  {
    initialRouteName: "Account"
  }
);

const DrawerNavigation = createDrawerNavigator(
  {
    Home: HomeNavigation,
    Settings: SettingsNavigation
  },
  {
    initialRouteName: "Settings"
  }
);

export default createAppContainer(DrawerNavigation);
