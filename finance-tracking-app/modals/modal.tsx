import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ModalScreen() {
  return (
    <View style={styles.modalView}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ ...styles.modalText, fontSize: 19, textAlign: "left" }}>
          Total Balance{"\n"}
          <Text style={{ fontSize: 36 }}>$ 2,548.00</Text>
        </Text>

        <TouchableOpacity
          onPress={() => {
            console.log("Press ellipsis");
          }}
        >
          <IconSymbol size={28} name="ellipsis" color={Colors.default.text} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ marginBottom: 10 }}>
          <Text
            style={{
              ...styles.modalText,
              fontSize: 19,
              lineHeight: 30,
              textAlign: "left",
            }}
          >
            Income{"\n"}
            <Text style={{ fontSize: 24 }}>$ 1,840.00</Text>
          </Text>
        </View>
        <View>
          <Text
            style={{
              ...styles.modalText,
              fontSize: 19,
              lineHeight: 30,
              textAlign: "left",
            }}
          >
            Expenses{"\n"}
            <Text style={{ fontSize: 24 }}>$ 284.00</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: Colors.default.text,
  },
  modalView: {
    position: "absolute",
    alignSelf: "center",
    left: 20,
    right: 20,
    top: 130,
    paddingTop: 25,
    backgroundColor: "#1B5C58",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    zIndex: 99,
  },
});
