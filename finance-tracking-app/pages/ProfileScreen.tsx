import BackgroundDecoration from "@/components/back-ground-decoration";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { SCREEN_HEIGHT } from "@/constants/layout";
import { Colors } from "@/constants/theme";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styleSheet.container}>
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
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingStart: 10,
          }}
        >
          <IconSymbol size={40} name="diamond" color={Colors.dark.icon} />
          <Text style={{ paddingStart: 10 }}>Invite Friends</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingStart: 10,
          }}
        >
          <IconSymbol size={40} name="person" color={Colors.dark.icon} />
          <Text style={{ paddingStart: 10 }}>Account info</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingStart: 10,
          }}
        >
          <IconSymbol size={40} name="person.2" color={Colors.dark.icon} />
          <Text style={{ paddingStart: 10 }}>Personal profile</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingStart: 10,
          }}
        >
          <IconSymbol size={40} name="message" color={Colors.dark.icon} />
          <Text style={{ paddingStart: 10 }}>Message center</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingStart: 10,
          }}
        >
          <IconSymbol
            size={40}
            name="shield.checkerboard"
            color={Colors.dark.icon}
          />
          <Text style={{ paddingStart: 10 }}>Login and security</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingStart: 10,
          }}
        >
          <IconSymbol size={40} name="lock" color={Colors.dark.icon} />
          <Text style={{ paddingStart: 10 }}>Data and privacy</Text>
        </View>
      </View>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
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
