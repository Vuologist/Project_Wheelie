import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./styles";

const MealListItem = ({ onPress, dish }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <EntypoIcon name="dots-three-vertical" size={20} style={styles.padding} />
    </TouchableOpacity>
    <View style={styles.iconCircle}>
      <MaterialIcon name="food-variant" size={20} />
    </View>

    <Text style={styles.text}>{dish}</Text>
  </View>
);

export default MealListItem;
