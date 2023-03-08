import {
  Pressable,
  SafeAreaView,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import styles from "./style";
import commonStyle from "../../src/assets/styles/commonStyle";
import DisplayProduct from "./DisplayProduct";
import { useNavigation, useRoute } from "@react-navigation/native";
import NavbarHome from "./NavbarHome";
import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ScrollTabCategory from "./ScrollTabCategory";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NavbarUnlogged from "./NavbarUnlogged";

export default function HomePage() {
  const navigation = useNavigation();
  const [keyword, setKeyword] = useState("");
  const [refetch, setRefetch] = useState(false);
  const [category, setCategory] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [dataUser, setDataUser] = useState({
    token: "",
    user: {
      email: "",
      id: "",
      image: null,
      role: "",
      username: "",
    },
  });
  const [refetchHome, setRefetchHome] = useState(false);
  const [navbar, setNavbar] = useState();
  useEffect(() => {
    AsyncStorage.getItem("@userData")
      .then((result) => {
        const value = JSON.parse(result);
        setDataUser(value);
        if (dataUser == null) {
          setRefetchHome(false);
          setIsLogged(false);
          setNavbar(<NavbarUnlogged />);
        } else {
          setRefetchHome(!refetchHome);
          setIsLogged(true);
          setNavbar(<NavbarHome />);
        }
      })
      .catch((err) => {
        err;
      });
  }, [refetchHome]);

  return (
    <SafeAreaView style={[commonStyle.bgBase, styles.container]}>
      {navbar}
      <Text style={[commonStyle.px40, styles.hello]}>
        {isLogged ? `Hi, ${dataUser?.user?.username}` : "Hi, Customer"}
      </Text>
      <View style={[commonStyle.px40]}>
        <Text
          style={[styles.title]}
          onPress={() => setRefetchHome(!refetchHome)}
        >
          A good coffee is{"\n"}a good day
        </Text>
      </View>
      <SearchBox setKeyword={setKeyword} />
      <ScrollTabCategory
        setCategory={setCategory}
        setRefetch={setRefetch}
        category={category}
      />
      <View style={[commonStyle.px40, styles.categoryTitle]}>
        <Text style={[commonStyle.textBrown, styles.textCategoryTitle]}>
          {category ? category : "All"}
        </Text>
        <Pressable
          onPress={() =>
            navigation.navigate("See More Page", { category: category })
          }
        >
          <Text style={[commonStyle.textBrown, styles.seeMore]}>See more</Text>
        </Pressable>
      </View>

      <DisplayProduct keyword={keyword} category={category} />
    </SafeAreaView>
  );
}
