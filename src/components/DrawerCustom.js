import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
export default function DrawerCustom(props) {
  const navigation = useNavigation();
  const logout = () => {
    AsyncStorage.removeItem("@userData");
    AsyncStorage.removeItem("@cart");
    navigation.navigate("Home Drawer");
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ backgroundColor: "brown", height: 300, width: "100%" }}>
        <Text>Halo</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" />
      <DrawerItem label="Settings" />
      <DrawerItem label="Logout" onPress={logout} />
    </DrawerContentScrollView>
  );
}
