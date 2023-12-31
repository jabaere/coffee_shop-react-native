import { Text, View, StyleSheet, ImageBackground } from "react-native";
import React, { useEffect } from "react";
//import { StatusBar } from 'expo-status-bar';
import CoffeSvg from "../components/svg/CoffeSvg";

import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export function GreetingScreen({ navigation }) {
  //redirect to login page after 3.5sec
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("greetingScreenTWo");
    }, 3500);

    return clearTimeout();
  }, []);

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/home.jpg")}
        objectFit="cover"
        resizeMode="cover"
        style={styles.image}
      >
        <CoffeSvg style={styles.logo} />

        <Text style={styles.paragraph}>Ordinary Coffe House.</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",

    alignItems: "center",
    width: "100%",
  },
  paragraph: {
    margin: 24,
    fontSize: 24,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 8, height: 8 },
    textShadowRadius: 10,
    textAlign: "center",
    color: "#FFFAF6",
    fontFamily: "Poppins_500Medium",
    width: "100%",
  },
  logo: {
    height: 132,
    width: 121,
    color: "white",

    textAlign: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  buttons_container: {
    justifyContent: "center",
    width: "100%",
    alignItems: "center",

    // flexDirection: "row",
  },
  button: {
    color: "#FFFAF6",
    fontSize: 20,
    width: 140,
    margin: 5,
    backgroundColor: "rgba(255, 0, 0, 0.3)",
    padding: 10,
    borderRadius: 4,

    textAlign: "center",
  },
});
