import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";

import { BackgroundContainer, MainContainer } from "../components/Container";
import { MainBanner } from "../components/Banner";
import { HamburgerBtn } from "../components/Button";

class MealsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BackgroundContainer>
        <MainContainer>
          <HamburgerBtn />
          <MainBanner title="Meals" />
          <View />
        </MainContainer>
      </BackgroundContainer>
    );
  }
}

export default MealsScreen;
