import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, FlatList } from "react-native";

import styles from "./styles";
import Separator from "../Separator/Separator";

class DailyMeals extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var data = require("../../../data/DailyMeals.json");
    var element = [];

    var dataForDay = data.monday;

    for (let i = 0; i < dataForDay.length; i++) {
      element.push(
        <View style={styles.itemContainer} key={i}>
          <Text>{dataForDay[i].meal}</Text>
          <Text style={styles.center}>{dataForDay[i].name}</Text>
        </View>
      );
    }

    return <View style={styles.container}>{element}</View>;
  }
}

export default DailyMeals;
