import React, { Component } from "react";
import { View, ScrollView, StatusBar } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { Separator } from "../components/List";
import { BackgroundContainer } from "../components/Container";
import { MainAvatar } from "../components/Avatar";
import { SingleLineText } from "../components/Text";
import { PrimaryBtn, MenuBtn } from "../components/Button";
import { CustomSwitch } from "../components/Switch";
import { AccountCard, GeneralCard, Title, Body } from "../components/Card";

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reminders: false,
      daily: false,
      weekly: true
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Settings",
      headerLeft: <MenuBtn navigation={navigation} />
    };
  };

  toggleReminder = () => {
    this.setState({
      reminders: !this.state.reminders
    });
  };

  toggleDaily = () => {
    this.setState({
      daily: !this.state.daily,
      weekly: !this.state.weekly
    });
  };

  toggleWeekly = () => {
    this.setState({
      daily: !this.state.daily,
      weekly: !this.state.weekly
    });
  };

  render() {
    return (
      <BackgroundContainer>
        <ScrollView>
          <StatusBar
            backgroundColor={EStyleSheet.value("$primaryStatusBar")}
            barStyle="dark-content"
          />
          <AccountCard>
            <Title title="Account" />
            <MainAvatar />
            <View>
              <SingleLineText title="Name" content="Anthony Vu" />
              <SingleLineText title="Email" content="abvu@cpp.edu" />
              <PrimaryBtn text="Manage Account" />
            </View>
          </AccountCard>
          <Separator />
          <GeneralCard>
            <Title title="Notifications" />
            <CustomSwitch
              title="Reminders"
              switchValue={this.state.reminders}
              onValueChange={this.toggleReminder}
            />
          </GeneralCard>
          <Separator />
          <GeneralCard>
            <Title title="Sync" />
            <CustomSwitch
              title="Daily"
              onValueChange={this.toggleDaily}
              switchValue={this.state.daily}
            />
            <CustomSwitch
              title="Weekly"
              onValueChange={this.toggleWeekly}
              switchValue={this.state.weekly}
            />
          </GeneralCard>
          <Separator />
          <GeneralCard>
            <Title title="About" />
            <Body header="Version" text="0.0.1" />
          </GeneralCard>
        </ScrollView>
      </BackgroundContainer>
    );
  }
}

export default SettingsScreen;
