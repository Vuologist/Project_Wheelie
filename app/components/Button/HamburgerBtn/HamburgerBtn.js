import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const HamburgerBtn = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        resizeMode="contain"
        style={styles.icon}
        source={require("./images/bar-menu.png")}
      />
    </TouchableOpacity>
  </View>
);

HamburgerBtn.propTypes = {};

export default HamburgerBtn;
