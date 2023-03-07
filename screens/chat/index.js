import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./style";
import commonStyle from "../../src/assets/styles/commonStyle";
import ChatList from "./ChatList";
import StaffList from "./StaffList";
export default function Chat({ navigation }) {
  const headerText = "Chat";

  return (
    <View style={[commonStyle.bgBase, styles.container]}>
      <View style={[commonStyle.px40, styles.navbar]}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../src/assets/images/go-back-2.png")} />
        </Pressable>
        <Text style={styles.headerText}>{headerText}</Text>
        <Text>{""}</Text>
      </View>

      <View style={commonStyle.px40}>
        <View style={[styles.searchBox]}>
          <Image
            style={styles.searchIcon}
            source={require("../../src/assets/images/search.png")}
          />
          <TextInput style={styles.searchInput} placeholder="Search Chat" />
        </View>
      </View>

      <Text style={styles.chatText}>Choose a staff you want to talk with</Text>

      <View style={styles.scrollView}>
        <StaffList />
      </View>

      <View style={styles.messageListContainer}>
        <Text
          style={[
            commonStyle.px40,
            { fontSize: 26, fontWeight: "900", marginBottom: 10 },
          ]}
        >
          Message
        </Text>
        <ChatList />
      </View>
    </View>
  );
}
