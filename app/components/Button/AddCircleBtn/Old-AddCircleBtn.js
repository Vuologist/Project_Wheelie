import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";

import styles from "./styles";

const AddCircleBtn = ({ onPress }) => (
  <View style={styles.container}>
    <Menu>
      <MenuTrigger
        customStyle={{ TriggerTouchableComponent: TouchableOpacity }}
      >
        <MaterialIcon
          name="add-circle"
          size={60}
          color={EStyleSheet.value("$primaryBtn")}
        />
      </MenuTrigger>
      <MenuOptions>
        <MenuOption value={1} text="One" />
        <MenuOption value={2}>
          <Text style={{ color: "red" }}>Two</Text>
        </MenuOption>
        <MenuOption value={3} disabled={true} text="Three" />
      </MenuOptions>
    </Menu>
  </View>
);

export default AddCircleBtn;
