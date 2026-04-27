import { Colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { IconSymbol } from "./ui/icon-symbol";

export default function Header(props: { name: String }) {
  const router = useRouter();

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
          router.back();
        }}
      >
        <IconSymbol
          size={28}
          name="chevron.backward"
          color={Colors.default.text}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 18, color: Colors.default.text }}>
        {props.name}
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
}
