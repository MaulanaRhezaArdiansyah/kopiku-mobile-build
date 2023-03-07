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
  textForgot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dontWorry: {
    fontSize: 80,
    lineHeight: 80,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  enterEmail: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  inputForm: {
    borderBottomColor: "#9F9F9F",
    borderBottomWidth: 1,
    width: 350,
    height: 50,
    textAlign: "left",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "#9A9A9D",
    fontSize: 18,
    marginBottom: 20,
  },
  resendLinkButton: {
    backgroundColor: "#6A4029",
    width: 350,
    height: 70,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 20,
  },
});
export default styles;
