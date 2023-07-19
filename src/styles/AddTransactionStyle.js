import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  fixToText: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
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
  inputAdd: {
    backgroundColor: "#1a7bd5",
    color: "white",
    alignItems: "center",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
  },
  label: {
    paddingTop: 50,
    fontSize: 30,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 1,
    backgroundColor: "#D9D9D9",
  },
  dateInput: {
    display: "flex",
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 1,
    backgroundColor: "#D9D9D9",
  },
  buttonRD: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonSelectedR: {
    backgroundColor: "green",
    paddingVertical: 15,
    paddingHorizontal: 10,
    color: "#000",
  },
  buttonSelectedE: {
    backgroundColor: "red",
    paddingVertical: 15,
    paddingHorizontal: 10,
    color: "#000",
  },
  buttonLabel: {
    color: "white",
  },
  inactiveOption: {
    backgroundColor: "grey",
    paddingVertical: 15,
    paddingHorizontal: 10,
    color: "#000",
  }
});
