import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  textWelcome: {
    color: "#000",
    fontWeight: "700",
    fontSize: 60,
    textAlign: "center",
  },
  subTextWelcome: {
    color: "#000",
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 50,
  },
  createAccountButton: {
    backgroundColor: "#6A4029",
    width: 350,
    height: 70,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  loginButton: {
    backgroundColor: "#FFBA33",
    width: 350,
    height: 70,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 10,
  },
  image: {
    justifyContent: "center",
    marginBottom: 50,
  },
});

export default styles;
