import { Image, Pressable, Text, TextInput, View } from "react-native";
import styles from "./style";

export default function ForgotPassword({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.textForgot}>
        <Text style={styles.dontWorry}>Don't Worry!</Text>
        <Text style={styles.enterEmail}>
          Enter your email adress to get {"\n"} reset password link
        </Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Image source={require("../../../src/assets/images/forgot-img.png")} />
      </View>
      <View>
        <TextInput style={styles.inputForm}>Enter your email address</TextInput>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 15 }}>Haven’t received any link?</Text>
      </View>
      <Pressable onPress={() => navigation.navigate("Login Page")}>
        <View style={styles.resendLinkButton}>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>
            Resend Link
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
