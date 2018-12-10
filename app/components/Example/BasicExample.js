import React from "react";
import { Text, TouchableOpacity } from "react-native";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import EStyleSheet from "react-native-extended-stylesheet";

const BasicExample = () => (
  <MenuProvider style={{ flexDirection: "column", padding: 30 }}>
    <Text>Hello world!</Text>
    <Menu onSelect={value => alert(`Selected number: ${value}`)}>
      <MenuTrigger TriggerTouchableComponent={TouchableOpacity}>
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
  </MenuProvider>
);

export default BasicExample;
