import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  item__leftText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingVertical: 12,
  },
  item__leftText$$expense: {
    color: "red",
  },
  item__leftText$$revenue: {
    color: "green",
  },
  item__date: {
    fontSize: 14,
    paddingRight: 18,
    paddingVertical: 12,
  },
  divider: {
    borderColor: "lightgrey",
    borderStyle: "solid",
    borderWidth: 1,
  },
  button: {
    borderRadius: 100,
    height: 40,
    width: 40,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#1a7bd5",
  },
  addButtonContainer: {
    alignItems: 'center',
    marginTop: 20, 
  },
});
