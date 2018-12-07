import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

var { height, width } = Dimensions.get("window");

export default EStyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1
  },
  left: {
    flexBasis: "30%",
    flex: 1
  },
  right: {
    flexBasis: "70%",
    flex: 1
  }
});
