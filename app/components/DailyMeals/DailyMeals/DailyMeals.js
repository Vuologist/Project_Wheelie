import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

class DailyMeals extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var data = require("../../../data/DailyMeals.json");
    var element = [];
    var image = [
      require("./images/egg.png"),
      require("./images/turkey-leg.png"),
      require("./images/whole-turkey.png")
    ];

    var dataForDay = data.monday;

    for (let i = 0; i < dataForDay.length; i++) {
      element.push(
        <View style={styles.itemContainer} key={i}>
          <TouchableOpacity style={styles.itemBox}>
            <Text>{dataForDay[i].meal}</Text>
            <View style={styles.content}>
              <Image
                resizeMode="contain"
                style={styles.icon}
                source={image[i]}
              />
              <Text style={styles.name}>{dataForDay[i].name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    //egg, single chicken leg, whole chicken
    return <View style={styles.container}>{element}</View>;
  }
}

export default DailyMeals;
