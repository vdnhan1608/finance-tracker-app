import Background from "@/components/back-ground";
import Header from "@/components/header";
import TitleValueView from "@/components/title-value-view";
import { Colors } from "@/constants/theme";
import { Stack, useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function BillPayment() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Background />
      <Header name="Bill Payment" />
      <View style={styles.bottomSheet}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWK7U1qR8TSAuBf4OEb-SerRUliMZK3OwOeg&s",
          }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 30,
            alignSelf: "center",
            marginTop: 40,
          }}
        />

        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            marginTop: 15,
          }}
        >
          You will pay{" "}
          <Text style={{ color: Colors.default.background, fontWeight: "600" }}>
            Youtube Premium
          </Text>{" "}
          {"\n"}for one month with BCA OneKlik
        </Text>
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

        <TouchableOpacity
          style={{
            position: "absolute",
            backgroundColor: Colors.default.background,
            paddingHorizontal: 110,
            paddingVertical: 11,
            marginHorizontal: 28,
            borderRadius: 30,
            bottom: 0,
            marginBottom: 20,
          }}
          onPress={() => {
            router.push("/bill-payment-success");
          }}
        >
          <Text style={{ fontSize: 18, color: "#FFFFFF", fontWeight: "400" }}>
            Confirm and Pay
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
