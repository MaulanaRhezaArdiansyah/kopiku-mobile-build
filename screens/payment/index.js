import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import commonStyle from "../../src/assets/styles/commonStyle";
// import ModalPaymentSuccess from "../../src/components/modalPayment/modalPaymentSuccess";

import styles from "./style";
export default function Payment({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const paymentMethod = [
    {
      id: 1,
      payment: "Bank BRI Platinum",
      method: "Credit / Debit Card",
      image: require("../../src/assets/images/card.png"),
    },
    {
      id: 2,
      payment: "Bank BNI",
      method: "Virtual Account",
      image: null,
    },
    {
      id: 3,
      payment: "Cash",
      method: "Cash on Delivery",
      image: null,
    },
  ];

  const [carts, setCarts] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const getMyObject = async () => {
    try {
      const value = await AsyncStorage.getItem("@cart");
      const jsonValue = await JSON.parse(value);
      setCarts(jsonValue);
      return jsonValue;
    } catch (e) {
      e;
    }
  };
  useEffect(() => {
    getMyObject();
  }, []);
  const itemPriceUhuy = carts?.map((tot) => {
    const itemPrice = parseInt(tot.priceCart);
    return itemPrice;
  });
  const priceArray = carts?.map((i) => {
    const price = parseInt(i.priceCart);
    return price;
  });
  const subTotal = priceArray.reduce((a, b) => a + b, 0);
  const tax = (subTotal * 1) / 10;
  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const [dataUserID, setDataUserID] = useState();
  useEffect(() => {
    const getUserID = async () => {
      const data = await AsyncStorage.getItem("@userData");
      const dataJSON = await JSON.parse(data);
      setDataUserID(dataJSON?.user?.id);
    };
    getUserID();
  }, []);

  const [payment, setPayment] = useState();

  useEffect(() => {
    setPayment(carts);
  }, [carts]);

  const [dataAddHistory, setDataAddHistory] = useState();

  useEffect(() => {
    setDataAddHistory({
      product_title: carts[0]?.titleCart,
      product_price: carts[0]?.priceCart,
      order_item: carts[0]?.itemOrder,
      product_id: carts[0]?.idProduct,
    });
  }, [carts]);

  const URL = `https://cheerful-overalls-fawn.cyclic.app/`;
  const handlePayment = () => {
    for (let i = 0; i < carts.length; i++) {
      axios({
        method: "POST",
        url: `${URL}/api/v1/history/${dataUserID}`,
        data: dataAddHistory,
      })
        .then((result) => {
          AsyncStorage.removeItem("@cart");
          setModalVisible(true);
          result;
        })
        .catch((err) => {
          err;
        });
    }
  };

  return (
    <View style={[commonStyle.px40, styles.container]}>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../src/assets/images/go-back-2.png")} />
        </Pressable>
        <Text style={styles.headerText}>Payment</Text>
        <Text>{""}</Text>
      </View>

      <View style={styles.paymentMethodTitle}>
        <Text style={styles.paymentMethodTitleText}>Payment Methods</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.paymentOptionSlider}
        contentContainerStyle={styles.position}
      >
        {paymentMethod.map((i) =>
          i.image ? (
            <Image
              key={i.id}
              style={{
                marginRight: 10,
                borderColor: "#6A4029",
                borderWidth: 4,
                borderRadius: 20,
              }}
              source={i.image ? i.image : ""}
            />
          ) : (
            <View style={styles.paymentMethodOther}>
              <Text style={{ fontSize: 18 }}>{i.method}</Text>
              <Text style={{ fontSize: 18 }}>{i.payment}</Text>
            </View>
          )
        )}
      </ScrollView>

      <ScrollView style={styles.orderInfo} showsVerticalScrollIndicator={false}>
        {carts.map((ord, index) => (
          <View key={ord.idProduct} style={styles.orderItem}>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              {ord.itemOrder} {ord.titleCart}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              IDR {numberWithCommas(ord.priceCart)}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.totalPaymentBox}>
        <View style={[styles.totalPayment, { paddingTop: 20 }]}>
          <Text style={{ fontSize: 18 }}>Subtotal</Text>
          <Text style={{ fontSize: 18 }}>IDR {numberWithCommas(subTotal)}</Text>
        </View>
        <View style={[styles.totalPayment, { marginBottom: 10 }]}>
          <Text style={{ fontSize: 18 }}>Tax</Text>
          <Text style={{ fontSize: 18 }}>IDR {numberWithCommas(tax)}</Text>
        </View>
        <View style={styles.totalPayment}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>TOTAL</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            IDR {numberWithCommas(subTotal + tax)}
          </Text>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Payment success! Thank you for your order!
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
                navigation.navigate("Home Drawer");
              }}
            >
              <Text style={styles.textStyle}>My pleasure.. 😊</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        activeOpacity={0.7}
        style={[commonStyle.brownButton]}
        onPress={handlePayment}
      >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
          Pay Now
        </Text>
      </TouchableOpacity>
    </View>
  );
}
