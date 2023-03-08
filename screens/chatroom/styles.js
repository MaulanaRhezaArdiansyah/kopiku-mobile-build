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
    height: 140,
    borderBottomWidth: 2,
    borderBottomColor: "#9F9F9F33",
  },
  profileInfo: {
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginBottom: 5,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "700",
  },
  conversationList: {
    paddingTop: 20,
  },
  staffChat: {
    flexDirection: "row",
    position: "relative",
    marginBottom: 60,
  },
  customerChat: {
    flexDirection: "row-reverse",
    position: "relative",
    marginBottom: 60,
  },
  chatBalloonPicStaff: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 10,
  },
  chatBalloonPicCustomer: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginLeft: 10,
  },
  messageContentStaff: {
    backgroundColor: "#6A4029",
    width: 280,
    borderRadius: 20,
    padding: 20,
  },
  messageContentCustomer: {
    backgroundColor: "#FFBA33",
    width: 280,
    borderRadius: 20,
    padding: 20,
  },
  receiveTimeStaff: {
    color: "#9f9f9f",
    fontWeight: "700",
    position: "absolute",
    right: 15,
    bottom: -30,
  },
  receiveTimeCustomer: {
    color: "#9f9f9f",
    fontWeight: "700",
    position: "absolute",
    right: 15,
    bottom: -30,
  },
  typeMessageBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 60,
    borderRadius: 30,
    backgroundColor: "#e2e2e2",
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: "center",
    marginTop: 15,
    marginBottom: 30,
  },
  cameraIcon: {},
  cameraIconBox: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  messageInput: {
    fontSize: 18,
    fontWeight: "400",
  },
});
export default styles;
