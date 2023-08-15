import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";

import BackArrowSVG from "./svg/BackArrowSVG";
export function SubmitButton({ submit }) {
  return (
    <View style={styles.button_container}>
      <TouchableOpacity onPress={submit}>
        <View style={{ transform: [{ rotate: "180deg" }] }}>
          <BackArrowSVG color="white" />
        </View>
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
