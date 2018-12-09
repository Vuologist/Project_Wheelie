import React, { Component } from "react";
import { ScrollView } from "react-native";

import { BackgroundContainer, MainContainer } from "../components/Container";
import { MainBanner } from "../components/Banner";
import { HamburgerBtn } from "../components/Button";
import { Separator, ListItem } from "../components/List";

class MealsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [
        "chicken alfredo",
        "ravioli",
        "meatloaf",
        "honey baked chicken",
        "taco salad",
        "chicken fajitas",
        "clam chowder",
        "corn chowder",
        "turkey sandwhich"
      ]
    };
  }

  renderItems() {
    let list = [];
    const iconName = "food-variant";

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
          <MainBanner title="Meals" />
          <Separator />
          <ScrollView>{this.renderItems()}</ScrollView>
        </MainContainer>
      </BackgroundContainer>
    );
  }
}

export default MealsScreen;
