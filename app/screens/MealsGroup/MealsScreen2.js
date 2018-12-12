import React, { Component } from "react";
import { ScrollView } from "react-native";

import { BackgroundContainer, MainContainer } from "../../components/Container";
import { MainBanner } from "../../components/Banner";
import { HamburgerBtn, AddCircleBtn } from "../../components/Button";
import { Separator, ListItem } from "../../components/List";

class MealsScreen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [
        "Chicken Soup",
        "Chicken Alfredo",
        "Ravioli",
        "Meatloaf",
        "Honey Baked Chicken",
        "Taco Salad",
        "Chicken Fajitas",
        "Clam Chowder",
        "Corn Chowder",
        "Turkey Sandwhich"
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

  handleOptionPress = () => {
    console.log("Header pressed!!");
    this.props.navigation.openDrawer();
  };

  render() {
    return (
      <BackgroundContainer>
        <MainContainer>
          <HamburgerBtn onPress={this.handleOptionPress} />
          <MainBanner title="Meals" />
          <Separator />
          <ScrollView>{this.renderItems()}</ScrollView>
          <AddCircleBtn
            onPress={() => this.props.navigation.navigate("MealsInput")}
          />
        </MainContainer>
      </BackgroundContainer>
    );
  }
}

export default MealsScreen2;
