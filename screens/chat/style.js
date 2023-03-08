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

  searchBox: {
    display: "flex",
    flexDirection: "row",
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
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    fontSize: 18,
    fontWeight: "400",
    width: "100%",
    height: "100%",
  },
  chatText: {
    textAlign: "center",
    marginBottom: 30,
  },
  chatBalloonRow: {
    height: 150,
  },
  chatBalloonWrap: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  chatPic: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 10,
  },
  chatName: {
    fontSize: 15,
  },
  scrollView: {
    height: 150,
    marginBottom: 30,
  },
  messageListContainer: {
    borderTopColor: "#E0E0E2",
    borderTopWidth: 2,
    paddingTop: 30,
  },
  chatBox: {
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  chatImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginRight: 10,
  },
  message: {
    width: 230,
    marginTop: 2,
  },
  messageReceive: {
    position: "absolute",
    right: 50,
    top: 32,
    color: "#9A9A9D",
    fontSize: 15,
  },
});
export default styles;
