import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import HomeScreen from "./screens/Group1/HomeScreen";
import HomeMealsScreen from "./screens/Group1/HomeMealsScreen";
import HomeScreen2 from "./screens/Group1/HomeScreen2";

import SettingsScreen from "./screens/SettingsScreen";
import MealsScreen from "./screens/MealsScreen";
import IngredientsScreen from "./screens/IngredientsScreen";
import MealIngredientInputScreen from "./screens/MealIngredientInputScreen";

EStyleSheet.build({
  $primaryStatusBar: "#E6E6E6",
  $primaryBackground: "#F9F9F9",
  $primaryCard: "#75FF00",
  $primaryBtn: "#007bff",
  $outline: 0
});

const HomeNavigation = createStackNavigator(
  {
    Home: HomeScreen,
    Meals: HomeMealsScreen,
    HomeScreen2: HomeScreen2
  },
  {
    headerMode: "none"
  }
);

const SettingsNavigation = createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen
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
    },
    Modal: {
      screen: MealIngredientInputScreen
    }
  },
  {
    initialRouteName: "Meals",
    headerMode: "none"
  }
);

const IngredientsNavigation = createStackNavigator(
  {
    Ingredients: {
      screen: IngredientsScreen
    },
    Modal: {
      screen: MealIngredientInputScreen
    }
  },
  {
    initialRouteName: "Ingredients",
    headerMode: "none"
  }
);

const DrawerNavigation = createDrawerNavigator(
  {
    Home: HomeNavigation,
    Ingredients: IngredientsNavigation,
    Meals: MealsNavigation,
    Settings: SettingsNavigation
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(DrawerNavigation);
