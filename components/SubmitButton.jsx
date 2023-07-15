import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import ArrowRight from "../assets/svg/ArrowRight.svg";
export function SubmitButton({ submit }) {
  return (
    <View style={styles.button_container}>
      <TouchableOpacity onPress={submit}>
        <ArrowRight style={{ width: 24, height: 28, color: "black" }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button_container: {
    width: 64,
    height: 64,
    backgroundColor: "#324A59",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 1000,
  },
});
