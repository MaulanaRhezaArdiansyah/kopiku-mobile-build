import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    paddingTop: 60,
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginBottom: 50,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "700",
  },
  navbarImage: {
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrapper: {
    width: 140,
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "relative",
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  editPencilWrapper: {
    position: "absolute",
    backgroundColor: "#6A4029",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    bottom: 0,
    right: 0,
  },
  editPencil: {},
  labelForm: {
    color: "#9f9f9f",
    fontWeight: "700",
  },
  inputForm: {
    borderBottomColor: "#9f9f9f",
    borderBottomWidth: 1,
    paddingTop: 6,
    paddingBottom: 5,
    marginBottom: 20,
    color: "#6A4029",
  },
  inputBirthDate: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBottomColor: "#9f9f9f",
    borderBottomWidth: 1,
    paddingTop: 6,
    paddingBottom: 5,
    marginBottom: 20,
  },
});
export default styles;
