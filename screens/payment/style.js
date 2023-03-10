import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    // paddingTop: 80,
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
  navbarImage: {
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paymentMethodTitle: {
    borderBottomWidth: 2.5,
    borderBottomColor: "#9F9F9F",
    paddingBottom: 10,
  },
  paymentMethodTitleText: {
    fontSize: 25,
    fontWeight: "700",
  },
  paymentOptionSlider: {
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    width: "100%",
    height: 280,
    borderBottomWidth: 2.5,
    borderBottomColor: "#9F9F9F",
    marginBottom: 10,
  },
  paymentMethodActive: {
    borderColor: "#6A4029",
    borderWidth: 4,
    borderRadius: 20,
  },
  paymentMethodOther: {
    width: 320,
    height: 200,
    borderRadius: 20,
    backgroundColor: "#9f9f9f",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  position: {
    justifyContent: "center",
    alignItems: "center",
  },
  orderItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  orderInfo: {
    paddingBottom: 20,
  },
  totalPayment: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  totalPaymentBox: {
    marginTop: 10,
    borderTopColor: "#9F9F9F",
    borderTopWidth: 2.5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: 300,
    height: 200,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center",
  },
  button: {
    borderRadius: 20,
    width: 180,
    height: 50,
    padding: 10,
    elevation: 2,
    justifyContent: "center",
  },
  buttonClose: {
    backgroundColor: "#6A4029",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "700",
  },
});
export default styles;
