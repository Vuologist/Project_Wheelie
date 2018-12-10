import React, { Component } from "react";
import { Modal, View, Text } from "react-native";

class MealIngredInputScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  _setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}

export default MealIngredInputScreen;
