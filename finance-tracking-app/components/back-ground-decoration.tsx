/** THIS IS THE COMMON COMPONENT FOR HEADER BACKGROUD */
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/constants/layout";
import { Colors } from "@/constants/theme";
import { StyleSheet, View } from "react-native";

const HEADER_HEIGHT = SCREEN_HEIGHT * 0.3;
export default function BackgroundDecoration() {
  return <View style={styleSheet.header}></View>;
}

const CURL_DEGREE = "15%";
const styleSheet = StyleSheet.create({
  header: {
    position: "absolute",
    height: HEADER_HEIGHT,
    overflow: "hidden",
    borderBottomStartRadius: CURL_DEGREE,
    borderBottomEndRadius: CURL_DEGREE,
    backgroundColor: Colors.default.background,
    width: "100%",
    zIndex: 0,
  },
});
