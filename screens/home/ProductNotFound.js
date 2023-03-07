import { Text, View } from "react-native";
import styles from "./style";

export default function ProductNotFound() {
  return (
    <View style={styles.notFound}>
      <Text style={styles.notFoundText}>
        Oops, the item you are looking for is not yet available!
      </Text>
    </View>
  );
}
