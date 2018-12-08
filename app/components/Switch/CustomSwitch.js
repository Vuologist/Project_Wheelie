import React from "react";
import { View, Switch, Text } from "react-native";

import styles from "./styles";

const CustomSwitch = props => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.title}</Text>
    <Switch onValueChange={props.toggleSwitch} value={props.switchValue} />
  </View>
);

export default CustomSwitch;
