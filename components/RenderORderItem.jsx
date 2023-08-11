import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SmallCapSVG from "../components/svg/SmallCapSVG";
import LocationSVG from "../components/svg/LocationSVG";
export default function RenderORderItem({ data, userData }) {
  return (
    <View
      style={{
        marginVertical: 26,
        borderBottomWidth: 1,
        borderBottomColor: "#F4F5F7",
        paddingBottom: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.timestamp}>{data.timestamp}</Text>
        <Text style={styles.price}>$ {data.price.toFixed(2)}</Text>
      </View>
      <View>
        <View style={styles.status_sub_container}>
          <SmallCapSVG color="#324A59" />
          <Text style={styles.status_text}>{data.name}</Text>
        </View>
        <View style={styles.status_sub_container}>
          <LocationSVG color="#324A59" size={14} />
          <Text style={styles.status_text}>{userData.adress}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sub_container: {
    width: "80%",
    alignSelf: "center",
  },
  status_sub_container: {
    flexDirection: "row",
    gap: 11,
    marginBottom: 10,
    alignItems: "center",
  },
  status_text: {
    fontSize: 10,
    color: "#324A59",
    fontFamily: "Poppins_500Medium",
  },
  timestamp: {
    fontSize: 10,
    color: "rgba(50, 74, 89, 0.22)",
    fontFamily: "Poppins_500Medium",
  },
  price: {
    fontSize: 16,
    color: "#324A59",
    fontFamily: "Poppins_500Medium",
  },
});
