import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function BlueButton({ width, height, text, icon }) {
  return (
    <View
      style={[
        styles.container,
        { with: width, height: height, alignItems: "center" },
      ]}
    >
      <Text style={{ width: 24, height: 24 }}>{icon}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    backgroundColor: "#324A59",
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    lineHeight: 22,
  },
});
