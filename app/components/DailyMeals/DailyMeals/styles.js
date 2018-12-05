import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  itemContainer: {
    flex: 1,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10
  },
  itemBox: {
    flex: 1,
    padding: 10,
    backgroundColor: "#75FF00",
    borderWidth: 1,
    borderColor: "#75FF00",
    borderRadius: 4
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
