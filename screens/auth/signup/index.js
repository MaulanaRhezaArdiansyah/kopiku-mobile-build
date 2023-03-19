import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import commonStyle from "../../../src/assets/styles/commonStyle";
import styling from "./style";
const styles = styling;
import { API_URL } from "@env";

export default function Signup() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [dataSignup, setDataSignup] = useState({
    email: "",
    password: "",
    username: "",
    phone: "",
  });
  const [validate, setValidate] = useState({
    error: false,
    message: "",
  });
  const handleSignup = () => {
    axios({
      method: "POST",
      url: `https://kopiku.up.railway.app/api/v1/auth/register`,
      data: dataSignup,
    })
      .then((result) => {
        ToastAndroid.show(`${result.data.message}`, ToastAndroid.SHORT);
        navigation.navigate("Login Page");
      })
      .catch((err) => {
        setValidate({
          error: true,
          message: err.response.data.message,
        });
        ToastAndroid.show(`${validate.message}`, ToastAndroid.SHORT);
      });
  };
  return (
    <View style={[commonStyle.bgBase, styles.container]}>
      <View style={styles.image}>
        <Image source={require("../../../src/assets/images/signup-img.png")} />
        <Text style={styles.textSignup}>Sign{"\n"}Up</Text>
      </View>
      <View>
        <TextInput
          style={styles.inputForm}
          placeholder="Enter your email"
          onChangeText={(text) =>
            setDataSignup({
              ...dataSignup,
              email: text,
            })
          }
          keyboardType={"email-address"}
          selectionColor="#9A9A9D"
          cursorColor="#6A4029"
        />
        <TextInput
          style={styles.inputForm}
          placeholder="Enter your password"
          onChangeText={(text) =>
            setDataSignup({
              ...dataSignup,
              password: text,
            })
          }
          secureTextEntry={true}
          selectionColor="#9A9A9D"
          cursorColor="#6A4029"
        />
        <TextInput
          style={styles.inputForm}
          placeholder="Enter your username"
          onChangeText={(text) =>
            setDataSignup({
              ...dataSignup,
              username: text,
            })
          }
          autoCapitalize={"none"}
          selectionColor="#9A9A9D"
          cursorColor="#6A4029"
        />
        <TextInput
          style={styles.inputForm}
          placeholder="Enter your phone number"
          onChangeText={(text) =>
            setDataSignup({
              ...dataSignup,
              phone: text,
            })
          }
          keyboardType="phone-pad"
          selectionColor="#9A9A9D"
          cursorColor="#6A4029"
        />
      </View>
      <Pressable
        style={{
          alignItems: "flex-start",
          paddingHorizontal: 40,
          width: "100%",
        }}
        onPress={() => navigation.navigate("Login Page")}
      >
        <Text style={{ fontSize: 15, color: "#6A4029", textAlign: "left" }}>
          Already have an account?
        </Text>
      </Pressable>
      <TouchableOpacity onPress={handleSignup}>
        <View style={styles.createAccountButton}>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>
            Create Account
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
