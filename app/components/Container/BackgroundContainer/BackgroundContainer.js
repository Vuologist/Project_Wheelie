import React from "react";
import { View } from "react-native";

import styles from "./styles";

const BackgroundContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export default BackgroundContainer;
