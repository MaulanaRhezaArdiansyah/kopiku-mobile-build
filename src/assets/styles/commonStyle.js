import { StyleSheet } from "react-native";

const commonStyle = StyleSheet.create({
  bgBase: { backgroundColor: "#f2f2f2" },
  px40: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  px20: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  mr20: {
    marginRight: 20,
  },
  pl40: { paddingLeft: 40 },
  mt40: {
    marginTop: 40,
  },
  mt20: {
    marginTop: 20,
  },
  mt10: { marginTop: 10 },
  imageCircle: {
    borderRadius: 400 / 2,
    width: "100%",
    height: "100%",
  },
  textBrown: {
    color: "#6A4029",
  },
  brownButton: {
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
  textBold700: {
    fontWeight: "700",
  },
});
export default commonStyle;
