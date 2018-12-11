import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./styles";

// const FlatListItem = ({ flag, onPress, item, iconName, id }) => (
//   <View style={styles.container} key={id}>
//     <TouchableOpacity onPress={onPress}>
//       <EntypoIcon name="dots-three-vertical" size={20} style={styles.padding} />
//     </TouchableOpacity>
//     <View style={styles.iconCircle}>
//       <MaterialIcon name={iconName} size={20} />
//     </View>
//     <Text style={styles.text}>
//       {flag === "ingredient" ? item.ingredient : item.meal}
//     </Text>
//   </View>
// );

class FlatListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container} key={this.props.id}>
        <TouchableOpacity onPress={this.props.onPress}>
          <EntypoIcon
            name="dots-three-vertical"
            size={20}
            style={styles.padding}
          />
        </TouchableOpacity>
        <View style={styles.iconCircle}>
          <MaterialIcon name={this.props.iconName} size={20} />
        </View>
        <Text style={styles.text}>
          {this.props.flag === "ingredient"
            ? this.props.item.ingredient
            : this.props.item.meal}
        </Text>
      </View>
    );
  }
}

export default FlatListItem;
