import { Image, Pressable, Text, ToastAndroid, View } from "react-native";
import styles from "./style";
import commonStyle from "../../src/assets/styles/commonStyle";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "@env";

export default function NavbarHome() {
  const navigation = useNavigation();
  const [refetch, setRefetch] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    id: "",
    image: "",
    role: "",
    username: "",
  });
  // useEffect(() => {
  //   AsyncStorage.getItem("@userData")
  //     .then((result) => {
  //       const value = JSON.parse(result);
  //       const valueID = value?.user;
  //       setUserData(valueID);
  //       setRefetch(!refetch);
  //     })
  //     .catch((err) => {
  //       err;
  //     });
  // }, [refetch]);

  const [userID, setUserID] = useState();
  useEffect(() => {
    const getUserID = async () => {
      const data = await AsyncStorage.getItem("@userData");
      const dataJSON = await JSON.parse(data);
      setUserID(dataJSON?.user?.id);
    };
    getUserID();
  }, []);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `https://kopiku.up.railway.app/api/v1/users/${userID}`
        );
        setUserData(response?.data?.data);
        setRefetch(!refetch);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [refetch]);

  const [dataCart, setDataCart] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem("@cart")
      .then((result) => {
        const dataCart = JSON.parse(result);
        setDataCart(dataCart);
        setRefetch(!refetch);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dataCart, refetch]);
  return (
    <View style={[commonStyle.px40, styles.navbar]}>
      <View>
        <Pressable onPress={() => navigation.toggleDrawer()}>
          <Image
            source={require("../../src/assets/images/hamburger-menu.png")}
          />
        </Pressable>
      </View>
      <View style={styles.navbarRight}>
        <Pressable onPress={() => navigation.navigate("Chat Page")}>
          <Image
            style={commonStyle.mr20}
            source={require("../../src/assets/images/chat.png")}
          />
        </Pressable>
        <Pressable
          style={styles.cartItem}
          onPress={() => navigation.navigate("Cart Page")}
        >
          <View style={styles.cartItemBalloon}>
            <Text style={styles.cartItemText}>
              {dataCart ? dataCart.length : "0"}
            </Text>
          </View>
          <Image
            style={commonStyle.mr20}
            source={require("../../src/assets/images/shopping-cart.png")}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("Profile Page", {
              userID: userData.id,
            });
          }}
        >
          <View style={[styles.profilePic]}>
            <Image
              style={commonStyle.imageCircle}
              source={
                userData?.image
                  ? {
                      uri: `https://kopiku.up.railway.app/images/${userData.image}`,
                    }
                  : require("../../src/assets/images/default-avatar.jpg")
              }
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
}
