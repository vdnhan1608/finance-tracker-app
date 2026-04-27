import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { Stack, useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function BillPayment() {
  const router = useRouter();

  const headerView = () => {
    return (
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
          Bill Payment
        </Text>
        <TouchableOpacity
          onPress={() => {
            console.log("Press ellipsis");
          }}
        >
          <IconSymbol size={28} name="ellipsis" color={Colors.default.text} />
        </TouchableOpacity>
      </View>
    );
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
      <View style={styles.container}></View>
      {headerView()}
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
          {titleValueView("Price", "$ 11.99")}
          {titleValueView("Fee", "$ 1.99")}
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Colors.dark.background,
              marginHorizontal: 20,
              marginTop: 10,
            }}
          />
        </View>
        {titleValueView("Total", "$ 13.98")}

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
