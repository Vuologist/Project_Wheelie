import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, StatusBar } from "react-native";

import { ListItem, Separator } from "../components/List";

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
        <StatusBar translucent={false} barStyle="default" />
        <ListItem text="Account Info" onPress={this.handlePressAccountInfo} />
        <Separator />
        <ListItem
          text="Notifications"
          onPress={this.handlePressNotifications}
        />
        <Separator />
        <ListItem text="Sync" onPress={this.handlePressSync} />
        <Separator />
        <ListItem text="About" onPress={this.handlePressAbout} />
        <Separator />
      </ScrollView>
    );
  }
}

export default SettingsScreen;
