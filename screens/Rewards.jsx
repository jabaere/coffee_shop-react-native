import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import React, { useState } from "react";
import LoyaltyCard from "../components/LoyaltyCard";
import { useSelector, useDispatch } from "react-redux";
export function Rewards() {
  const [loyalty, setLoyalty] = useState({
    total: 8,
    userOwn: 4,
  });
  const REWARD_COEFFICIENT = 12;
  const orderData = useSelector((state) => state.orderList);
  console.log(orderData);

  const calculatePTS = (coefficient) => {
    //reward coefficient

    const sum = orderData.reduce(
      (accumulator, currentItem) => accumulator + currentItem.quantity,
      0
    );
    console.log(sum);
    return sum * coefficient;
  };
  return (
    <View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.name}>Rewards</Text>
      </View>
      <View style={{ marginTop: 26 }}>
        <LoyaltyCard userOwn={loyalty.userOwn} total={loyalty.total} />
      </View>
      <View style={styles.points_container}>
        <View style={styles.user_points_container}>
          <Text style={styles.points_title}>My Points:</Text>
          <Text style={styles.user_points}>
            {calculatePTS(REWARD_COEFFICIENT)}
          </Text>
        </View>
        <View style={styles.redeem_button}>
          <Text style={styles.redeem_button_input}>Redeem drinks</Text>
        </View>
      </View>
      <View style={{ marginLeft: 20, marginTop: 31 }}>
        <Text style={styles.rewards_title}>History Rewards</Text>
      </View>
      <SafeAreaView>
        <FlatList
          data={orderData}
          renderItem={({ item }) => (
            <View style={styles.rewards_container}>
              <View>
                <Text style={styles.coffe_name}>{item.name}</Text>
                <Text style={styles.timestamp}>{item.timestamp}</Text>
              </View>
              <View>
                <Text style={styles.pts}>+ {+item.quantity * 12} Pts</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          style={{ marginTop: 24, height: 239 }}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  name: {
    color: "#001833",
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: 0.28,
  },
  points_container: {
    marginTop: 16,
    height: 122,
    backgroundColor: "#324A59",
    width: 325,
    borderRadius: 12,
    alignSelf: "center",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  user_points_container: {},
  points_title: {
    color: "#D8D8D8",
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
  user_points: {
    color: "#D8D8D8",
    fontSize: 24,
    fontFamily: "Poppins_500Medium",
  },
  redeem_button: {
    backgroundColor: "rgba(162, 205, 233, 0.19)",
    width: 93,
    height: 30,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  redeem_button_input: {
    color: "#D8D8D8",
    fontSize: 10,
    fontFamily: "Poppins_500Medium",
  },
  rewards_title: {
    color: "#324A59",
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
  rewards_container: {
    paddingVertical: 10,
    flexDirection: "row",
    alignSelf: "center",
    width: 325,
    justifyContent: "space-between",
  },
  coffe_name: {
    color: "#324A59",
    fontSize: 12,
    fontFamily: "Poppins_500Medium",
  },
  timestamp: {
    color: "rgba(50, 74, 89, 0.22)",
    fontSize: 10,
    fontFamily: "Poppins_500Medium",
  },
  pts: {
    color: "#324A59",
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },
});
