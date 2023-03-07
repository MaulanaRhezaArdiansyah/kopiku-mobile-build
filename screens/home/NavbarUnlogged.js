import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import commonStyle from "../../src/assets/styles/commonStyle";
import styles from "./style";
export default function NavbarUnlogged() {
  const healingCuy = useNavigation();
  return (
    <View style={[commonStyle.px40, styles.navbarUnlogged]}>
      <Text style={styles.logo}>Kopiku</Text>
      <TouchableOpacity
        onPress={() => healingCuy.navigate("Login Page")}
        style={styles.loginBtnHome}
      >
        <Text style={styles.textLogin}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
