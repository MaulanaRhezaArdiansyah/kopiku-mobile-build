import { Image, Text, View } from "react-native";
import styles from "./styles";
import commonStyle from "../../src/assets/styles/commonStyle";

export default function CustomerChat() {
  return (
    <View style={styles.customerChat}>
      <Image
        style={styles.chatBalloonPicCustomer}
        source={require("../../src/assets/images/rheza-profile-pic-2.png")}
      />
      <View style={styles.messageContentCustomer}>
        <Text style={{ color: "#000", lineHeight: 22, fontSize: 15 }}>
          Hey, what beans do you use for making cold brew? Can I request the
          beans?
        </Text>
      </View>
      <Text style={styles.receiveTimeCustomer}>12.00 PM</Text>
    </View>
  );
}
