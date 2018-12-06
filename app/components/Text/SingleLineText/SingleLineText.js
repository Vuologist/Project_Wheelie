import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const SingleLineText = ({ title, content }) => (
  <View style={styles.wrapper}>
    <Text>{title}: </Text>
    <Text>{content}</Text>
  </View>
);

export default SingleLineText;
