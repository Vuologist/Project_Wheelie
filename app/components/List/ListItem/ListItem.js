import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

const ListItem = ({ text, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View>
        <Text>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default ListItem;
