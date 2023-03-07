import { Image, Text, View } from "react-native";
import styles from "./styles";
import commonStyle from "../../src/assets/styles/commonStyle";
export default function StaffChat() {
  return (
    <View style={styles.staffChat}>
      <Image
        style={styles.chatBalloonPicStaff}
        source={require("../../src/assets/images/rheza-profile-pic-2.png")}
      />
      <View style={styles.messageContentStaff}>
        <Text style={{ color: "white", lineHeight: 22, fontSize: 15 }}>
          Hey, welcome to Coffee Time! Today is Sunday and you know what? You
          will get a cup of coffee free only at 7 to 9 AM. If you still have
          some questions to ask, let me know. Have a wonderful day!
        </Text>
      </View>
      <Text style={styles.receiveTimeStaff}>12.00 PM</Text>
    </View>
  );
}
