import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import commonStyle from "../../src/assets/styles/commonStyle";

import styles from "./style";
export default function DeliveryMethod({ navigation }) {
  const [deliveryOption, setDeliveryOption] = useState([
    { id: 1, value: "Door delivery", name: "Door delivery", selected: false },
    {
      id: 2,
      value: "Pick up at store",
      name: "Pick up at store",
      selected: false,
    },
    { id: 3, value: "Dine in", name: "Dine in", selected: false },
  ]);

  const onRadioBtnClick = (item) => {
    let updatedState = deliveryOption.map((deliveryItem) =>
      deliveryItem.id === item.id
        ? { ...deliveryItem, selected: true }
        : { ...deliveryItem, selected: false }
    );
    setDeliveryOption(updatedState);
  };

  const [refetch, setRefetch] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    id: "",
    image: "",
    role: "",
    username: "",
  });
  useEffect(() => {
    AsyncStorage.getItem("@userData")
      .then((result) => {
        const value = JSON.parse(result);
        const valueID = value?.user;
        setUserData(valueID);
        // setRefetch(!refetch);
        setRefetch(true);
      })
      .catch((err) => {
        err;
      });
  }, [refetch]);

  const userID = userData.id;
  const [customerData, setCusomerData] = useState({
    birthday: "",
    delivery_address: "",
    email: "",
    firstname: "",
    gender: "",
    id: "",
    image: "",
    lastname: "",
    password: "",
    phone: "",
    role: "",
    username: "",
  });
  useEffect(() => {
    axios
      .get(`https://cheerful-overalls-fawn.cyclic.app/api/v1/users/${userID}`)
      .then((result) => {
        setCusomerData(result.data.data);
        setRefetch(true);
      })
      .catch((err) => {
        err;
      });
  }, [refetch]);

  const [carts, setCarts] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem("@cart")
      .then((result) => {
        const value = JSON.parse(result);
        setCarts(value);
      })
      .catch((err) => {
        err;
      });
  }, []);
  const itemPriceUhuy = carts?.map((tot) => {
    const itemPrice = parseInt(tot.priceCart);
    return itemPrice;
  });
  const totalPrice = itemPriceUhuy.reduce((a, b) => a + b, 0);
  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <View style={[commonStyle.px40, styles.container]}>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../src/assets/images/go-back-2.png")} />
        </Pressable>
        <Text style={styles.headerText}>Checkout</Text>
        <Text>{""}</Text>
      </View>

      <View>
        <Text style={styles.delivery}>Delivery</Text>
      </View>

      <View style={styles.addressEdit}>
        <Text style={styles.address}>Address details</Text>
        <Pressable>
          <Text style={[commonStyle.textBrown, styles.change]}>change</Text>
        </Pressable>
      </View>

      <View style={styles.addressBox}>
        <View style={styles.addressDetailBox}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            {customerData.username} Address
          </Text>
        </View>
        <View style={styles.addressDetailBox}>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>
            {customerData.delivery_address}
          </Text>
        </View>
        <View
          style={[
            styles.addressDetailBox,
            { borderBottomColor: "#fff", borderBottomWidth: 0 },
          ]}
        >
          <Text style={{ fontSize: 15, fontWeight: "400" }}>
            {customerData.phone}
          </Text>
        </View>
      </View>

      <Text style={styles.deliveryBoxTitle}>Delivery methods</Text>

      <View style={styles.deliveryMethodBox}>
        {deliveryOption.map((item) => (
          <View style={styles.radioButtonContainer} key={item.id}>
            <TouchableOpacity
              style={styles.radioButton}
              onPress={() => onRadioBtnClick(item)}
            >
              {item.selected ? <View style={styles.radioButtonIcon} /> : null}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onRadioBtnClick(item);
              }}
            >
              <Text style={styles.radioButtonText}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={styles.total}>
        <Text style={{ fontSize: 18 }}>Total</Text>
        <Text style={{ fontSize: 24, fontWeight: "900" }}>
          IDR {numberWithCommas(totalPrice)}
        </Text>
      </View>

      <TouchableOpacity
        style={[commonStyle.brownButton]}
        onPress={() => navigation.navigate("Payment Page")}
      >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
          Proceed to payment
        </Text>
      </TouchableOpacity>
    </View>
  );
}
