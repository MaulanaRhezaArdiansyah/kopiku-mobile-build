import axios from "axios";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import commonStyle from "../../src/assets/styles/commonStyle";

import styles from "./style";
export default function Profile({ navigation, route }) {
  const { userID } = route.params;
  const [refetch, setRefetch] = useState(false);
  const [userData, setUserData] = useState({
    id: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    username: "",
    image: "",
    gender: "",
    phone: "",
    birthday: "",
    delivery_address: "",
    role: "",
  });

  const URL = `https://cheerful-overalls-fawn.cyclic.app/`;
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`${URL}/api/v1/users/${userID}`);
        const data = await response?.data?.data;
        setUserData(data);
        setRefetch(!refetch);
        // setRefetch(true);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [userID, refetch]);
  // }, [ref]);
  const [history, setHistory] = useState([]);
  // const [refetchHistory, setRefetchHistory] = useState(false);
  useEffect(() => {
    const getHistoryAPI = async () => {
      try {
        const response = await axios.get(`${URL}/api/v1/history/${userID}`);
        const data = await response?.data?.data;
        setHistory(data);
      } catch (error) {
        // alert(error);
        console.log(error);
      }
      // setRefetch(!refetch)
    };
    getHistoryAPI();
    // }, []);
  }, [refetch]);
  // console.log(userData);
  // console.log(refetch);
  return (
    <View style={[commonStyle.px40, styles.container]}>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../src/assets/images/go-back-2.png")} />
        </Pressable>
        <Text style={styles.headerText}>My Profile</Text>
        <Text>{""}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profilePicWrapper}>
          <Image
            source={
              userData?.image
                ? {
                    uri: `https://cheerful-overalls-fawn.cyclic.app/uploads/images/${userData?.image}`,
                  }
                : require("../../src/assets/images/default-avatar.jpg")
            }
            style={styles.profilePic}
          />
        </View>
        <Text
          style={[
            commonStyle.textBrown,
            {
              fontSize: 20,
              fontWeight: "700",
              textAlign: "center",
              marginTop: 10,
              marginBottom: 10,
            },
          ]}
        >
          {userData?.username}
        </Text>
        <Text
          style={[commonStyle.textBrown, { fontSize: 15, textAlign: "center" }]}
        >
          {userData?.email}
        </Text>
        <Text
          style={[commonStyle.textBrown, { fontSize: 15, textAlign: "center" }]}
        >
          {userData?.phone}
        </Text>
        <Text
          style={[
            commonStyle.textBrown,
            { fontSize: 15, textAlign: "center", marginBottom: 20 },
          ]}
        >
          {userData.delivery_address !== "null"
            ? userData.delivery_address
            : "(Empty delivery address)"}
        </Text>
        <View style={[styles.orderHistoryBox]}>
          <View style={styles.orderHistoryText}>
            <Text
              style={[
                commonStyle.textBrown,
                { fontSize: 18, fontWeight: "700" },
              ]}
            >
              Order History
            </Text>
            <Pressable onPress={() => navigation.navigate("History Page")}>
              <Text style={[commonStyle.textBrown, { fontSize: 15 }]}>
                See more
              </Text>
            </Pressable>
          </View>

          {history.length !== 0 ? (
            <ScrollView horizontal>
              {history?.map((item, index) => (
                <Image
                  key={item.history_id}
                  source={
                    item
                      ? {
                          uri: `${URL}/uploads/images/${item.images[0].filename}`,
                        }
                      : require("../../src/assets/images/default-avatar.jpg")
                  }
                  style={styles.historyImage}
                />
              ))}
            </ScrollView>
          ) : (
            <View
              style={{
                height: 120,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "700" }}>
                No history yet
              </Text>
            </View>
          )}
        </View>

        <View style={styles.buttonProfileBox}>
          <Pressable
            style={styles.buttonProfileCard}
            onPress={() =>
              navigation.navigate("Edit Profile Page", {
                ID: userID,
              })
            }
          >
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#6A4029" }}>
              Edit Profile
            </Text>
            <Image
              source={require("../../src/assets/images/arrow-right.png")}
            />
          </Pressable>
          <Pressable style={styles.buttonProfileCard}>
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#6A4029" }}>
              FAQ
            </Text>
            <Image
              source={require("../../src/assets/images/arrow-right.png")}
            />
          </Pressable>
          <Pressable style={styles.buttonProfileCard}>
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#6A4029" }}>
              Help
            </Text>
            <Image
              source={require("../../src/assets/images/arrow-right.png")}
            />
          </Pressable>
        </View>

        <TouchableOpacity
          style={[commonStyle.brownButton, { width: "100%" }]}
          // onPress={() => navigation.navigate("Home Drawer")}
          onPress={() => {
            setRefetch(!refetch);
            ToastAndroid.show("Saving your profile", ToastAndroid.SHORT);
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
            Save
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
