import React, { Component } from "react";
import { ScrollView } from "react-native";

import { BackgroundContainer, MainContainer } from "../components/Container";
import { MainBanner } from "../components/Banner";
import { HamburgerBtn } from "../components/Button";
import { Separator, ListItem } from "../components/List";

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
          <ScrollView>
            <Separator />
            <ListItem dish="Chicken Alfredo" iconName="food-variant" />
            <Separator />
            <ListItem dish="Chicken Alfredo" iconName="food-variant" />
            <Separator />
            <ListItem dish="Chicken Alfredo" iconName="food-variant" />
            <Separator />
            <ListItem dish="Chicken Alfredo" iconName="food-variant" />
            <Separator />
            <ListItem dish="Chicken Alfredo" iconName="food-variant" />
            <Separator />
            <ListItem dish="Chicken Alfredo" iconName="food-variant" />
            <Separator />
            <ListItem dish="Chicken Alfredo" iconName="food-variant" />
            <Separator />
          </ScrollView>
        </MainContainer>
      </BackgroundContainer>
    );
  }
}

export default MealsScreen;
