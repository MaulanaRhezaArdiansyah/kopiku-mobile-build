import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    // paddingTop: 80,
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
  orderHistoryTitle: {
    fontSize: 34,
    fontWeight: "900",
    marginBottom: 30,
  },
  fingerSwipe: {
    marginRight: 5,
    width: 30,
    height: 30,
  },
  swipe: {
    height: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  historyCard: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    backgroundColor: "#fff",
    elevation: 5,
    shadowColor: "#bbb",
    width: "100%",
    height: 140,
    alignItems: "center",
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },
  productImage: {
    width: 90,
    height: 90,
    borderRadius: 100,
    marginRight: 10,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "900",
    marginBottom: 2,
  },
  productPrice: {
    fontSize: 22,
    marginBottom: 2,
    color: "#6A4029",
  },
  productStatus: {
    color: "#6A4029",
  },
  historyLeftText: {
    color: "#9A9A9D",
    alignSelf: "center",
    marginBottom: 20,
  },
  orderItem: {
    fontSize: 16,
    color: "#9A9A9D",
  },
});

export default styles;
