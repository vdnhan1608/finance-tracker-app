import BackgroundDecoration from "@/components/back-ground-decoration";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/constants/layout";
export default function WalletScreen() {
  return (
    <View>
      <BackgroundDecoration />
      {/* HEADER */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 20,
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
        <Text style={{ color: Colors.default.text }}>Add expenses</Text>
        <TouchableOpacity
          onPress={() => {
            console.log("Press ellipsis");
          }}
        >
          <IconSymbol size={28} name="ellipsis" color={Colors.default.text} />
        </TouchableOpacity>
      </View>
      {/* MIDDLE MODAL */}
      <View style={styleSheet.modal}>
        {/* NAME INPUT */}
        <View style={{ alignSelf: "center", marginTop: "10%" }}>
          <Text style={{ color: "#666666" }}>NAME</Text>

          <View style={styleSheet.input}>
            <View style={styleSheet.inputInformation}>
              <Image
                style={styleSheet.image}
                source={{
                  uri: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
                }}
              ></Image>
              <Text style={{ color: "#666666", marginStart: 20 }}>Netflix</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                console.log("chevron.backward");
              }}
              style={{ paddingEnd: 10 }}
            >
              <IconSymbol size={28} name="chevron.down" color="#666666" />
            </TouchableOpacity>
          </View>
        </View>

        {/* AMOUNT INPUT */}
        <View style={{ alignSelf: "center", marginTop: "10%" }}>
          <Text style={{ color: "#666666" }}>AMOUNT</Text>

          <View style={styleSheet.input}>
            <View style={styleSheet.inputInformation}>
              <Text
                style={{
                  color: "#666666",
                }}
              >
                $ 48.00
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                console.log("chevron.backward");
              }}
            >
              <Text style={{ color: "#666666", paddingEnd: 10 }}>Clear</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* DATE INPUT */}
        <View style={{ alignSelf: "center", marginTop: "10%" }}>
          <Text style={{ color: "#666666" }}>DATE</Text>

          <View style={styleSheet.input}>
            <View style={styleSheet.inputInformation}>
              <Text style={{ color: "#666666" }}>Tue, 22 Feb 2022</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                console.log("chevron.backward");
              }}
              style={{ paddingEnd: 10 }}
            >
              <IconSymbol size={28} name="calendar" color="#666666" />
            </TouchableOpacity>
          </View>
        </View>

        {/* INVOICE INPUT */}
        <View
          style={{
            alignSelf: "center",
            marginTop: "10%",
            width: "90%",
          }}
        >
          <Text style={{ color: "#666666" }}>INVOICE</Text>

          <View
            style={{
              ...styleSheet.input,
              justifyContent: "center",
              width: "100%",
            }}
          >
            <View
              style={{
                ...styleSheet.inputInformation,
                paddingStart: 0,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  console.log("chevron.backward");
                }}
                style={{ paddingEnd: 10 }}
              >
                <IconSymbol size={28} name="plus.circle" color="#666666" />
              </TouchableOpacity>
              <Text style={{ color: "#666666" }}>Add Invoice</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  modal: {
    position: "absolute",
    backgroundColor: "white",
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.8,
    alignSelf: "center",
    borderRadius: 15,
    top: 60,
  },
  input: {
    width: "90%",
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputInformation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingStart: 10,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
});
