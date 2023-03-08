import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    paddingTop: 60,
    position: "relative",
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "700",
  },
});
export default styles;
