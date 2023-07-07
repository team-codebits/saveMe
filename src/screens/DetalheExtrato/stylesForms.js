import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  buttonsView: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    marginBottom: 50,
    marginTop: 50,
  },
  buttonRD: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonSelecionadoR: {
    backgroundColor: "green",
    paddingVertical: 15,
    paddingHorizontal: 10,
    color: "#000",
  },
  buttonSelecionadoD: {
    backgroundColor: "red",
    paddingVertical: 15,
    paddingHorizontal: 10,
    color: "#000",
  },
  buttonLabel: {
    color: "white",
  },
  inactiveOpcaao: {
    backgroundColor: "grey",
    paddingVertical: 15,
    paddingHorizontal: 10,
    color: "#000",
  },
  button: {
    flex: 1,
    backgroundColor: "#1a7bd5",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
