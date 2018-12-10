import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { HomeContainer, FillContainer } from "../components/Container";
import { HamburgerBtn } from "../components/Button";
import { WelcomeBanner } from "../components/Banner";
import { DailyMealsCard } from "../components/Card";

const Name = "ANTHONY";
const data = require("../data/DailyMeals.json");

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
        <HamburgerBtn onPress={this.handleOptionPress} />
        <WelcomeBanner name={Name} />
        <FillContainer>
          <DailyMealsCard
            header="breakfast"
            image={require("../images/egg.png")}
            dish={data.monday[0].name}
          />
          <DailyMealsCard
            header="lunch"
            image={require("../images/turkey-leg.png")}
            dish={data.monday[1].name}
          />
          <DailyMealsCard
            header="dinner"
            image={require("../images/whole-turkey.png")}
            dish={data.monday[2].name}
          />
        </FillContainer>
      </HomeContainer>
    );
  }
}

export default HomeScreen;
