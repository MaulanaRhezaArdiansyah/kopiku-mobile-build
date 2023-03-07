import { useState } from "react";
import { Image, TextInput, View } from "react-native";
import styles from "./style";
import commonStyle from "../../src/assets/styles/commonStyle";
export default function SearchBox({ setKeyword }) {
  //   const [keyword, setKeyword] = useState("");
  return (
    <View style={commonStyle.px40}>
      <View style={[styles.searchBox]}>
        <Image
          style={styles.searchIcon}
          source={require("../../src/assets/images/search.png")}
        />
        <TextInput
          // keyboardType="web-search"
          onChangeText={(text) => setKeyword(text)}
          style={styles.searchInput}
          placeholder="Search"
          selectionColor={"#6A4029"}
          // secureTextEntry={true}
          // autoCapitalize={"none"}
        />
      </View>
    </View>
  );
}
