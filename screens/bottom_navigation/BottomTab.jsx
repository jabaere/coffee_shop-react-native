import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { HomePage } from "../HomePage";
import { Orders } from "../Orders";
import { Rewards } from "../Rewards";
import ShopIcon from "../../components/svg/ShopSVG";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

//
const windowHeight = Dimensions.get("window").height;
const marginVertical = windowHeight * 0.9;

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <View style={styles.tabNavigatorContainer}>
            {getTabIcon(route.name, focused)}
          </View>
        ),
        tabBarStyle: styles.tabBarContainer,
      })}
      initialRouteName="HomePage"
    >
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Text style={{ color: focused ? "red" : "gray" }}>
              {getTabIcon("HomePage", focused)}
            </Text>
          ),
          title: "",
          headerStyle: {
            height: 0, // Set the header height to 0
          },
          headerTitleStyle: {
            display: "none", // Hide the header title
          },
          headerLeft: null,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={Rewards}
        options={{
          tabBarIcon: ({ focused }) => (
            <Text style={{ color: focused ? "black" : "gray" }}>
              {getTabIcon("Rewards", focused)}
            </Text>
          ),
          title: "",
          headerStyle: {
            // height: 0, // Set the header height to 0
          },
          headerTitleStyle: {
            display: "none", // Hide the header title
          },
          headerLeft: null,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({ focused }) => (
            <Text style={{ color: focused ? "black" : "gray" }}>
              {getTabIcon("Orders", focused)}
            </Text>
          ),
          title: "",
          headerStyle: {
            // height: 0, // Set the header height to 0
          },
          //   headerTitleStyle: {
          //     display: "none", // Hide the header title
          //   },
          //   tabBarLabel: "Orders",
          //   headerTitle: "Orders",
          headerLeft: null,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const getTabIcon = (routeName, focused) => {
  if (routeName === "HomePage") {
    return <ShopIcon color={focused ? "#000" : "#808080"} />; // No icon for HomePage
  } else if (routeName === "Orders") {
    return (
      <MaterialCommunityIcons
        name="archive-search-outline"
        size={24}
        color={focused ? "#000" : "#808080"}
      />
    ); // Icon for Orders
  } else if (routeName === "Rewards") {
    return (
      <Ionicons
        name="gift-outline"
        size={24}
        color={focused ? "#000" : "#808080"}
      />
    ); // Icon for Rewards
  }

  return "";
};

//

const styles = StyleSheet.create({
  tabNavigatorContainer: {
    height: 64,
    //padding: 100,
    //width: "100%",
  },
  tabBarContainer: {
    borderRadius: 10,
    overflow: "hidden",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    marginLeft: "auto",
    marginRight: "auto",

    backgroundColor: "#fff",
    elevation: 4,

    padding: 12,
  },
});
// const styles = StyleSheet.create({
//   tabBarIconContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     height: 64,
//     padding: 15,
//     width: "100%",
//   },
//   tabBarContainer: {
//     borderRadius: 10,
//     overflow: "hidden",
//     position: "absolute",
//     bottom: 20,
//     alignSelf: "center",
//     width: "80%",
//     backgroundColor: "#fff",
//     elevation: 4,
//   },
// });

export default BottomTabNavigator;
