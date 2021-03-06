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
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Settings",
      headerLeft: <MenuBtn navigation={navigation} />
    };
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
              <PrimaryBtn text="Edit" />
            </View>
          </AccountCard>
          <Separator />
          <GeneralCard>
            <Title title="Notifications" />
            <CustomSwitch title="Reminders" />
          </GeneralCard>
          <Separator />
          <GeneralCard>
            <Title title="Sync" />
            <CustomSwitch title="Daily" />
            <CustomSwitch title="Weekly" />
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
