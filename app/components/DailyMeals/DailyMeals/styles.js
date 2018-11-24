import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    borderTopColor: "#000",
    borderTopWidth: 3
  },
  itemContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
