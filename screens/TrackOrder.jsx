import { StyleSheet, Text, View } from "react-native";
import ShopIcon from "../components/svg/ShopSVG";
import DeliveryIcon from "../components/svg/DeliverySVG";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
export function TrackOrder() {
  const [active, setActive] = useState("prep");
  const data = useSelector((state) => state.profile);
  const userObj = data.filter((item) => item.id === "name");
  return (
    <View style={styles.container}>
      <Text>TrackOrder</Text>
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
        <View style={styles.dot_cotaniner}>
          {[1, 2, 3].map((dots, index) => (
            <View
              style={{
                width: 5,
                height: 5,
                borderRadius: 100,

                backgroundColor: "rgba(50, 74, 89, 0.22)",
              }}
              key={index}
            ></View>
          ))}
        </View>
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

    width: "100%",
    elevation: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
});
