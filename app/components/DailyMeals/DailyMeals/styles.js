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
    flexGrow: 1
    //backgroundColor: "#888"
  },
  center: {
    textAlign: "center"
  }
});

export default styles;
