import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//import { StatusBar } from "react-native";
import Constants from "expo-constants";
//screens
import { GreetingScreen } from "./screens/GreetingScreen";
import { Login } from "./screens/Login";
import { SignUp } from "./screens/SignUp";
import { Forgotpassword } from "./screens/Forgotpassword";
import { Verification } from "./screens/Verification";
import { HomePage } from "./screens/HomePage";
import { Cart } from "./screens/Cart";
import { Profile } from "./screens/Profile";
import { OrderSuccess } from "./screens/OrderSuccess";
import { TrackOrder } from "./screens/TrackOrder";
//
import BottomTabNavigator from "./screens/bottom_navigation/BottomTab";
import { Details } from "./screens/Details";
import { AntDesign } from "@expo/vector-icons";
import ShopingCart from "./components/svg/ShopingCart";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { DMSans_500Medium } from "@expo-google-fonts/dm-sans";
import { Provider } from "react-redux";
import store from "./store/store";
import { TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
    DMSans_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle="default"
        showHideTransition="fade"
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GreetingScreen">
          <Stack.Screen
            name="GreetingScreen"
            component={GreetingScreen}
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
          <Stack.Screen
            name="Home"
            component={BottomTabNavigator}
            options={{
              title: "Home",
              headerShown: false,
              headerStyle: {
                borderBottomWidth: 0, // Remove the bottom border
              },
              headerTitleStyle: {
                display: "none", // Hide the header title
              },
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={({ navigation }) => ({
              title: "Details",
              headerStyle: {},
              headerTitleContainerStyle: {
                justifyContent: "space-between", // Center the title and the headerRight component
                flexDirection: "row", // Arrange the title and headerRight component horizontally
                alignItems: "center", // Align items vertically in the container
                width: "100%",
              },
              headerTitleStyle: {
                textAlign: "center", // Center the header title
                flex: 1, // This will make the header title expand to take the remaining space
                fontFamily: "Poppins_500Medium",
              },
              headerRight: () => (
                <TouchableOpacity
                  style={{ marginRight: 25 }}
                  onPress={() => navigation.navigate("Cart")}
                >
                  <ShopingCart size={26} color="transparent" sColor="#001833" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{
              title: "",
              headerStyle: {
                borderBottomWidth: 0,
                elevation: 0,
              },
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              title: "",
              headerStyle: {},
            }}
          />
          <Stack.Screen
            name="order-success"
            component={OrderSuccess}
            options={{
              title: "",
              headerShown: false,
              headerStyle: {
                borderBottomWidth: 0, // Remove the bottom border
              },
              headerTitleStyle: {
                display: "none", // Hide the header title
              },
            }}
          />
          <Stack.Screen
            name="track-order"
            component={TrackOrder}
            options={{
              title: "",
              headerShown: false,
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
    </Provider>
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
