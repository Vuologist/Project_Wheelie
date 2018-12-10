import React, { Component } from "react";
import { ScrollView, FlatList } from "react-native";
import { MenuProvider } from "react-native-popup-menu";

import { BackgroundContainer, MainContainer } from "../components/Container";
import { MainBanner } from "../components/Banner";
import { HamburgerBtn, AddCircleBtn } from "../components/Button";
import { Separator, ListItem, FlatListItem } from "../components/List";

import IngredientData from "../data/IngredientsData";

class IngredientsScreen extends Component {
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
            <MainBanner title="Ingredients" />
            <Separator />
            <FlatList
              ref={"flatList"}
              data={IngredientData}
              renderItem={(item, index) => {
                return (
                  <FlatListItem
                    item={item}
                    index={index}
                    parentFlatList={this}
                  />
                );
              }}
            />
            <AddCircleBtn ref={"addModal"} parentFlatList={this} />
          </MainContainer>
        </BackgroundContainer>
      </MenuProvider>
    );
  }
}

export default IngredientsScreen;
