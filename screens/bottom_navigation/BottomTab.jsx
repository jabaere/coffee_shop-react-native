import React from "react";
import { Text, View, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomePage } from "../HomePage";
import { Orders } from "../Orders";
import { Rewards } from "../Rewards";
import ShopIcon from "../../components/svg/ShopSVG";
import GiftSVG from "../../components/svg/GiftSVG";
import ListSVG from "../../components/svg/ListSVG";
import Constants from "expo-constants";
const Tab = createBottomTabNavigator();
const androidNavigationBarHeight =
  Constants.platform?.android?.navigationBarHeight || 0;
const BottomTabNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
              <View>{getTabIcon("HomePage", focused)}</View>
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
              <View>{getTabIcon("Rewards", focused)}</View>
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
              <View>{getTabIcon("Orders", focused)}</View>
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
    </SafeAreaView>
  );
};

const getTabIcon = (routeName, focused) => {
  if (routeName === "HomePage") {
    return <ShopIcon color={focused ? "#000" : "#808080"} />; // No icon for HomePage
  } else if (routeName === "Orders") {
    return <ListSVG color={focused ? "#000" : "#808080"} />; // Icon for Orders
  } else if (routeName === "Rewards") {
    return <GiftSVG color={focused ? "#000" : "#808080"} />; // Icon for Rewards
  }

  return "";
};

//

const styles = StyleSheet.create({
  tabNavigatorContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tabBarContainer: {
    borderRadius: 10,
    position: "absolute",
    bottom: androidNavigationBarHeight + 20,
    left: 20,
    right: 20,
    backgroundColor: "#fff",
    elevation: 4,

    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default BottomTabNavigator;
