import { View, StyleSheet, Text, Image } from "react-native";
import { Colors, FontSizes } from "@/constants/theme";
export default function TransactionHistory() {
  const transactionHistoryList = [
    {
      id: "1",
      name: "Upwork",
      amount: 850,
      time: "Today",
      urlImage: "",
    },
    {
      id: "2",
      name: "Transfer",
      amount: 850,
      time: "Yesterday",
      urlImage: "",
    },
    {
      id: "3",
      name: "Papal",
      amount: 850,
      time: "Jan 30, 2022",
      urlImage: "",
    },
    {
      id: "4",
      name: "Youtube",
      amount: 850,
      time: "Jan 16, 2022",
      urlImage: "",
    },
    {
      id: "1",
      name: "Upwork",
      amount: 850,
      time: "Today",
      urlImage: "",
    },
    {
      id: "2",
      name: "Transfer",
      amount: 850,
      time: "Yesterday",
      urlImage: "",
    },
    {
      id: "3",
      name: "Papal",
      amount: 850,
      time: "Jan 30, 2022",
      urlImage: "",
    },
    {
      id: "4",
      name: "Youtube",
      amount: 850,
      time: "Jan 16, 2022",
      urlImage: "",
    },
    {
      id: "1",
      name: "Upwork",
      amount: 850,
      time: "Today",
      urlImage: "",
    },
    {
      id: "2",
      name: "Transfer",
      amount: 850,
      time: "Yesterday",
      urlImage: "",
    },
    {
      id: "3",
      name: "Papal",
      amount: 850,
      time: "Jan 30, 2022",
      urlImage: "",
    },
    {
      id: "4",
      name: "Youtube",
      amount: 850,
      time: "Jan 16, 2022",
      urlImage: "",
    },
    {
      id: "1",
      name: "Upwork",
      amount: 850,
      time: "Today",
      urlImage: "",
    },
    {
      id: "2",
      name: "Transfer",
      amount: 850,
      time: "Yesterday",
      urlImage: "",
    },
    {
      id: "3",
      name: "Papal",
      amount: 850,
      time: "Jan 30, 2022",
      urlImage: "",
    },
    {
      id: "4",
      name: "Youtube",
      amount: 850,
      time: "Jan 16, 2022",
      urlImage: "",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 22, fontWeight: "500" }}>
          Transactions History
        </Text>
        <Text style={{ fontSize: FontSizes.normal }}>See all</Text>
      </View>
      <View style={styles.transactionHistoryList}>
        {transactionHistoryList.map((transactionHistory) => {
          return (
            <View style={styles.transactionHistoryUnit}>
              <View style={styles.transactionNameTimeImageContainer}>
                <Image
                  style={styles.image}
                  source={require("@/assets/images/icon.png")}
                ></Image>
                <View style={{ marginLeft: 20 }}>
                  <Text style={{ fontSize: 19, fontWeight: "500" }}>
                    {transactionHistory.name}
                  </Text>
                  <Text style={{ fontSize: 16 }}>
                    {transactionHistory.time}
                  </Text>
                </View>
              </View>
              <Text style={{ fontSize: FontSizes.semi }}>
                $ {transactionHistory.amount}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  transactionHistoryList: {
    width: "100%",
    height: "auto",
  },
  transactionHistoryUnit: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  transactionNameTimeImageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
