import { useState } from "react";
import { Image, TextInput, View } from "react-native";
import styles from "./style";
import commonStyle from "../../src/assets/styles/commonStyle";
export default function SearchBox({ setKeyword }) {
  return (
    <View style={commonStyle.px40}>
      <View style={[styles.searchBox]}>
        <Image
          style={styles.searchIcon}
          source={require("../../src/assets/images/search.png")}
        />
        <TextInput
          onChangeText={(text) => setKeyword(text)}
          style={styles.searchInput}
          placeholder="Search"
          selectionColor={"#6A4029"}
        />
      </View>
    </View>
  );
}
