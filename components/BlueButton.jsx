import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function BlueButton({ width, height, text, icon, fontSize }) {
  return (
    <View style={[styles.container, { with: width, height: height }]}>
      <View style={{ marginRight: 10 }}>{icon}</View>
      <Text style={[styles.text, { fontSize: fontSize }]}>{text}</Text>
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
