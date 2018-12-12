import React, { Component } from "react";
import { FlatList } from "react-native";
import { MenuProvider } from "react-native-popup-menu";

import { BackgroundContainer, MainContainer } from "../components/Container";
import { MainBanner } from "../components/Banner";
import { HamburgerBtn, AddCircleBtn } from "../components/Button";
import { Separator, FlatListItem } from "../components/List";
import { AddModal } from "../components/Modal";

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
      ],
      modalVisible: false
    };
  }

  handleOptionPress = () => {
    //console.log(IngredientDataIngred);
    this.props.navigation.openDrawer();
  };

  viewModal = () => {
    this.setState({
      modalVisible: true
    });
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
              data={this.state.IngredientsData}
              renderItem={({ item, index }) => {
                return (
                  <FlatListItem
                    id={index}
                    flag="ingredient"
                    item={item}
                    iconName="food-apple"
                  />
                );
              }}
              ItemSeparatorComponent={Separator}
            />
            <AddCircleBtn onPress={this.viewModal} />
            <AddModal visible={false} />
          </MainContainer>
        </BackgroundContainer>
      </MenuProvider>
    );
  }
}

export default IngredientsScreen;
