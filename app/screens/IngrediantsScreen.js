import React, { Component } from "react";
import { ScrollView, Text } from "react-native";

import { BackgroundContainer, MainContainer } from "../components/Container";
import { MainBanner } from "../components/Banner";
import { HamburgerBtn } from "../components/Button";
import { Separator, ListItem } from "../components/List";

class IngrediantsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [
        "rice",
        "celery",
        "red wine",
        "steak",
        "pork",
        "chicken",
        "mushroom"
      ]
    };
  }

  render() {
    return (
      <BackgroundContainer>
        <MainContainer>
          <HamburgerBtn />
          <MainBanner title="Ingrediants" />
          <Separator />
          <ScrollView>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
          </ScrollView>
        </MainContainer>
      </BackgroundContainer>
    );
  }
}

export default IngrediantsScreen;
