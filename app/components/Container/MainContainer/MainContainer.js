import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const MainContainer = ({ children }) => (
  <View style={styles.container}>
    <View>{children[0]}</View>
    <View style={styles.banner}>{children[1]}</View>
    <View>{children[2]}</View>
    <View style={styles.content}>{children[3]}</View>
    <View>{children[4]}</View>
    <View>{children[5]}</View>
  </View>
);

export default MainContainer;
