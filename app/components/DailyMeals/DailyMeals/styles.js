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
  content: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 30,
    alignSelf: "center"
  },
  name: {
    fontSize: 20,
    alignSelf: "center"
  }
});

export default styles;
