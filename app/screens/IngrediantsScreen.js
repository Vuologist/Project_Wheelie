import React, { Component } from "react";
import { ScrollView } from "react-native";

import { BackgroundContainer, MainContainer } from "../components/Container";
import { MainBanner } from "../components/Banner";
import { HamburgerBtn } from "../components/Button";
import { Separator, MealListItem } from "../components/List";

class IngrediantsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BackgroundContainer>
        <MainContainer>
          <HamburgerBtn />
          <MainBanner title="Ingrediants" />
          <ScrollView>
            <Separator />
            <MealListItem dish="Chicken Alfredo" />
            <Separator />
            <MealListItem dish="Chicken Alfredo" />
            <Separator />
            <MealListItem dish="Chicken Alfredo" />
            <Separator />
            <MealListItem dish="Chicken Alfredo" />
            <Separator />
            <MealListItem dish="Chicken Alfredo" />
            <Separator />
            <MealListItem dish="Chicken Alfredo" />
            <Separator />
            <MealListItem dish="Chicken Alfredo" />
            <Separator />
            <MealListItem dish="Chicken Alfredo" />
            <Separator />
            <MealListItem dish="Chicken Alfredo" />
            <Separator />
            <MealListItem dish="Chicken Alfredo" />
            <Separator />
          </ScrollView>
        </MainContainer>
      </BackgroundContainer>
    );
  }
}

export default IngrediantsScreen;
