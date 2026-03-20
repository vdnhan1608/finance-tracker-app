import { IconSymbol } from "@/components/ui/icon-symbol";
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
export default function Statistics() {
  return (
    <View style={styles.container}>
      {/* Screen name and view */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <IconSymbol size={28} name="arrow.backward" color="#000000" />
        <Text style={{ fontSize: 25, textAlign: "center" }}>Statistics</Text>
        <IconSymbol size={28} name="square.and.arrow.down" color="#000000" />
      </View>
      <Button title="Day" color="#000000" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
});
