import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const MainContainer = ({ children }) => (
  <View>
    <View>{children}</View>
  </View>
);

export default MainContainer;
