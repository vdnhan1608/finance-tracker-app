import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/constants/layout";
import { Colors } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";

export default function ModalScreen() {
  return (
    <View style={styles.modalView}>
      <View>
        <Text style={{ ...styles.modalText, fontSize: 19 }}>Total Balance</Text>
        <Text style={{ ...styles.modalText, fontSize: 36 }}>$ 2,548.00</Text>
      </View>
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View style={{ marginBottom: 10 }}>
          <Text style={{ ...styles.modalText, fontSize: 19 }}>Income</Text>
          <Text style={{ ...styles.modalText, fontSize: 24 }}>$ 1,840.00</Text>
        </View>
        <View>
          <Text style={{ ...styles.modalText, fontSize: 19 }}>Expenses</Text>
          <Text style={{ ...styles.modalText, fontSize: 24 }}>$ 284.00</Text>
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
    marginBottom: 10,
    position: "absolute",

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
    width: SCREEN_WIDTH * 0.4,
    height: SCREEN_HEIGHT * 0.3,
    left: SCREEN_WIDTH * 0.3,
    top: 60,
  },
});
