import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import BagIcon from "../components/svg/BagSVG";
import BlueButton from "../components/BlueButton";

export function OrderSuccess({ navigation }) {
  return (
    <View style={styles.container}>
      <BagIcon color="#001833" />
      <Text style={styles.status_text}>Order Success</Text>
      <Text style={styles.status_subText}>
        Your order has been placed successfully. {"\n"}
        For more details, go to my orders.
      </Text>
      <TouchableOpacity
        style={{ width: 315, marginTop: 81 }}
        onPress={() => navigation.navigate("track-order")}
      >
        <BlueButton icon={null} width={315} height={46} text="Track My Order" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  status_text: {
    color: "#181D2D",
    fontSize: 22,
    fontFamily: "Poppins_500Medium",

    marginTop: 32,
  },
  status_subText: {
    color: "#AAA",
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    textAlign: "center",
    marginTop: 22,
    width: "80%",
  },
});
