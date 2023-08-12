import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import BlueButton from "./BlueButton";
export default function RedeemCard({ img, name, expirationDate, price }) {
  return (
    <View style={styles.container}>
      {/* {coffe image container} */}
      <View>
        <Image source={img} style={{ width: 82, height: 61 }} />
      </View>
      {/* {coffe image container} */}

      {/* {name and timestamp container} */}
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.timestamp}>Valid until: {expirationDate}</Text>
      </View>
      {/* {name and timestamp container} */}

      {/* {button container} */}
      <View>
        <View style={{ width: 76, height: 32 }}>
          <BlueButton
            height={32}
            icon={null}
            text={`${price} pts`}
            fontSize={10}
          />
        </View>
      </View>
      {/* {button container} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    color: "#324A59",
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
  timestamp: {
    color: "rgba(50, 74, 89, 0.50)",
    fontSize: 10,
    fontFamily: "Poppins_500Medium",
  },
});
