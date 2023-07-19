import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangle: {
    width: 170,
    height: 70,
    backgroundColor: "lightgray",
  },
  innerContainer: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#757de8",
    borderRadius: 10,
  },
  receitaDespesaMensal: {
    flexDirection: "row",
    padding: 10,
    gap: 15,
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  textSaldo: {
    fontSize: 60,
    color: "white",
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
    alignItems: "center",
    marginTop: 20,
  },
});
