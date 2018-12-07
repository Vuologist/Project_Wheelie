import React from "react";
import { View, Text } from "react-native";

import { CenterContainer } from "../../index";

import styles from "./styles";

const AccountCardContainer = ({ children }) => (
  <React.Fragment>
    <View>{children[0]}</View>
    <View style={styles.container}>
      <View style={styles.left}>
        <View>{children[1]}</View>
      </View>
      <View style={styles.right}>
        <CenterContainer>{children[2]}</CenterContainer>
      </View>
    </View>
  </React.Fragment>
);

export default AccountCardContainer;
