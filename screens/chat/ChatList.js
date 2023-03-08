import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import commonStyle from "../../src/assets/styles/commonStyle";
import { useNavigation } from "@react-navigation/native";
export default function ChatList() {
  const message = [
    {
      id: 1,
      name: "Yola",
      messageContent: "What beans do you use for making cold brew?",
      statusReceive: "yesterday",
    },
    {
      id: 2,
      name: "Dea",
      messageContent: "What beans do you use for making cold brew?",
      statusReceive: "yesterday",
    },
    {
      id: 3,
      name: "Bintang",
      messageContent:
        "What is pinky promise? Is it made from coffee or strawberry?",
      statusReceive: "now",
    },
    {
      id: 4,
      name: "Messi",
      messageContent: "What beans do you use for making cold brew?",
      statusReceive: "yesterday",
    },
  ];
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ height: 300 }}>
      {message.map((c) => (
        <TouchableOpacity
          key={c.id}
          style={[commonStyle.px40, styles.chatBox]}
          onPress={() => navigation.navigate("Chatroom Page")}
        >
          <Image
            style={styles.chatImage}
            source={require("../../src/assets/images/rheza-profile-pic-2.png")}
          />
          <View>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>{c.name}</Text>
            <Text style={styles.message}>{c.messageContent}</Text>
          </View>
          <Text style={styles.messageReceive}>{c.statusReceive}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
