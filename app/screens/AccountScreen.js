import React, { Component } from "react";
import { StatusBar } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { CenterContainer } from "../components/Container";
import { MainAvatar } from "../components/Avatar";
import { SingleLineText } from "../components/Text";
import { PrimaryBtn } from "../components/Button";

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
        <MainAvatar />
        <SingleLineText title="Name" content="Anthony Vu" />
        <SingleLineText title="Email" content="abvu@cpp.edu" />
        <PrimaryBtn text="Edit" />
      </CenterContainer>
    );
  }
}

export default AccountScreen;
