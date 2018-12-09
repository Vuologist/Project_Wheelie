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

  renderItems() {
    const iconName = "food-apple";
    let list = [];
    for (let x = 0; x < this.state.food.length; x++) {
      list.push(
        <React.Fragment key={x}>
          <ListItem dish={this.state.food[x]} iconName={iconName} />
          <Separator />
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <BackgroundContainer>
        <MainContainer>
          <HamburgerBtn />
          <MainBanner title="Ingrediants" />
          <Separator />
          <ScrollView>
            <ListItem dish="Chicken Alfredo" iconName="food-variant" />
            <Separator />
            <ListItem dish="Chicken Alfredo" iconName="food-variant" />
            <Separator />
            <ListItem dish="Chicken Alfredo" iconName="food-variant" />
          </ScrollView>
        </MainContainer>
      </BackgroundContainer>
    );
  }
}

export default IngrediantsScreen;
