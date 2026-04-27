import Background from "@/components/back-ground";
import Header from "@/components/header";
import TitleValueView from "@/components/title-value-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { Stack } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function BillPaymentSuccess() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Background />
      <Header name="Bill Payment" />
      <View style={styles.bottomSheet}>
        <IconSymbol
          size={50}
          name="checkmark.circle"
          color={Colors.default.background}
          style={{ marginTop: 25, alignSelf: "center" }}
        />

        <Text
          style={{
            fontSize: 22,
            color: Colors.default.background,
            fontWeight: "500",
            marginTop: 15,
            alignSelf: "center",
          }}
        >
          Payment Successfully
        </Text>
        <Text style={{ fontSize: 16, alignSelf: "center" }}>
          Youtube Premium
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            paddingHorizontal: 30,
            marginTop: 40,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Transaction details
          </Text>
          <IconSymbol size={20} name="chevron.up" color="#000000" />
        </View>
        <TitleValueView title="Payment method" value="Debit Card" />
        <TitleValueView
          title="Status"
          value="Completed"
          valueStyle={{ color: Colors.default.background, fontWeight: "800" }}
        />
        <TitleValueView title="Time" value="08:15 AM" />
        <TitleValueView title="Date" value="Feb 28, 2022" />
        <TitleValueView title="Transaction ID" value="2092913832472.." />
        <TitleValueView title="Price" value="$ 11.99" />
        <TitleValueView title="Fee" value="- $ 1.99" />
        <TitleValueView title="Total" value="$ 13.98" />
      </View>
      <TouchableOpacity
        style={{
          position: "absolute",
          backgroundColor: Colors.light.background,
          paddingHorizontal: 110,
          paddingVertical: 11,
          alignSelf: "center",
          borderRadius: 30,
          borderWidth: 2,
          borderColor: Colors.default.background,
          bottom: 0,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: Colors.default.background,
            fontWeight: "800",
          }}
        >
          Share receipt
        </Text>
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  bottomSheet: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "80%",
    backgroundColor: "#FFFFFF",
    borderStartStartRadius: 20,
    borderEndStartRadius: 20,
  },
});
