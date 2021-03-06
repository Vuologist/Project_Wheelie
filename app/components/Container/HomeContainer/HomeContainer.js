import PropTypes from "prop-types";
import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const HomeContainer = ({ children }) => (
  <View style={styles.container}>
    <View style={styles.statusBar}>{children[0]}</View>
    <View style={styles.header}>{children[1]}</View>
    <View style={styles.welcomeBanner}>{children[2]}</View>
    <View style={styles.dailyMeals}>{children[3]}</View>
  </View>
);

HomeContainer.propTypes = {
  children: PropTypes.any
};

export default HomeContainer;
