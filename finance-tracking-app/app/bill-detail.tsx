import Background from "@/components/back-ground";
import Header from "@/components/header";
import TitleValueView from "@/components/title-value-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { Stack, useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function BillDetail() {
  const router = useRouter();

  /** Function open bill payment */
  const openBillPayment = () => {
    router.push("/bill-payment");
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Background />
      <Header name="Bill Detail" />
      <View style={styles.bottomSheet}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: 30,
          }}
        >
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWK7U1qR8TSAuBf4OEb-SerRUliMZK3OwOeg&s",
            }}
            style={{
              width: 80,
              height: 80,
              borderRadius: 30,
            }}
          />
          <View
            style={{
              flexDirection: "column",
              padding: 17,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Youtube Premium
            </Text>
            <Text style={{ fontSize: 14, color: Colors.light.icon }}>
              Feb 28, 2022
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingBottom: 20,
            marginTop: 20,
          }}
        >
          <TitleValueView title="Price" value="$ 11.99" />
          <TitleValueView title="Fee" value="$ 1.99" />
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Colors.dark.background,
              marginHorizontal: 20,
              marginTop: 10,
            }}
          />
        </View>
        <TitleValueView title="Total" value="$ 13.98" />

        <Text style={{ fontSize: 18, fontWeight: "500", padding: 20 }}>
          Select payment method
        </Text>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            backgroundColor: "#EDF4F3",
            paddingHorizontal: 20,
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 35,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 15,
            }}
          >
            <IconSymbol
              size={60}
              name="creditcard"
              color={Colors.default.background}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: Colors.default.background,
                marginStart: 15,
              }}
            >
              Debit Card
            </Text>
          </View>
          <IconSymbol
            size={20}
            name="circle"
            color={Colors.default.background}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            backgroundColor: "#EDF4F3",
            paddingHorizontal: 20,
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 35,
            borderRadius: 20,
            marginTop: 9,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 15,
            }}
          >
            <IconSymbol
              size={60}
              name="creditcard"
              color={Colors.default.background}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: Colors.default.background,
                marginStart: 15,
              }}
            >
              Paypal
            </Text>
          </View>
          <IconSymbol
            size={20}
            name="circle"
            color={Colors.default.background}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            backgroundColor: Colors.default.background,
            paddingVertical: 20,
            marginHorizontal: 35,
            borderRadius: 50,
            marginTop: 30,
          }}
          onPress={() => {
            openBillPayment();
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              color: "#FFFFFF",
              textAlign: "center",
              width: "100%",
            }}
          >
            Pay now
          </Text>
        </TouchableOpacity>
      </View>
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
