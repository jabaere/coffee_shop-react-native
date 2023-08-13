import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SubmitButton } from "../components/SubmitButton";
import CoffeeMachineSVG from "../components/svg/CoffeeMachineSVG";
export function GreetingScreen_two({ navigation }) {
  return (
    <View>
      {/* {circles} */}
      <View
        style={[
          styles.gray_circle,
          { position: "absolute", top: 230, right: 18 },
        ]}
      />
      <View
        style={[
          styles.gray_circle,
          { position: "absolute", top: 307, left: 47 },
        ]}
      />
      <View style={styles.rose_circle_big} />
      <View style={styles.rose_circle_medium} />
      <View style={styles.rose_circle_small} />
      {/* {circles} */}

      {/* {image container} */}
      <View style={styles.image_container}>
        <CoffeeMachineSVG />
      </View>
      {/* {image container} */}

      {/* {text&button} */}
      <Text style={styles.status_text}>
        Making your days with {"\n"} our coffee.
      </Text>
      <Text style={styles.status_subText}>
        The best grain, the finest roast, the {"\n"} most powerful flavor.
      </Text>
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
    marginTop: 93,
    marginRight: 12,
    width: "90%",
  },
  status_text: {
    color: "#181D2D",
    fontSize: 22,
    fontFamily: "Poppins_500Medium",
    textAlign: "center",
    marginTop: 63,
  },
  status_subText: {
    color: "#AAA",
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    textAlign: "center",
    marginTop: 22,
  },
  image_container: {
    marginTop: 170,
    alignItems: "center",
  },
  gray_circle: {
    width: 31,
    height: 31,
    borderRadius: 100,
    backgroundColor: "#8C9DA8",
  },
  rose_circle_big: {
    width: 22,
    height: 22,
    borderRadius: 100,
    backgroundColor: "#E4D5C9",
    position: "absolute",
    left: 21,
    top: 214,
  },
  rose_circle_medium: {
    width: 17,
    height: 17,
    borderRadius: 100,
    backgroundColor: "#E4D5C9",
    position: "absolute",
    left: 47,
    top: 144,
  },
  rose_circle_small: {
    width: 15,
    height: 15,
    borderRadius: 100,
    backgroundColor: "#E4D5C9",
    position: "absolute",
    right: 72,
    top: 284,
  },
});
