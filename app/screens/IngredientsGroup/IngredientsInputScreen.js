import React, { Component } from "react";
import { View, TextInput, Button } from "react-native";

import { BackgroundContainer } from "../../components/Container";
import { MainBanner } from "../../components/Banner";

class IngredientsInputScreen extends Component {
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
          <MainBanner title="Add an ingrediant" />
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
            placeholder="ex Fish Sauce"
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
              onPress={() => {
                this.props.navigation.navigate("Ingredients2");
              }}
              title="Save"
            />
          </View>
        </View>
      </View>
    );
  }
}

export default IngredientsInputScreen;
