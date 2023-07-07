import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  extrato: {
    color: "black",
    paddingVertical: 12,
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  despesa: {
    color: "red",
  },
  receita: {
    color: "green",
  },
  transacao: {
    marginVertical: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dataStyle: {
    fontSize: 14,
    paddingVertical: 12,
    paddingRight: 18,
  },
  eu: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "lightgrey",
  },
});
