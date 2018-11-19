import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, FlatList } from "react-native";

import "./styles";

class DailyMeals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  componentDidMount() {
    var data = require("../../data/DailyMeals.json");
    console.log(data.monday[0]);
    this.setState({
      dataSource: data.monday
    });
  }

  renderItems = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  render() {
    return (
      <View>
        <FlatList data={this.state.dataSource} renderItem={this.renderItems} />
      </View>
    );
  }
}

export default DailyMeals;
