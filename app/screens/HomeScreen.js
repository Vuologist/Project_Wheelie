import React, { Component } from "react";
import { StatusBar } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { HomeContainer } from "../components/Container";
import { Header } from "../components/Header";
import { WelcomeBanner } from "../components/WelcomeBanner";
import { DailyMeals } from "../components/DailyMeals";

const Name = "ANTHONY";

class HomeScreen extends Component {
  handleOptionPress = () => {
    console.log("Header pressed!!");
    this.props.navigation.openDrawer();
  };

  render() {
    return (
      <HomeContainer>
        <StatusBar
          backgroundColor={EStyleSheet.value("$primaryStatusBar")}
          barStyle="dark-content"
        />
        <Header onPress={this.handleOptionPress} />
        <WelcomeBanner name={Name} />
        <DailyMeals />
      </HomeContainer>
    );
  }
}

export default HomeScreen;
