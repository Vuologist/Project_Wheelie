import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const PrimaryBtn = ({ text, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);

export default PrimaryBtn;
