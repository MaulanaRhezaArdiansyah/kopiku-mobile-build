import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import styling from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
const styles = styling;
export default function Login() {
  const navigation = useNavigation();
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const [validate, setValidate] = useState({
    error: false,
    message: "",
  });
  const handleLogin = () => {
    axios({
      method: "POST",
      url: `https://cheerful-overalls-fawn.cyclic.app/api/v1/auth/login`,
      data: dataLogin,
    })
      .then((result) => {
        // console.log(result.data.data);
        ToastAndroid.show(`${result.data.message}`, ToastAndroid.SHORT);
        AsyncStorage.setItem("@userData", JSON.stringify(result?.data?.data));
        navigation.navigate("Home Drawer");
      })
      .catch((err) => {
        setValidate({
          error: true,
          message: err.response.data.message,
        });
        ToastAndroid.show(`${validate.message}`, ToastAndroid.SHORT);
      });
  };
  const [isLogged, setIsLogged] = useState({
    alright: false,
    data: {},
  });
  const getDataAuth = async () => {
    try {
      const value = await AsyncStorage.getItem("@userData");
      if (value !== null) {
        setIsLogged({
          alright: true,
          data: JSON.parse(value),
        });
        // navigation.navigate("Home Drawer");
        navigation.goBack();
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
  useEffect(() => {
    getDataAuth();
  }, []);
  // if (isLogged.alright) {
  //   navigation.navigate("Home Drawer");
  //   // navigation.goBack()
  // }
  return (
    <View style={styles.container}>
      <View style={styles.heroLogin}>
        <Image source={require("../../../src/assets/images/login-image.png")} />
        <Text style={styles.textHeroLogin}>Log{"\n"}in</Text>
      </View>
      <View>
        <TextInput
          onChangeText={(text) =>
            setDataLogin({
              ...dataLogin,
              email: text,
            })
          }
          style={styles.inputForm}
          placeholder="Enter your email address"
          keyboardType={"email-address"}
          selectionColor="#9A9A9D"
          cursorColor="#6A4029"
        />
        <TextInput
          style={styles.inputForm}
          onChangeText={(text) =>
            setDataLogin({
              ...dataLogin,
              password: text,
            })
          }
          placeholder="Enter your password"
          secureTextEntry={true}
          selectionColor="#9A9A9D"
          cursorColor="#6A4029"
        />
      </View>
      <Pressable onPress={() => navigation.navigate("Forgot Password")}>
        <View
          style={{ display: "flex", justifyContent: "flex-start", width: 350 }}
        >
          <Text style={styles.textForgotPw}>Forgot password?</Text>
        </View>
      </Pressable>
      <TouchableOpacity onPress={handleLogin}>
        <View style={styles.loginButton}>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>
            Login
          </Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={{ color: "#9A9A9D", fontSize: 16 }}>or login with</Text>
      </View>
      <Pressable
        onPress={() => {
          navigation.goBack();
          // navigation.navigate("Home Drawer");
        }}
      >
        <View style={styles.loginWithGoogle}>
          <Image
            style={{ marginRight: 10 }}
            source={require("../../../src/assets/images/google-login.png")}
          />
          <Text style={{ color: "#000", fontSize: 20, fontWeight: "600" }}>
            Login with Google
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
