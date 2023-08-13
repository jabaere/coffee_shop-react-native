import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ShopIcon from "../components/svg/ShopSVG";
import DeliveryIcon from "../components/svg/DeliverySVG";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CallSVG from "../components/svg/CallSVG";
import MessageIcon from "../components/svg/MessageSVG";
import BackArrowSVG from "../components/svg/BackArrowSVG";
import AnimatedDots from "../components/AnimatedDots";
//
export function TrackOrder({ navigation }) {
  const [active, setActive] = useState("prep");
  const data = useSelector((state) => state.profile);
  const userObj = data.filter((item) => item.id === "name");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ width: "90%", marginTop: 37, alignSelf: "center" }}
        onPress={() => navigation.navigate("Home")}
      >
        <BackArrowSVG color="#000" />
      </TouchableOpacity>

      <Text
        style={{
          textAlign: "center",
          marginVertical: 150,
        }}
      >
        Here must be map 😊{" "}
      </Text>
      <View style={styles.contact_container}>
        <View
          style={{
            alignItems: "flex-start",
            width: "80%",
            alignSelf: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
            <Image
              source={require("../assets/img/user.jpg")}
              style={styles.user_image}
            />
            <Text style={styles.user_name}>Wu Liuqi</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 12 }}>
            <TouchableOpacity
              style={styles.icons_container}
              onPress={() =>
                navigation.navigate("call", { operatorName: "Wu Liuqi" })
              }
            >
              <CallSVG color="#fff" size={16} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.icons_container}
              onPress={() =>
                navigation.navigate("message", { operatorName: "Wu Liuqi" })
              }
            >
              <MessageIcon color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.tracking_container}>
        <View style={[styles.status_container, { marginTop: 33 }]}>
          <View
            style={
              active == "prep" || active == "sending"
                ? styles.icon_container_active
                : styles.icon_container_default
            }
          >
            <ShopIcon
              color={
                active == "prep" || active == "sending" ? "#fff" : "#324A59"
              }
            />
          </View>
          <View>
            <Text style={styles.status_container_shopName}>
              {userObj[0].name} Coffee Shop
            </Text>
            <Text style={styles.status_container_orderStatus}>
              Preparing your order
            </Text>
          </View>
        </View>
        {/* {dots} */}

        <AnimatedDots />

        {/* {delivery container} */}
        <View style={styles.status_container}>
          <View
            style={
              active == "sending"
                ? styles.icon_container_active
                : styles.icon_container_default
            }
          >
            <DeliveryIcon color={active == "sending" ? "#F7F8FB" : "#324A59"} />
          </View>
          <View>
            <Text style={styles.status_container_shopName}>Sending to you</Text>
            <Text style={styles.status_container_orderStatus}>
              Estimated arrival time 12:30 PM
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tracking_container: {
    position: "absolute",
    bottom: 0,
    height: 206,
    zIndex: 1000,
    width: "100%",
    elevation: 100,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
  status_container: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
    marginTop: 7,
    gap: 16,
  },
  icon_container_active: {
    width: 42,
    height: 42,
    backgroundColor: "#324A59",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  icon_container_default: {
    width: 42,
    height: 42,
    backgroundColor: "#F7F8FB",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  dot_cotaniner: {
    width: "70%",
    alignSelf: "center",
    gap: 7,
    marginTop: 7,
  },
  status_container_shopName: {
    fontSize: 14,
    color: "#324A59",
    fontFamily: "Poppins_500Medium",
  },
  status_container_orderStatus: {
    color: "rgba(0, 24, 51, 0.22)",
    fontSize: 10,
    fontFamily: "Poppins_500Medium",
  },
  contact_container: {
    position: "absolute",
    bottom: 0,
    height: 283,
    backgroundColor: "#324A59",
    width: "100%",
    zIndex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  user_image: {
    borderRadius: 42,
    width: 42,
    height: 42,
    marginVertical: 18,
    flexDirection: "row",
  },
  user_name: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "Poppins_500Medium",
  },
  icons_container: {
    width: 37,
    height: 37,
    borderRadius: 100,
    backgroundColor: "#839DAD",
    alignItems: "center",
    justifyContent: "center",
  },
});
