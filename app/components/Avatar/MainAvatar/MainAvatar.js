import React, { Component } from "react";
import { View, Image } from "react-native";

import styles from "./styles";

const MainAvatar = () => (
  <View style={styles.container}>
    <Image
      resizeMode="contain"
      style={styles.icon}
      source={require("../images/user.png")}
    />
  </View>
);

export default MainAvatar;
