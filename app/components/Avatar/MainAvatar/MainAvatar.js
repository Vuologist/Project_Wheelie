import React, { Component } from "react";
import { View, Image } from "react-native";

const MainAvatar = () => (
  <View>
    <Image resizeMode="contain" source={require("../images/user.png")} />
  </View>
);

export default MainAvatar;
