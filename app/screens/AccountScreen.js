import React, { Component } from "react";
import { StatusBar, View, Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { CenterContainer } from "../components/Container";

class AccountScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CenterContainer>
        <StatusBar
          backgroundColor={EStyleSheet.value("$primaryStatusBar")}
          barStyle="dark-content"
        />
        <Text>Hello</Text>
      </CenterContainer>
    );
  }
}

export default AccountScreen;
