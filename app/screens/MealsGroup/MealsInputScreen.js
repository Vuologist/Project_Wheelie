import React, { Component } from "react";
import { View, TextInput, Button } from "react-native";

import { BackgroundContainer } from "../../components/Container";
import { MainBanner } from "../../components/Banner";

class MealsInputScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View
          style={{
            marginTop: 50
          }}
        >
          <MainBanner title="Add A Meal" />
          <TextInput
            style={{
              height: 40,
              borderBottomColor: "gray",
              marginLeft: 10,
              marginRight: 30,
              marginTop: 20,
              marginBottom: 10,
              borderBottomWidth: 1
            }}
            placeholder="ex Chicken Soup"
          />
          <View
            style={{
              marginTop: 50,
              alignItems: "center"
            }}
          >
            <Button
              style={{ fontSize: 18 }}
              containerStyle={{
                padding: 8,
                height: 40,
                borderRadius: 6
              }}
              onPress={() => this.props.navigation.navigate("Meals2")}
              title="Save"
            />
          </View>
        </View>
      </View>
    );
  }
}

export default MealsInputScreen;
