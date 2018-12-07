import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    alignItems: "center",
    margin: 3
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    fontWeight: "400",
    backgroundColor: "$primaryBtn",
    borderColor: "$primaryBtn",
    borderRadius: ".25rem",
    borderWidth: 1,
    paddingVertical: ".375rem",
    paddingHorizontal: ".75rem"
  },
  text: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "300"
  }
});
