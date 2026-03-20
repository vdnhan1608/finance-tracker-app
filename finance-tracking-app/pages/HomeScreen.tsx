import Header from "@/components/header";
import TransactionHistory from "@/components/transaction-history";
import ModalScreen from "@/modals/modal";
import { Dimensions, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <ModalScreen />
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
