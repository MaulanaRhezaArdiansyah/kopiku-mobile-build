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
  },
  imageBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 300,
  },
  productImage: {
    width: 250,
    height: 250,
    borderRadius: 1000,
  },
  productTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  productTitleText: {
    fontWeight: "900",
    fontSize: 40,
    textAlign: "center",
  },
  productPriceText: {
    fontWeight: "700",
    fontSize: 24,
    color: "#6A4029",
    marginBottom: 30,
  },
  deliveryInfoText: {
    fontWeight: "900",
    fontSize: 18,
  },
  deliveryInfoSubtext: {
    fontSize: 16,
    opacity: 1 / 2,
    marginBottom: 30,
  },
  descriptionText: {
    fontWeight: "900",
    fontSize: 18,
  },
  descriptionSubtext: {
    fontSize: 16,
    opacity: 1 / 2,
    marginBottom: 30,
  },
  navbarImage: {
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  button: {
    // height: 100,
    // justifyContent: "flex-end",
    alignItems: "center",
    // backgroundColor: "red",
  },
  cartItemBalloon: {
    position: "absolute",
    backgroundColor: "#6A4029",
    width: 20,
    height: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    top: -5,
    left: 0,
    zIndex: 2,
  },
  cartItemText: {
    color: "#fff",
  },
});

export default styles;
