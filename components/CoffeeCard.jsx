import { Text, View, StyleSheet, Image } from "react-native";
import React from "react";

export default function ({ img, name }) {
  return (
    <View style={styles.container}>
      <Image source={img} style={{ width: 114, height: 85 }} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: 154,
    height: 164,
    backgroundColor: "#F7F8FB",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 12,
  },
  name: {
    color: "#001833",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.2,
    fontFamily: "DMSans_500Medium",
  },
});
