import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";

import { BackgroundContainer, MainContainer } from "../components/Container";

class MealsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BackgroundContainer>
        <MainContainer>
          <Text>mucho</Text>
          <Text>mucho</Text>
          <Text>mucho</Text>
        </MainContainer>
      </BackgroundContainer>
    );
  }
}

export default MealsScreen;
