import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import BlueButton from "./BlueButton";
export default function RedeemCard({ img, name, expirationDate, price }) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={img} style={{ width: 82, height: 61 }} />
      </View>
      <View>
        <Text>{name}</Text>
        <Text>Valid until: {expirationDate}</Text>
      </View>
      <View>
        <BlueButton width={76} height={32} icon={null} text={`${price} pts`} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
