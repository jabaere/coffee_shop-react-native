import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
//import { StatusBar } from 'expo-status-bar';
import Constants from "expo-constants";
import CoffeSvg from "../components/CoffeSvg";

import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useNavigation } from "@react-navigation/native";
export function GreetingScreen() {
  const navigation = useNavigation();

  //handle login button click
  const handleLoginPress = () => {
    navigation.navigate("Login");
  };

  //handle Sign up button click

  const handleSignUpPress = () => {
    navigation.navigate("SignUp");
  };

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

        <View style={styles.buttons_container}>
          <Text style={styles.button} onPress={handleLoginPress}>
            Log In
          </Text>
          <Text style={styles.button} onPress={handleSignUpPress}>
            Sign Up
          </Text>
        </View>
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
