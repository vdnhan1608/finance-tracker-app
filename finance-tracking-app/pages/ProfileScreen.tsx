import BackgroundDecoration from "@/components/back-ground-decoration";
import { SCREEN_HEIGHT } from "@/constants/layout";
import { Colors } from "@/constants/theme";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View>
      <BackgroundDecoration />
      <View style={styleSheet.avatarProfile}>
        <Image
          style={styleSheet.image}
          source={{
            uri: "https://e7.pngegg.com/pngimages/643/98/png-clipart-computer-icons-avatar-mover-business-flat-design-corporate-elderly-care-microphone-heroes-thumbnail.png",
          }}
        ></Image>
        <Text>Enjelin Morgeana</Text>
        <Text style={{ color: Colors.default.background }}>
          @enjelin_morgeana
        </Text>
      </View>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  avatarProfile: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    marginTop: SCREEN_HEIGHT * 0.25,
  },
});
