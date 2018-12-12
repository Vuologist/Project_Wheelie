import React, { Component } from "react";
import {
  TouchableOpacity,
  TextInput,
  Text,
  Modal,
  FlatList,
  Button
} from "react-native";

import { BackgroundContainer, ModalContainer } from "../Container";
import { MainBanner } from "../Banner";

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  render() {
    return (
      <Modal
        visible={this.props.visible}
        animationType="slide"
        transparent
        onClosed={() => {
          console.log("closed");
        }}
      >
        <BackgroundContainer>
          <ModalContainer>
            <MainBanner title="Add an ingrediant" />
            <TextInput placeholder="Enter new food's name" />
            <TextInput placeholder="Enter new food's description" />
            <Button
              style={{ fontSize: 18, color: "white" }}
              containerStyle={{
                padding: 8,
                marginLeft: 70,
                marginRight: 70,
                height: 40,
                borderRadius: 6,
                backgroundColor: "mediumseagreen"
              }}
              title="Save"
              onPress={!this.props.visible}
            />
          </ModalContainer>
        </BackgroundContainer>
      </Modal>
    );
  }
}

export default AddModal;
