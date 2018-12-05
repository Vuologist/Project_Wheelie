import React, { Component } from "react";
import { View, Text } from "react-native";

import { CenterContainer } from "../components/Container";

class AccountScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CenterContainer>
        <Text>Hello</Text>
      </CenterContainer>
    );
  }
}

export default AccountScreen;
