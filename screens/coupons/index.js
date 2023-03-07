import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import styles from "./style";
import commonStyle from "../../src/assets/styles/commonStyle";
export default function Coupons({ navigation }) {
  const headerText = "My Coupons";
  return (
    <View style={[commonStyle.px40, styles.container]}>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../src/assets/images/go-back-2.png")} />
        </Pressable>
        <Text style={styles.headerText}>{headerText}</Text>
        <Text>{""}</Text>
      </View>
    </View>
  );
}
