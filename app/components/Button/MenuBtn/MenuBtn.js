import React from "react";
import { View, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

import styles from "./styles";

const MenuBtn = props => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => {
        props.navigation.openDrawer();
      }}
    >
      <EntypoIcon name="menu" size={30} />
    </TouchableOpacity>
  </View>
);

export default MenuBtn;
