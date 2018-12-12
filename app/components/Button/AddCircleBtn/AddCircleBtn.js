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

// const AddCircleBtn = ({ onPress }) => (
//   <View style={styles.container}>
//     <TouchableOpacity onPress={onPress} style={styles.background}>
//       <MaterialIcon
//         name="add-circle"
//         size={60}
//         color={EStyleSheet.value("$primaryBtn")}
//       />
//     </TouchableOpacity>
//   </View>
// );

class AddCircleBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={styles.background}
        >
          <MaterialIcon
            name="add-circle"
            size={60}
            color={EStyleSheet.value("$primaryBtn")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddCircleBtn;
