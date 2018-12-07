import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, ScrollView, StatusBar } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { ListItem, Separator } from "../components/List";
import {
  AccountCardContainer,
  BackgroundContainer,
  GeneralCardContainer,
  Title
} from "../components/Container";
import { MainAvatar } from "../components/Avatar";
import { SingleLineText } from "../components/Text";
import { PrimaryBtn } from "../components/Button";

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    hedaderTitle: "Settings"
  };

  handlePressAccountInfo = () => {
    console.log("pressed account info");
  };

  handlePressNotifications = () => {
    console.log("pressed notifications");
  };

  handlePressSync = () => {
    console.log("pressed sync");
  };

  handlePressAbout = () => {
    console.log("pressed about");
  };

  render() {
    return (
      <ScrollView>
        <BackgroundContainer>
          <StatusBar
            backgroundColor={EStyleSheet.value("$primaryStatusBar")}
            barStyle="dark-content"
          />
          <AccountCardContainer>
            <Text>Account</Text>
            <MainAvatar />
            <View>
              <SingleLineText title="Name" content="Anthony Vu" />
              <SingleLineText title="Email" content="abvu@cpp.edu" />
              <PrimaryBtn text="Edit" />
            </View>
          </AccountCardContainer>
          <GeneralCardContainer>
            <Title title="Notifications" />
          </GeneralCardContainer>
          <ListItem text="Sync" onPress={this.handlePressSync} />
          <Separator />
          <ListItem text="About" onPress={this.handlePressAbout} />
          <Separator />
        </BackgroundContainer>
      </ScrollView>
    );
  }
}

export default SettingsScreen;
