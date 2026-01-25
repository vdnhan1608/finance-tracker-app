import { Colors, FontSizes } from "@/constants/theme";
import { View, StyleSheet, Text, Dimensions } from "react-native";

const HEADER_HEIGHT = 250;

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.information}>
        <Text style={{ ...styles.content, fontSize: FontSizes.normal }}>
          Good afternoon,
        </Text>
        <Text
          style={{
            ...styles.content,
            fontSize: FontSizes.title,
            fontWeight: "500",
          }}
        >
          Vo Duy Nhan
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: "hidden",
    borderBottomStartRadius: 100,
    borderBottomEndRadius: 100,
    backgroundColor: Colors.default.background,
    width: "100%",
  },
  content: {
    paddingBottom: 0.05,
    color: Colors.default.text,
  },
  information: {
    marginTop: Dimensions.get("window").height * 0.01,
    marginLeft: Dimensions.get("window").width * 0.01,
  },
});
