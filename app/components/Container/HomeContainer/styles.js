import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$primaryBackground"
  },
  welcomeBanner: {
    flexBasis: "40%",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingBottom: 10
  },
  dailyMeals: {
    flexBasis: "60%"
  }
});
