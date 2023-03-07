import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import commonStyle from "../../src/assets/styles/commonStyle";
import CustomerChat from "./CustomerChat";
import StaffChat from "./StaffChat";
import styles from "./styles";

export default function Chatroom() {
  const navigation = useNavigation();
  return (
    <View style={[commonStyle.bgBase, styles.container]}>
      <View style={[commonStyle.px40, styles.navbar]}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../src/assets/images/go-back-2.png")} />
        </Pressable>
        <View style={styles.profileInfo}>
          <Image
            style={styles.profileImage}
            source={require("../../src/assets/images/rheza-profile-pic-2.png")}
          />
          <Text style={styles.profileName}>Rheza</Text>
        </View>
        <Text>{""}</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[commonStyle.px40, styles.conversationList]}
      >
        <StaffChat />
        <CustomerChat />
        <CustomerChat />
        <CustomerChat />
        <CustomerChat />
      </ScrollView>
      <View style={commonStyle.px40}>
        <View style={[styles.typeMessageBox]}>
          <TextInput
            style={styles.messageInput}
            placeholder="Type a message..."
          />
          <Pressable style={styles.cameraIconBox}>
            <Image
              style={styles.cameraIcon}
              source={require("../../src/assets/images/chat-camera.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
