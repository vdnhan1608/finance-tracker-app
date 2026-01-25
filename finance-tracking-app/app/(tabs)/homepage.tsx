import Header from "@/components/header";
import { Dimensions, StyleSheet, View } from "react-native";
import TransactionHistory from "@/components/transaction-history/index";
export default function HomePage() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <TransactionHistory></TransactionHistory>
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
