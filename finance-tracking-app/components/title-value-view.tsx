import { Colors } from "@/constants/theme";
import { Text, View } from "react-native";

export default function TitleValueView({
  title,
  value,
  titleStyle = {},
  valueStyle = {},
}: {
  title: string;
  value: string | number;
  titleStyle?: object;
  valueStyle?: object;
}) {
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
          ...(titleStyle || {}),
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          color: "#000000",
          ...(valueStyle || {}),
        }}
      >
        {value}
      </Text>
    </View>
  );
}
