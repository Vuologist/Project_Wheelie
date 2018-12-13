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
import HomeMealsScreen2 from "./screens/Group1/HomeMealsScreen2";
import HomeScreen3 from "./screens/Group1/HomeScreen3";

import IngredientsScreen from "./screens/IngredientsGroup/IngredientsScreen";
import IngredientsInputScreen from "./screens/IngredientsGroup/IngredientsInputScreen";
import IngredientsScreen2 from "./screens/IngredientsGroup/IngredientsScreen2";

import MealsScreen from "./screens/MealsGroup/MealsScreen";
import MealsInputScreen from "./screens/MealsGroup/MealsInputScreen";
import MealsScreen2 from "./screens/MealsGroup/MealsScreen2";

import SettingsScreen from "./screens/SettingsScreen";

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
    HomeScreen2: HomeScreen2,
    Meals2: HomeMealsScreen2,
    HomeScreen3: HomeScreen3
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
    MealsInput: {
      screen: MealsInputScreen
    },
    Meals2: {
      screen: MealsScreen2
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
    IngredientsInput: {
      screen: IngredientsInputScreen
    },
    Ingredients2: {
      screen: IngredientsScreen2
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
