import React, { Component } from "react";
import { StatusBar } from "react-native";

import { HomeContainer } from "../components/Container";
import { Header } from "../components/Header";
import { WelcomeBanner } from "../components/WelcomeBanner";
import { HomeDatePicker } from "../components/HomeDatePicker";

const Name = "ANTHONY";

class Home extends Component {
  handleOptionPress = () => {
    console.log("Header pressed!!");
  };

  render() {
    return (
      <HomeContainer>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header onPress={this.handleOptionPress} />
        <WelcomeBanner name={Name} />
        <HomeDatePicker />
      </HomeContainer>
    );
  }
}

export default Home;
