import React from "react";
import { View } from "react-native";

import styles from "./styles";

const CenterContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export default CenterContainer;
