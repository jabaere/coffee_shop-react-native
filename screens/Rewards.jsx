import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import LoyaltyCard from "../components/LoyaltyCard";

export function Rewards() {
  const [loyalty, setLoyalty] = useState({
    total: 8,
    userOwn: 4,
  });

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
          <Text style={styles.user_points}>2750</Text>
        </View>
        <View style={styles.redeem_button}>
          <Text style={styles.redeem_button_input}>Redeem drinks</Text>
        </View>
      </View>
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
});
