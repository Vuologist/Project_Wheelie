import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

const DailyMealsCard = ({ onPress, header, image, dish }) => (
  <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
    <View style={styles.itemBox}>
      <Text>{header}</Text>
      <View style={styles.content}>
        <Image resizeMode="contain" style={styles.icon} source={image} />
        <Text style={styles.name}>{dish}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default DailyMealsCard;
