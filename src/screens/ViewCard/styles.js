import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#1a7bd5",
    marginTop: 20,
    borderRadius: 10,
    padding: 15,
    margin: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  textName:{
    color: "#fff",
    fontSize: 22,
    paddingBottom: 5,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonTextEdit: {
    fontSize: 15,
    color: "white",
    backgroundColor: "#0A1CB4",
    borderRadius: 5,
    padding: 5,
    
  },
  buttonTextDelete: {
    fontSize: 15,
    color: "white",
    backgroundColor: "#E32204",
    borderRadius: 5,
    padding: 5,
  }
});
