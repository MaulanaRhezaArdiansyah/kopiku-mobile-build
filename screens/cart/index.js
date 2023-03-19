import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import commonStyle from "../../src/assets/styles/commonStyle";
import styles from "./style";
import { API_URL } from "@env";

export default function Cart() {
  const navigation = useNavigation();
  const carts = [
    {
      id: 1,
      productName: "Cold Brew",
      productPrice: "34000",
      total: 0,
    },
    {
      id: 2,
      productName: "Cappucino",
      productPrice: "12000",
      total: 0,
    },
    {
      id: 3,
      productName: "Mbahman Coffee",
      productPrice: "20000",
      total: 0,
    },
    {
      id: 4,
      productName: "Mbahman Coffee",
      productPrice: "20000",
      total: 0,
    },
  ];
  const [total, setTotal] = useState(0);
  const [dataCart, setDataCart] = useState([
    {
      idProduct: "",
      titleCart: "",
      priceCart: "",
      imageCart: "",
      itemOrder: 1,
    },
  ]);

  useEffect(() => {
    AsyncStorage.getItem("@cart")
      .then((result) => {
        const carts = JSON.parse(result);
        setDataCart(carts);
      })
      .catch((err) => {
        err;
      });
  }, []);
  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <View style={[commonStyle.px40, styles.container]}>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../src/assets/images/go-back-2.png")} />
        </Pressable>
        <Text style={styles.headerText}>Cart</Text>
        <Text>{""}</Text>
      </View>
      <View style={styles.swipe}>
        <Image
          style={styles.fingerSwipe}
          source={require("../../src/assets/images/finger-swipe.png")}
        />
        <Text style={{ fontSize: 15 }}>swipe left on item to delete</Text>
      </View>
      {dataCart !== null ? (
        <>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dataCart}
            renderItem={({ item }) => {
              return (
                <View key={item.idProduct} style={styles.cartCard}>
                  <Image
                    style={styles.productImage}
                    source={{
                      uri: `https://kopiku.up.railway.app/images/${item.imageCart}`,
                    }}
                  />
                  <View style={styles.productInfoCart}>
                    <Text style={styles.productTitle}>{item.titleCart}</Text>
                    <Text style={[commonStyle.textBrown, styles.productPrice]}>
                      IDR {numberWithCommas(item.priceCart)}
                    </Text>
                  </View>
                  <View style={styles.totalProduct}>
                    <Pressable onPress={() => setTotal(total - 1)}>
                      <Text style={styles.decrement}>-</Text>
                    </Pressable>
                    <Text style={styles.total}>{item.itemOrder}</Text>
                    <Pressable
                      onPress={(tes) => {
                        tes.target
                          ? setTotal(total + 1)
                          : setTotal((total = 0));
                      }}
                    >
                      <Text style={styles.increment}>+</Text>
                    </Pressable>
                  </View>
                </View>
              );
            }}
          />

          <TouchableOpacity
            style={[commonStyle.brownButton, { marginBottom: 30 }]}
            onPress={() => navigation.navigate("Delivery Method Page")}
          >
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
              Confirm and Checkout
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View
            style={{
              height: "70%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 32, fontWeight: "700" }}>
              Cart is empty..
            </Text>
          </View>

          <TouchableOpacity
            style={[commonStyle.brownButton, { marginBottom: 30 }]}
            onPress={() => navigation.goBack()}
          >
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
              Back to Home
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
