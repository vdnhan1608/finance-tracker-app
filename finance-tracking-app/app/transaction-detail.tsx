import { IconSymbol } from "@/components/ui/icon-symbol";
import { SCREEN_WIDTH } from "@/constants/layout";
import { Colors } from "@/constants/theme";
import { Stack } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TransactionDetails() {
  const transactionDetailData = {
    status: "Income",
    from: "Upwork Escrow",
    time: "10:00 AM",
    date: "Feb 30, 2022",
    earnings: "$ 870.00",
    fee: "- $ 20.00",
    total: "$ 850.00",
  };
  const titleValueView = (title: String, value: String) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: Colors.light.icon,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "#000000",
          }}
        >
          {value}
        </Text>
      </View>
    );
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        {/* HEADER */}
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "20%",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: "10%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              console.log("chevron.backward");
            }}
          >
            <IconSymbol
              size={28}
              name="chevron.backward"
              color={Colors.default.text}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, color: Colors.default.text }}>
            Transaction Details
          </Text>
          <TouchableOpacity
            onPress={() => {
              console.log("Press ellipsis");
            }}
          >
            <IconSymbol size={28} name="ellipsis" color={Colors.default.text} />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomSheet}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWK7U1qR8TSAuBf4OEb-SerRUliMZK3OwOeg&s",
            }}
            style={{
              width: 80,
              height: 80,
              alignSelf: "center",
              marginTop: "10%",
              borderRadius: 30,
            }}
          />
          <View
            style={{
              width: 80,
              height: 25,
              alignSelf: "center",
              justifyContent: "center",
              backgroundColor: Colors.default.background,
              borderRadius: 15,
              marginTop: 12,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: Colors.default.text,
                fontSize: 14,
              }}
            >
              Income
            </Text>
          </View>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 24,
              fontWeight: "bold",
              marginTop: 8,
            }}
          >
            $ 850.00
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Transaction details
            </Text>
            <IconSymbol
              size={20}
              name="chevron.up"
              color="#000000"
              style={{ alignSelf: "center" }}
            />
          </View>
          <View
            style={{
              paddingBottom: 20,
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            {titleValueView("Status", transactionDetailData.status)}
            {titleValueView("From", transactionDetailData.from)}
            {titleValueView("Time", transactionDetailData.time)}
            {titleValueView("Date", transactionDetailData.date)}
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: Colors.dark.background,
                marginHorizontal: 20,
                marginTop: 10,
              }}
            />
          </View>
          <View
            style={{
              paddingBottom: 20,
            }}
          >
            {titleValueView("Earnings", transactionDetailData.earnings)}
            {titleValueView("Fee", transactionDetailData.fee)}
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: Colors.dark.background,
                marginHorizontal: 20,
                marginTop: 10,
              }}
            />
          </View>
          {titleValueView("Total", transactionDetailData.total)}

          <TouchableOpacity
            style={{
              marginHorizontal: 40,
              paddingVertical: 11,
              borderWidth: 1,
              borderColor: Colors.default.background,
              alignItems: "center",
              borderRadius: 20,
              marginTop: 40,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: Colors.default.background,
              }}
            >
              Download Receipt
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default.background,
  },
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
