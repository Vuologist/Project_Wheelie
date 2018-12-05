import EStyleSheet from "react-native-extended-stylesheet";
import { StatusBar } from "react-native";

const styles = EStyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    top: 0,
    "@media android": {
      //paddingTop: StatusBar.currentHeight
    }
  },
  button: {
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  icon: {
    width: 18
  }
});

export default styles;
