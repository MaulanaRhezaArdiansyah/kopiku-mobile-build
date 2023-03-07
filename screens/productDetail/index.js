import axios from "axios";
import { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import commonStyle from "../../src/assets/styles/commonStyle";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function ProductDetail({ route }) {
  const navigation = useNavigation();

  const productDetail = [
    {
      id: 1,
      productTitle: "Cold Brew",
      productPrice: "30000",
      deliveryInfo: {
        startDay: "Monday",
        endDay: "Friday",
        startTime: "1 pm",
        endTime: "7 pm",
      },
      description:
        "Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.",
    },
  ];
  const { productId } = route.params;
  const [detail, setDetail] = useState({
    id: "",
    title: "",
    price: "",
    category: "",
    description: "",
    images: [
      {
        product_id: "",
        name: null,
        filename: "",
      },
    ],
  });
  useEffect(() => {
    axios
      .get(
        `https://cheerful-overalls-fawn.cyclic.app/api/v1/products/${productId}`
      )
      .then((result) => {
        setDetail(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem("@cart")
      .then((result) => {
        const data1 = JSON.parse(result);
        setCarts(data1);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const cart = {
    idProduct: detail.id,
    titleCart: detail.title,
    priceCart: detail.price,
    imageCart: detail.images[0].filename,
    itemOrder: 1,
  };
  const [refetchAddCart, setRefetchAddCart] = useState(false);

  // detail = digunakan untuk menambah cart juga selain get data di flatlist
  // carts = data cart yang sebelumnya sudah ditambahkan
  const storeCart = async () => {
    try {
      if (carts == null) {
        await AsyncStorage.setItem("@cart", JSON.stringify([cart]));
      } else {
        await AsyncStorage.setItem("@cart", JSON.stringify([...carts, cart]));
      }
      Alert.alert(
        "Congrats!",
        `Successfully add ${detail.title} to your cart! 🥳`,
        [{ text: "Yappsss!" }]
      );
      setRefetchAddCart(true);
      navigation.navigate("Cart Page");
      // AsyncStorage.removeItem("@cart");
    } catch (error) {
      console.log(error);
    }
  };

  // dibawah ini untuk display cart length
  const [dataCartLength, setDataCartLength] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem("@cart")
      .then((result) => {
        const data1 = JSON.parse(result);
        setDataCartLength(data1);
      })
      .catch((err) => {
        console.log(err);
      });
    // }, []);
  }, [refetchAddCart]);

  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <View style={[commonStyle.px40, styles.container]}>
      <View style={styles.navbar}>
        <Pressable
          style={styles.navbarImage}
          onPress={() => {
            setRefetchAddCart(false);
            navigation.goBack();
          }}
        >
          <Image source={require("../../src/assets/images/go-back-2.png")} />
        </Pressable>
        <Pressable style={styles.navbarImage}>
          <View style={styles.cartItemBalloon}>
            <Text style={styles.cartItemText}>
              {dataCartLength ? dataCartLength?.length : "0"}
            </Text>
          </View>
          <Image
            source={require("../../src/assets/images/shopping-cart-2.png")}
          />
        </Pressable>
      </View>
      <View style={styles.imageBox}>
        <Image
          style={styles.productImage}
          source={{
            uri: `https://cheerful-overalls-fawn.cyclic.app/uploads/images/${detail.images[0].filename}`,
          }}
        />
      </View>
      <View style={styles.productTitle}>
        <Text style={styles.productTitleText}>{detail.title}</Text>
        <Text style={styles.productPriceText}>
          IDR {numberWithCommas(detail.price)}
        </Text>
      </View>
      <View>
        <Text style={styles.deliveryInfoText}>Delivery info</Text>
        <Text style={styles.deliveryInfoSubtext}>
          Delivered only on {productDetail[0].deliveryInfo.startDay} until{" "}
          {productDetail[0].deliveryInfo.endDay} from{" "}
          {productDetail[0].deliveryInfo.startTime} to{" "}
          {productDetail[0].deliveryInfo.endTime}
        </Text>
      </View>
      <View>
        <Text style={styles.descriptionText}>Description</Text>
        <Text style={styles.descriptionSubtext}>{detail.description}</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={[commonStyle.brownButton]}
          // onPress={() => {

          //   // AsyncStorage.setItem("@cart", )
          //   // navigation.navigate("Cart Page")
          // }}
          onPress={storeCart}
        >
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
