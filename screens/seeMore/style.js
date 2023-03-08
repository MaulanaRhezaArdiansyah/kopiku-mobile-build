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
  listProduct: {
    flexDirection: "column",
    paddingTop: 40,
  },
  cardRowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  cardWrapper: {
    width: 180,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 10,
    position: "relative",
  },
  productImage: {
    position: "absolute",
    width: 130,
    height: 130,
    borderRadius: 200,
    zIndex: 5,
    justifyContent: "center",
    alignSelf: "center",
    top: 0,
    right: 35,
  },
  card: {
    backgroundColor: "#fff",
    height: 200,
    width: 160,
    borderRadius: 30,
    alignItems: "center",
    padding: 10,
  },
  shadowCard: {
    shadowColor: "#000",
    elevation: 3,
  },
  text: {
    width: "100%",
  },
  productTitle: {
    fontWeight: "700",
    fontSize: 22,
    textAlign: "center",
    marginTop: 90,
  },
  productPrice: {
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
    color: "#6A4029",
  },
});
export default styles;
