import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";

import { BackgroundContainer, MainContainer } from "../components/Container";
import { MainBanner } from "../components/Banner";

class MealsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BackgroundContainer>
        <MainContainer>
          <MainBanner title="Meals" />
          <View />
        </MainContainer>
      </BackgroundContainer>
    );
  }
}

export default MealsScreen;
