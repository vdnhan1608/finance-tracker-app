import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors, FontSizes } from "@/constants/theme";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SFSymbols7_0 } from "sf-symbols-typescript";
export default function WalletScreen() {
  const [isPressTransactionsTab, setIsPressTransactionsTab] = useState(false);
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
      id: "5",
      name: "Upwork",
      amount: "850.00",
      time: "Today",
      urlImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevPoVZohhZQJC3KYgbLP8JDvFe3IbWvuDpw&s",
      isCashIn: true,
    },
    {
      id: "6",
      name: "Transfer",
      amount: "85.00",
      time: "Yesterday",
      urlImage:
        "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-1/605662434_2938825992974529_2495439344650544257_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=V4DGM6u_z-EQ7kNvwEIKWuC&_nc_oc=Adl6rHtr6u2j87iXjtWlib-inai1Vro8kpXumLk0aWpTG-F8A_RURbns1EEBSMzy2Fk&_nc_zt=24&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=F_2IdH4f3NYXC3hN-y9nrA&oh=00_Afv3FHsQgLF10UQjxDXh-Ov0CPOadRnLfh_xefULfVOsgg&oe=69853578",
      isCashIn: false,
    },
    {
      id: "7",
      name: "Papal",
      amount: "1,406.00",
      time: "Jan 30, 2022",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png",
      isCashIn: true,
    },
    {
      id: "8",
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

  const miniMenuList = [
    {
      id: 1,
      icon: "circle.badge.plus.fill",
      text: "Add",
    },
    {
      id: 2,
      icon: "grid.circle",
      text: "Pay",
    },
    {
      id: 3,
      icon: "paperplane.fill",
      text: "Send",
    },
  ];

  // renders
  return (
    <View style={styles.container}>
      <View style={styles.bottomSheet}>
        {/* Info */}
        <Text
          style={{
            alignSelf: "center",
            fontSize: 19,
            color: Colors.light.icon,
            paddingTop: "10%",
          }}
        >
          Total Balance
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 36,
            fontWeight: "bold",
            paddingTop: 10,
            paddingBottom: 20,
          }}
        >
          $ 2,548.00
        </Text>

        {/* Mini menu */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginBottom: 30,
          }}
        >
          {miniMenuList.map((item) => (
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              key={item.id}
            >
              <TouchableOpacity
                onPress={() => {
                  console.log("chevron.backward");
                }}
              >
                <IconSymbol
                  size={50}
                  name={item.icon as SFSymbols7_0}
                  color={Colors.default.background}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 17,
                  paddingTop: 10,
                }}
              >
                {item.text}
              </Text>
            </View>
          ))}
        </View>

        {/* Mini tab */}

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "#F4F6F6",
            width: "80%",
            alignSelf: "center",
            height: "8%",
            marginBottom: 20,
            borderRadius: 15,
          }}
        >
          <TouchableOpacity
            style={{
              width: "50%",
              height: "90%",
              borderRadius: 30,
              backgroundColor: isPressTransactionsTab.valueOf()
                ? "#FFFFFF"
                : "#F4F6F6",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setIsPressTransactionsTab(!isPressTransactionsTab.valueOf());
            }}
          >
            <Text
              style={{
                fontSize: 17,
                color: Colors.light.icon,
                fontWeight: "700",
              }}
            >
              Transactions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "50%",
              height: "90%",
              borderRadius: 30,
              backgroundColor: !isPressTransactionsTab.valueOf()
                ? "#FFFFFF"
                : "#F4F6F6",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setIsPressTransactionsTab(!isPressTransactionsTab.valueOf());
            }}
          >
            <Text
              style={{
                fontSize: 17,
                color: Colors.light.icon,
                fontWeight: "700",
              }}
            >
              Upcoming Bills
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.transactionHistoryList}
          showsVerticalScrollIndicator={false}
        >
          {transactionHistoryList.map((transactionHistory) => {
            return (
              <View
                style={styles.transactionHistoryUnit}
                key={transactionHistory.id}
              >
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default.background,
  },
  bottomSheet: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "80%",
    backgroundColor: "#FFFFFF",
    borderStartStartRadius: 20,
    borderEndStartRadius: 20,
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
