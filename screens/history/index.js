import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Pressable,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import commonStyle from "../../src/assets/styles/commonStyle";
import styles from "./style";
import Icon from "@expo/vector-icons/Ionicons";

export default function History({ navigation }) {
  const history = [
    {
      id: 1,
      productTitle: "Mbahman Coffee",
      productPrice: "12000",
      deliveryMethod: "Door delivery",
      detailStatus: "3 PM",
    },
    {
      id: 2,
      productTitle: "Cappucino",
      productPrice: "20000",
      deliveryMethod: "Pick up at store",
      detailStatus: "April 27th 2023, 8 AM",
    },
    {
      id: 3,
      productTitle: "Hazelnut Latte",
      productPrice: "15000",
      deliveryMethod: "Dine in",
      detailStatus: "Monday at 3 PM",
    },
    {
      id: 4,
      productTitle: "Hazelnut Latte",
      productPrice: "15000",
      deliveryMethod: "Dine in",
      detailStatus: "Monday at 3 PM",
    },
  ];
  const URL = `https://cheerful-overalls-fawn.cyclic.app/`;
  const [userID, setUserID] = useState("");
  const [refetch, setRefetch] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getUserID = async () => {
    const response = await AsyncStorage.getItem("@userData");
    const dataJSON = JSON.parse(response);
    const data = dataJSON?.user?.id;
    setUserID(data);
    setRefetch(!refetch);
  };
  useEffect(() => {
    getUserID();
  }, []);

  const [historyy, setHistoryy] = useState([]);
  useEffect(() => {
    const getHistoryAPI = async () => {
      const response = await axios.get(`${URL}/api/v1/history/${userID}`);
      const data = response?.data?.data;
      setHistoryy(data);
      setIsLoading(false);
    };
    getHistoryAPI();
  }, [refetch]);

  const handleDelete = (user_id, history_id) => {
    Alert.alert("", "Are you sure to delete the selected items?", [
      { text: "Cancel" },
      {
        text: "Delete",
        onPress: () =>
          axios
            .delete(`${URL}/api/v1/history/${user_id}/${history_id}`)
            .then((result) => {
              const message = result.data.message;
              setRefetch(!refetch);
              ToastAndroid.show(`${message} !`, ToastAndroid.SHORT);
            })
            .catch((err) => {
              ("asd");
              err;
            }),
      },
    ]);
  };

  return (
    <View style={[commonStyle.px40, styles.container]}>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../src/assets/images/go-back-2.png")} />
        </Pressable>
        <Text style={styles.headerText}>History</Text>
        <Text>{""}</Text>
      </View>

      <View>
        <Text style={styles.orderHistoryTitle}>Order History</Text>
      </View>

      <View style={styles.swipe}>
        <Image
          style={styles.fingerSwipe}
          source={require("../../src/assets/images/finger-swipe.png")}
        />
        <Text style={{ fontSize: 15 }}>swipe left on item to delete</Text>
      </View>
      {historyy.length !== 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={historyy}
          renderItem={({ item }) => {
            return (
              <View key={item.history_id} style={styles.historyCard}>
                <Image
                  style={styles.productImage}
                  source={
                    item
                      ? {
                          uri: `${URL}/uploads/images/${item.images[0].filename}`,
                        }
                      : require("../../src/assets/images/default-avatar.jpg")
                  }
                />
                <View style={styles.productInfoCart}>
                  <Text style={styles.productTitle}>
                    {item ? item?.product_title : `---`}
                  </Text>
                  <Text style={[commonStyle.textBrown, styles.productPrice]}>
                    IDR {item?.product_price}{" "}
                    <Text style={styles.orderItem}>
                      x{item ? item.order_item : `---`}
                    </Text>
                  </Text>
                  <View style={{ flexDirection: "row", width: 200 }}>
                    <Text
                      style={[
                        styles.productStatus,
                        { flexWrap: "wrap", flex: 1 },
                      ]}
                    >
                      Waiting for delivery (will arrive at 3 PM)
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => handleDelete(item.user_id, item.history_id)}
                  style={{
                    width: 45,
                    height: 45,
                    backgroundColor: "#6A4029",
                    borderRadius: 45,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    right: 5,
                    bottom: -15,
                  }}
                >
                  <Icon name="trash-outline" size={25} color="white" />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      ) : (
        <View
          style={{
            marginTop: 100,
            width: "100%",
            height: 200,
            backgroundColor: "#9f9f9f",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
        >
          <Text style={{ fontSize: 32, fontWeight: "700" }}>
            No history yet
          </Text>
        </View>
      )}
    </View>
  );
}
