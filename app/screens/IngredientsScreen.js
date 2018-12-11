import React, { Component } from "react";
import { ScrollView, FlatList } from "react-native";
import { MenuProvider } from "react-native-popup-menu";

import { BackgroundContainer, MainContainer } from "../components/Container";
import { MainBanner } from "../components/Banner";
import { HamburgerBtn, AddCircleBtn } from "../components/Button";
import { Separator, ListItem, FlatListItem } from "../components/List";

class IngredientsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IngredientsData: [
        {
          ingredient: "celery"
        },
        {
          ingredient: "salt"
        },
        {
          ingredient: "pepper"
        },
        {
          ingredient: "chicken"
        },
        {
          ingredient: "beef"
        },
        {
          ingredient: "pasta"
        },
        {
          ingredient: "cumin"
        }
      ]
    };
  }

  _keyExtractor = (item, index) => item.id;

  handleOptionPress = () => {
    //console.log(IngredientDataIngred);
    this.props.navigation.openDrawer();
  };

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
              data={this.state.IngredientsData}
              renderItem={({ item, index }) => {
                return (
                  <FlatListItem
                    id={item.id}
                    flag="ingredient"
                    item={item}
                    index={index}
                    iconName="food-apple"
                  />
                );
              }}
              ItemSeparatorComponent={Separator}
              keyExtractor={this._keyExtractor}
            />
            {/* <AddCircleBtn ref={"addModal"} /> */}
          </MainContainer>
        </BackgroundContainer>
      </MenuProvider>
    );
  }
}

export default IngredientsScreen;
