import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

import styles from "./styles";

class DailyMeals extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var data = require("../../../data/DailyMeals.json");
    var element = [];
    var image = [
      "./images/egg.png",
      "./images/turkey-leg.png",
      "./images/whole-turkey.png"
    ];

    var dataForDay = data.monday;

    for (let i = 0; i < dataForDay.length; i++) {
      element.push(
        <View style={styles.itemContainer} key={i}>
          <View style={styles.itemBox}>
            <Text>{dataForDay[i].meal}</Text>
            <View style={styles.center}>
              <Text>{dataForDay[i].name}</Text>
            </View>
          </View>
        </View>
      );
    }
    //egg, single chicken leg, whole chicken
    return <View style={styles.container}>{element}</View>;
  }
}

export default DailyMeals;
