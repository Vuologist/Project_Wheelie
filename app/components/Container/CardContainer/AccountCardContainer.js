import React from "react";
import { View } from "react-native";

import { CenterContainer } from "../index";

import styles from "./styles";

const AccountCardContainer = ({ children }) => (
  <View style={styles.container}>
    <View style={styles.left}>{children[0]}</View>
    <View style={styles.right}>
      <CenterContainer>{children[1]}</CenterContainer>
    </View>
  </View>
);

export default AccountCardContainer;
