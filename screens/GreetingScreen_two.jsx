import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SubmitButton } from "../components/SubmitButton";
export function GreetingScreen_two({ navigation }) {
  return (
    <View>
      <Text>GreetingScreen_two</Text>
      <TouchableOpacity
        style={styles.button_container}
        onPress={() => navigation.navigate("Login")}
      >
        <SubmitButton submit={() => navigation.navigate("Login")} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button_container: {
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 50,
    marginRight: 12,
  },
});
