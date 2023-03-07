import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import styles from "./style";
export default function StaffList() {
  const staff = [
    {
      id: 1,
      // image
      staffName: "Yola",
    },
    {
      id: 2,
      // image
      staffName: "Dea",
    },
    {
      id: 3,
      // image
      staffName: "Bintang",
    },
    {
      id: 4,
      // image
      staffName: "Messi",
    },
  ];
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.chatBalloonRow}
    >
      {staff.map((i) => (
        <TouchableOpacity
          key={i.id}
          style={styles.chatBalloonWrap}
          onPress={() => navigation.navigate("Chatroom Page")}
        >
          <Image
            style={styles.chatPic}
            source={require("../../src/assets/images/rheza-profile-pic-2.png")}
          />
          <Text style={styles.chatName}>{i.staffName}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
