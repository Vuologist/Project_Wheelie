import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$primaryBackground"
  },
  banner: {
    flexBasis: "25%",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingBottom: 10,
    paddingLeft: 35
  },
  content: {
    flexBasis: "75%"
  }
});
