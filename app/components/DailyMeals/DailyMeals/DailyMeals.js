import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, FlatList } from "react-native";

import styles from "./styles";
import Separator from "../Separator/Separator";

class DailyMeals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  componentDidMount() {
    var data = require("../../../data/DailyMeals.json");
    this.setState({
      dataSource: data.monday
    });
  }

  renderItems = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text>{item.meal}</Text>
        <Text>{item.name}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItems}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default DailyMeals;
