import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const ModalContainer = ({ children }) => (
  <View style={styles.container}>
    <View style={styles.header}>{children[0]}</View>
    <View style={styles.input}>{children[1]}</View>
    <View style={styles.buttons}>{children[2]}</View>
    <View style={styles.buttons}>{children[3]}</View>
    <View style={styles.buttons}>{children[4]}</View>
  </View>
);

export default ModalContainer;
