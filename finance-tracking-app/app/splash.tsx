import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>MONO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.default.background,
    justifyContent: "center",
  },
  appName: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
  },
});
