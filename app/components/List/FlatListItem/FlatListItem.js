import React, { Component } from "react";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Platform,
  TouchableHighlight
} from "react-native";

const styles = StyleSheet.create({
  flatListItem: {
    color: "white",
    padding: 10,
    fontSize: 16
  }
});

class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column"
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato'
            backgroundColor: "mediumseagreen"
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              height: 100
            }}
          >
            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
            <Text style={styles.flatListItem}>
              {this.props.item.foodDescription}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: "white"
          }}
        />
      </View>
    );
  }
}

export default FlatListItem;
