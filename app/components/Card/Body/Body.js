import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const Body = props => (
  <View style={styles.container}>
    <Text style={styles.header}>{props.header}</Text>
    <Text style={styles.text}>{props.text}</Text>
  </View>
);

export default Body;
