import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { HomeContainer, FillContainer } from "../../components/Container";
import { HamburgerBtn } from "../../components/Button";
import { WelcomeBanner } from "../../components/Banner";
import { DailyMealsCard } from "../../components/Card";

const Name = "ANTHONY";
const data = require("../../data/DailyMeals.json");

class HomeScreen3 extends Component {
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
            image={require("../../images/egg.png")}
            dish="Scrambled Eggs"
          />
          <DailyMealsCard
            header="lunch"
            image={require("../../images/turkey-leg.png")}
            dish={data.monday[1].name}
          />
          <DailyMealsCard
            header="dinner"
            image={require("../../images/whole-turkey.png")}
            dish="Chicken Soup"
          />
        </FillContainer>
      </HomeContainer>
    );
  }
}

export default HomeScreen3;
