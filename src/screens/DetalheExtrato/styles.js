import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  divider: {
    borderColor: "lightgrey",
    borderStyle: "solid",
    borderWidth: 1,
    marginVertical: 12,
  },
  text: {
    fontSize: 20,
  },
  textBold: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonsView: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    marginBottom: 50,
    marginTop: 50,
  },
});
