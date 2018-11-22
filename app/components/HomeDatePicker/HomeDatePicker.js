import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

class HomeDatePicker extends Component {
  constructor(props) {
    super(props);
  }

  renderDates() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayComponent = [];

    for (var i = 0; i < days.length; i++) {
      dayComponent.push(
        <View style={styles.box} key={i}>
          <Text style={styles.text}>{days[i]}</Text>
        </View>
      );
    }

    return dayComponent;
  }

  render() {
    return <View style={styles.container}>{this.renderDates()}</View>;
  }
}

export default HomeDatePicker;
