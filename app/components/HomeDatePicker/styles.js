import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 10
  },
  box: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 0,
    width: 50,
    padding: 10
  },
  text: {
    textAlign: "center"
  }
});

export default styles;
