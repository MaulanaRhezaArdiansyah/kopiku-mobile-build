import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textWelcome: {
    color: "#000",
    fontWeight: "700",
    fontSize: 60,
    textAlign: "center",
  },
  getStartButton: {
    backgroundColor: "#6A4029",
    width: 350,
    height: 70,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default styles;
