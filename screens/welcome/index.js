import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  Text,
  ToastAndroid,
  View,
} from "react-native";

import styling from "./style";
const styles = styling;
export default function Welcome({ navigation }) {
  const [isLogged, setIsLogged] = useState({
    alright: false,
    data: {},
  });

  useEffect(() => {
    const getDataAuth = async () => {
      try {
        const value = await AsyncStorage.getItem("@userData");
        if (value !== null) {
          setIsLogged({
            alright: true,
            data: JSON.parse(value),
          });
          navigation.navigate("Home Drawer");
        } else {
          setIsLogged({
            alright: false,
            data: {},
          });
        }
      } catch (error) {
        ToastAndroid.show(`Something went wrong!`, ToastAndroid.SHORT);
      }
    };
    getDataAuth();
  }, []);

  return (
    <View style={styling.container}>
      <Text style={styles.textWelcome}>Coffee for Everyone</Text>
      <View>
        <Image source={require("../../src/assets/images/welcome-bg-2.png")} />
      </View>
      <Pressable onPress={() => navigation.navigate("Welcome Auth")}>
        <View style={styles.getStartButton}>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>
            Get started
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
