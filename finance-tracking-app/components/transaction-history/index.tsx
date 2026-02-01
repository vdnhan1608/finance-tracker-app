import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { Colors, FontSizes } from "@/constants/theme";
export default function TransactionHistory() {
  const transactionHistoryList = [
    {
      id: "1",
      name: "Upwork",
      amount: "850.00",
      time: "Today",
      urlImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevPoVZohhZQJC3KYgbLP8JDvFe3IbWvuDpw&s",
      isCashIn: true,
    },
    {
      id: "2",
      name: "Transfer",
      amount: "85.00",
      time: "Yesterday",
      urlImage:
        "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-1/605662434_2938825992974529_2495439344650544257_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=V4DGM6u_z-EQ7kNvwEIKWuC&_nc_oc=Adl6rHtr6u2j87iXjtWlib-inai1Vro8kpXumLk0aWpTG-F8A_RURbns1EEBSMzy2Fk&_nc_zt=24&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=F_2IdH4f3NYXC3hN-y9nrA&oh=00_Afv3FHsQgLF10UQjxDXh-Ov0CPOadRnLfh_xefULfVOsgg&oe=69853578",
      isCashIn: false,
    },
    {
      id: "3",
      name: "Papal",
      amount: "1,406.00",
      time: "Jan 30, 2022",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png",
      isCashIn: true,
    },
    {
      id: "4",
      name: "Youtube",
      amount: "11.99",
      time: "Jan 16, 2022",
      urlImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWK7U1qR8TSAuBf4OEb-SerRUliMZK3OwOeg&s",
      isCashIn: false,
    },
    {
      id: "1",
      name: "Upwork",
      amount: "850.00",
      time: "Today",
      urlImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevPoVZohhZQJC3KYgbLP8JDvFe3IbWvuDpw&s",
      isCashIn: true,
    },
    {
      id: "2",
      name: "Transfer",
      amount: "85.00",
      time: "Yesterday",
      urlImage:
        "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-1/605662434_2938825992974529_2495439344650544257_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=V4DGM6u_z-EQ7kNvwEIKWuC&_nc_oc=Adl6rHtr6u2j87iXjtWlib-inai1Vro8kpXumLk0aWpTG-F8A_RURbns1EEBSMzy2Fk&_nc_zt=24&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=F_2IdH4f3NYXC3hN-y9nrA&oh=00_Afv3FHsQgLF10UQjxDXh-Ov0CPOadRnLfh_xefULfVOsgg&oe=69853578",
      isCashIn: false,
    },
    {
      id: "3",
      name: "Papal",
      amount: "1,406.00",
      time: "Jan 30, 2022",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png",
      isCashIn: true,
    },
    {
      id: "4",
      name: "Youtube",
      amount: "11.99",
      time: "Jan 16, 2022",
      urlImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWK7U1qR8TSAuBf4OEb-SerRUliMZK3OwOeg&s",
      isCashIn: false,
    },
  ];
  const displayAmount = (transaction: any) => {
    const prefix = transaction.isCashIn ? "+" : "-";
    return `${prefix} ${transaction.amount} VND`;
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 22, fontWeight: "500" }}>
          Transactions History
        </Text>
        <Text style={{ fontSize: FontSizes.normal }}>See all</Text>
      </View>
      <ScrollView
        style={styles.transactionHistoryList}
        showsVerticalScrollIndicator={false}
      >
        {transactionHistoryList.map((transactionHistory) => {
          return (
            <View style={styles.transactionHistoryUnit}>
              <View style={styles.transactionNameTimeImageContainer}>
                <Image
                  style={styles.image}
                  source={{ uri: transactionHistory.urlImage }}
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
              <Text
                style={{
                  fontSize: FontSizes.semi,
                  color: transactionHistory.isCashIn
                    ? Colors.CASH_IN.text
                    : Colors.CASH_OUT.text,
                  fontWeight: "500",
                }}
              >
                {displayAmount(transactionHistory)}
              </Text>
            </View>
          );
        })}
      </ScrollView>
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
    borderRadius: 10,
  },
  transactionNameTimeImageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
