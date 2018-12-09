import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import MealsScreen from "./screens/MealsScreen";
import IngrediantsScreen from "./screens/IngrediantsScreen";

EStyleSheet.build({
  $primaryStatusBar: "#E6E6E6",
  $primaryBackground: "#F9F9F9",
  $primaryCard: "#75FF00",
  $primaryBtn: "#007bff",
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
    }
  },
  {
    initialRouteName: "Settings"
  }
);

const MealsNavigation = createStackNavigator(
  {
    Meals: {
      screen: MealsScreen
    }
  },
  {
    initialRouteName: "Meals",
    headerMode: "none"
  }
);

const DrawerNavigation = createDrawerNavigator(
  {
    Home: HomeNavigation,
    Settings: SettingsNavigation,
    Meals: MealsNavigation,
    Ingrediants: IngrediantsScreen
  },
  {
    initialRouteName: "Ingrediants"
  }
);

export default createAppContainer(DrawerNavigation);
