import { Colors } from "@/constants/theme";
import { StyleSheet, View } from "react-native";

export default function Background() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default.background,
  },
});
