import { ImageBackground, Text, View, Image, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styling from "./style";
const styles = styling;
export default function WelcomeAuth({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textWelcome}>Welcome!</Text>
        <Text style={styles.subTextWelcome}>
          Get a cup of coffee for free every sunday morning
        </Text>
      </View>
      <View>
        <Image
          style={styles.image}
          source={require("../../../src/assets/images/welcome-auth-img.png")}
        />
      </View>
      <View>
        <Pressable onPress={() => navigation.navigate("Signup Page")}>
          <View style={styles.createAccountButton}>
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>
              Create New Account
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Login Page")}>
          <View style={styles.loginButton}>
            <Text style={{ color: "#000", fontSize: 20, fontWeight: "600" }}>
              Login
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
