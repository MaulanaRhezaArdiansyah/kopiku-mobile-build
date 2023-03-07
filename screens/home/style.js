import { Dimensions, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    // paddingTop: 80,
    paddingTop: 60,
  },
  //   NAVBAR STYLE
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  navbarRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 20,
  },
  loginBtnHome: {
    padding: 15,
    width: 120,
    backgroundColor: "#FFBA33",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  navbarUnlogged: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginBottom: 0,
    marginTop: -10,
  },
  textLogin: {
    fontSize: 18,
    fontWeight: "700",
  },
  logo: {
    fontSize: 18,
    fontWeight: "700",
  },
  cartItem: {
    position: "relative",
  },
  cartItemBalloon: {
    position: "absolute",
    backgroundColor: "#6A4029",
    width: 20,
    height: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    top: -10,
    left: -5,
  },
  cartItemText: {
    color: "#fff",
  },
  //   TITLE STYLE
  title: {
    fontWeight: "700",
    color: "#000",
    fontSize: 36,
  },
  // HELLO
  hello: {
    fontSize: 18,
    marginTop: 20,
    height: 30,
    fontWeight: "700",
    color: "#6A4029",
  },
  //   SEARCH STYLE
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
    width: "100%",
    height: "100%",
    fontSize: 18,
    fontWeight: "900",
    color: "#6A4029",
  },

  // TAB CATEGORY
  tabTextBox: {
    marginRight: 30,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tabTextBox1: {
    marginRight: 30,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    fontSize: 18,
  },
  tabTextActive: {
    fontSize: 18,
    fontWeight: "700",
    color: "#6A4029",
    borderBottomColor: "#6A4029",
    borderBottomWidth: 2,
  },
  scrollTabCategory: {
    height: 60,
    marginBottom: 20,
  },

  // CATEGORY TITLE
  categoryTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textCategoryTitle: {
    fontSize: 18,
    fontWeight: "900",
  },
  seeMore: {
    fontSize: 16,
  },

  // PRODUCT CARD
  cardWrapper: {
    height: 350,
    // width: 100,
    width: Dimensions.get("window").width / 1.5,
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    position: "relative",
    marginLeft: 10,
    marginTop: 30,
  },
  card: {
    width: "100%",
    height: "90%",
    // backgroundColor: "blue",
    backgroundColor: "#fff",
    elevation: 10,
    borderRadius: 30,
    // justifyContent: "flex-end",
    justifyContent: "flex-start",
    paddingTop: 200,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  productImage: {
    // width: "100%",
    position: "absolute",
    width: 180,
    height: 180,
    // resizeMode: "contain",
    resizeMode: "cover",
    zIndex: 2,
    borderRadius: 30,
    top: 0,
  },
  productTitleText: {
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    // backgroundColor: "red",
  },
  productPriceText: { fontSize: 20, fontWeight: "700", marginBottom: 40 },

  notFound: {
    height: 300,
    paddingHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e2e2e2",
    marginTop: 10,
    borderRadius: 200,
    width: 400,
    alignSelf: "center",
  },
  notFoundText: {
    fontSize: 26,
    color: "#6A4029",
    textAlign: "center",
  },
});

export default styles;
