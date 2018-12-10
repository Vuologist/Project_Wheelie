import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import { MenuProvider } from "react-native-popup-menu";

import { BackgroundContainer, MainContainer } from "../components/Container";
import { MainBanner } from "../components/Banner";
import { HamburgerBtn, AddCircleBtn } from "../components/Button";
import { Separator, ListItem } from "../components/List";
import BasicExample from "../components/Example/BasicExample";

class IngrediantsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingrediants: [
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

    for (let i = 0; i < this.state.ingrediants.length; i++) {
      list.push(
        <React.Fragment key={i}>
          <ListItem dish={this.state.ingrediants[i]} iconName={iconName} />
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
      <MenuProvider>
        <BackgroundContainer>
          <MainContainer>
            <HamburgerBtn onPress={this.handleOptionPress} />
            <MainBanner title="Ingrediants" />
            <Separator />
            <ScrollView>{this.renderItems()}</ScrollView>
            <AddCircleBtn
              onPress={() => this.props.navigation.navigate("Modal")}
            />
          </MainContainer>
        </BackgroundContainer>
      </MenuProvider>
    );
  }
}

export default IngrediantsScreen;
