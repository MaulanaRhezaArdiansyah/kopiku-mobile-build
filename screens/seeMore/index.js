import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import commonStyle from "../../src/assets/styles/commonStyle";
import styles from "./style";
import { API_URL } from "@env";

export default function SeeMore({ route }) {
  const navigation = useNavigation();
  const { category } = route.params;
  const [dataProductCategory, setDataProductCategory] = useState([]);
  useEffect(() => {
    axios
      .get(`https://kopiku.up.railway.app/api/v1/products${`?cat=${category}`}`)
      .then((result) => {
        setDataProductCategory(result.data.data);
      })
      .catch((err) => {
        err.response.data.message;
      });
  }, []);
  return (
    <View style={[commonStyle.px40, styles.container]}>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../src/assets/images/go-back-2.png")} />
        </Pressable>
        <Text style={styles.headerText}>
          {category ? category.replace(/['"]+/g, "") : "All Products"}
        </Text>
        <Text>{""}</Text>
      </View>
      <FlatList
        style={styles.listProduct}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={dataProductCategory}
        renderItem={({ item }) => {
          return (
            <Pressable
              key={item.id}
              style={styles.cardWrapper}
              android_ripple={{
                color: "#f2f2f2",
                foreground: true,
                radius: 50,
                borderless: true,
              }}
              onPress={() =>
                navigation.navigate("Product Detail Page", {
                  productId: item.id,
                })
              }
            >
              <Image
                style={styles.productImage}
                source={{
                  uri: `https://kopiku.up.railway.app/images/${item.images[0].filename}`,
                }}
              />
              <View style={[styles.card, styles.shadowCard]}>
                <View style={styles.text}>
                  <Text style={styles.productTitle}>{item.title}</Text>
                  <Text style={styles.productPrice}>IDR {item.price}</Text>
                </View>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
}
