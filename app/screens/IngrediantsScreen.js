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
        "mushroom",
        "salt",
        "pepper"
      ]
    };
  }

  renderItems() {
    let list = [];
    const iconName = "food-apple";

    for (let i = 0; i < this.state.food.length; i++) {
      list.push(
        <React.Fragment key={i}>
          <ListItem dish={this.state.food[i]} iconName={iconName} />
          <Separator />
        </React.Fragment>
      );
    }
    return list;
  }

  render() {
    return (
      <BackgroundContainer>
        <MainContainer>
          <HamburgerBtn />
          <MainBanner title="Ingrediants" />
          <Separator />
          <ScrollView>{this.renderItems()}</ScrollView>
        </MainContainer>
      </BackgroundContainer>
    );
  }
}

export default IngrediantsScreen;
