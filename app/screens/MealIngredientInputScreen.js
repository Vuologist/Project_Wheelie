import React, { Component } from "react";
import {
  TouchableOpacity,
  TextInput,
  Text,
  Modal,
  FlatList,
  Button
} from "react-native";

import { BackgroundContainer, ModalContainer } from "../components/Container";
import { MainBanner } from "../components/Banner";

class MealIngredientInputScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  _setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  showAddModal = () => {
    this.refs.myModal.open();
  };

  generateKey = numberOfCharacters => {
    return require("random-string")({ length: numberOfCharacters });
  };

  render() {
    return (
      <Modal
        ref={"myModal"}
        style={{
          justifyContent: "center",
          borderRadius: 0,
          shadowRadius: 10,
          width: "100%",
          height: 280
        }}
        position="center"
        backdrop={true}
        onClosed={() => {}}
      >
        <BackgroundContainer>
          <ModalContainer>
            <MainBanner title="Add an ingrediant" />
            <TextInput
              style={{
                height: 40,
                borderBottomColor: "gray",
                marginLeft: 30,
                marginRight: 30,
                marginTop: 20,
                marginBottom: 10,
                borderBottomWidth: 1
              }}
              onChangeText={text => this.setState({ newFoodName: text })}
              placeholder="Enter new food's name"
              value={this.state.newFoodName}
            />
            <TextInput
              style={{
                height: 40,
                borderBottomColor: "gray",
                marginLeft: 30,
                marginRight: 30,
                marginTop: 10,
                marginBottom: 20,
                borderBottomWidth: 1
              }}
              onChangeText={text => this.setState({ newFoodDescription: text })}
              placeholder="Enter new food's description"
              value={this.state.newFoodDescription}
            />
            <Button
              style={{ fontSize: 18, color: "white" }}
              containerStyle={{
                padding: 8,
                marginLeft: 70,
                marginRight: 70,
                height: 40,
                borderRadius: 6,
                backgroundColor: "mediumseagreen"
              }}
              onPress={() => {
                if (
                  this.state.newFoodName.length == 0 ||
                  this.state.newFoodDescription.length == 0
                ) {
                  alert("You must enter food's name and description");
                  return;
                }
                const newKey = this.generateKey(24);
                const newFood = {
                  key: newKey,
                  name: this.state.newFoodName,
                  foodDescription: this.state.newFoodDescription
                };
                flatListData.push(newFood);
                this.props.parentFlatList.refreshFlatList(newKey);
                this.refs.myModal.close();
              }}
              title="Save"
            />
          </ModalContainer>
        </BackgroundContainer>
      </Modal>
    );
  }
}

export default MealIngredientInputScreen;
