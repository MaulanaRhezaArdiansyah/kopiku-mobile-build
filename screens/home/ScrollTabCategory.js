import { Pressable, ScrollView, Text, View } from "react-native";
import styles from "./style";
import commonStyle from "../../src/assets/styles/commonStyle";
export default function ScrollTabCategory({
  setCategory,
  setRefetch,
  category,
}) {
  return (
    <View style={styles.scrollTabCategory}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Pressable
          onPress={() => {
            setCategory("");
            setRefetch(true);
          }}
        >
          <View style={[styles.tabTextBox1, commonStyle.pl40]}>
            <Text
              style={
                category === "" || undefined
                  ? styles.tabTextActive
                  : styles.tabText
              }
            >
              All You Need
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            setCategory("Coffee");
            setRefetch(true);
          }}
        >
          <View style={styles.tabTextBox}>
            <Text
              style={
                category === "Coffee" ? styles.tabTextActive : styles.tabText
              }
            >
              Coffee
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            setCategory("Non");
            setRefetch(true);
          }}
        >
          <View style={styles.tabTextBox}>
            <Text
              style={category === "Non" ? styles.tabTextActive : styles.tabText}
            >
              Non-coffee
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            setCategory("Foods");
            setRefetch(true);
          }}
        >
          <View style={styles.tabTextBox}>
            <Text
              style={
                category === "Foods" ? styles.tabTextActive : styles.tabText
              }
            >
              Foods
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            setCategory("Add on");
            setRefetch(true);
          }}
        >
          <View style={styles.tabTextBox}>
            <Text
              style={
                category === "Add on" ? styles.tabTextActive : styles.tabText
              }
            >
              Add-on
            </Text>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
}
