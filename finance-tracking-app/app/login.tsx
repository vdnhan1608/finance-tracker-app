import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.bottomContainer}>
        <Text
          style={{
            marginTop: 30,
            fontSize: 36,
            color: Colors.default.background,
            textAlign: "center",
            fontWeight: "500",
          }}
        >
          Spend Smarter{"\n"}Save more
        </Text>
        <TouchableOpacity style={styles.getStartedButton}>
          <Text
            style={{
              textAlign: "center",
              color: "#FFFFFF",
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 17 }}>
          Already have account?{" "}
          <Text
            style={{ color: Colors.default.background }}
            onPress={() => router.push("/(tabs)")}
          >
            Log In
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#EEF8F7",
  },
  bottomContainer: {
    width: "100%",
    height: "40%",
    backgroundColor: "#FFFFFF",
    position: "absolute",
    bottom: 0,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  getStartedButton: {
    width: 358,
    height: 67,
    backgroundColor: Colors.default.background,
    marginTop: 26,
    borderRadius: 60,
    justifyContent: "center",
  },
});
