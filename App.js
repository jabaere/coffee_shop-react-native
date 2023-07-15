import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { SignUp } from "./screens/SignUp";
import { Forgotpassword } from "./screens/Forgotpassword";
import { Verification } from "./screens/Verification";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar style="light" backgroundColor={"transparent"} translucent />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen
            name="HomePage"
            component={Home}
            headerShown={false}
            options={{
              title: "",
              headerStyle: {
                height: 0, // Set the header height to 0
              },
              headerTitleStyle: {
                display: "none", // Hide the header title
              },
            }}
            // options={{
            //   title: "", //Set Header Title
            //   // // headerStyle: {
            //   // //   backgroundColor: "#f4511e", //Set Header color
            //   // // },
            //   // headerTintColor: "#fff", //Set Header text color
            //   // headerTitleStyle: {
            //   //   fontWeight: "bold", //Set Header text style
            //   // },
            // }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            headerShown={false}
            options={{
              title: "Login",
              headerStyle: {
                borderBottomWidth: 0,
                //height: 20, // Set the header height to 0
              },
              headerTitleStyle: {
                display: "none", // Hide the header title
              },
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            headerShown={false}
            options={{
              title: "Sign Up",
              headerStyle: {
                borderBottomWidth: 0, // Remove the bottom border
              },
              headerTitleStyle: {
                display: "none", // Hide the header title
              },
            }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={Forgotpassword}
            headerShown={false}
            options={{
              title: "Forgot password",
              headerStyle: {
                borderBottomWidth: 0, // Remove the bottom border
              },
              headerTitleStyle: {
                display: "none", // Hide the header title
              },
            }}
          />
          <Stack.Screen
            name="Verification"
            component={Verification}
            headerShown={false}
            options={{
              title: "Verification",
              headerStyle: {
                borderBottomWidth: 0, // Remove the bottom border
              },
              headerTitleStyle: {
                display: "none", // Hide the header title
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",

    alignItems: "center",
  },
});
