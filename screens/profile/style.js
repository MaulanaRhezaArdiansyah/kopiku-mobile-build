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
    marginBottom: 30,
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
  profilePicWrapper: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  profilePic: {
    width: "100%",
    height: "100%",
    borderRadius: 300,
  },
  orderHistoryBox: {
    height: 180,
    borderTopWidth: 5,
    borderBottomWidth: 6,
    borderColor: "#bababa",
    paddingTop: 10,
  },
  orderHistoryText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  historyImage: {
    borderRadius: 30,
    width: 100,
    height: 100,
    marginRight: 20,
  },
  buttonProfileBox: {
    paddingTop: 20,
  },
  buttonProfileCard: {
    height: 50,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 25,
    marginBottom: 20,
  },
});
export default styles;
