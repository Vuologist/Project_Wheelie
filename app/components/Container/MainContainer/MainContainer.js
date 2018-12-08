import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const MainContainer = ({ children }) => (
  <View>
    <View>{children[0]}</View>
    <View>{children[1]}</View>
    <View>{children[2]}</View>
  </View>
);

export default MainContainer;
