import Background from "@/components/back-ground";
import Header from "@/components/header";
import TitleValueView from "@/components/title-value-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
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

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Background />
      <Header name="Transaction Details" />
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
          <TitleValueView title="Status" value={transactionDetailData.status} />
          <TitleValueView title="From" value={transactionDetailData.from} />
          <TitleValueView title="Time" value={transactionDetailData.time} />
          <TitleValueView title="Date" value={transactionDetailData.date} />
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
          <TitleValueView
            title="Earnings"
            value={transactionDetailData.earnings}
          />
          <TitleValueView title="Fee" value={transactionDetailData.fee} />
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Colors.dark.background,
              marginHorizontal: 20,
              marginTop: 10,
            }}
          />
        </View>
        <TitleValueView title="Total" value={transactionDetailData.total} />

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
