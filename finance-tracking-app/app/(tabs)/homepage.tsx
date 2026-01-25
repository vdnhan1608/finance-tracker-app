import Header from "@/components/header";
import {
  Dimensions,
  Modal,
  StyleSheet,
  View,
  Text,
  Pressable,
  Alert,
} from "react-native";
import { useState } from "react";
import TransactionHistory from "@/components/transaction-history/index";
import { Colors } from "@/constants/theme";
export default function HomePage() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Header></Header>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Text style={{ ...styles.modalText, fontSize: 19 }}>
                Total Balance
              </Text>
              <Text style={{ ...styles.modalText, fontSize: 36 }}>
                $ 2,548.00
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={{ ...styles.modalText, fontSize: 19 }}>
                  Income
                </Text>
                <Text style={{ ...styles.modalText, fontSize: 24 }}>
                  $ 1,840.00
                </Text>
              </View>
              <View>
                <Text style={{ ...styles.modalText, fontSize: 19 }}>
                  Expenses
                </Text>
                <Text style={{ ...styles.modalText, fontSize: 24 }}>
                  $ 284.00
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <TransactionHistory></TransactionHistory>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginBottom: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#1B5C58",
    borderRadius: 20,
    padding: 35,
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
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.3,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: Colors.default.text,
  },
});
