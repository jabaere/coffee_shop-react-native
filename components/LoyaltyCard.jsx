import { StyleSheet, Text, View } from "react-native";
import React from "react";

import GlassFillSVG from "./svg/GlassFillSVG";

export default function LoyaltyCard({ userOwn, total }) {
  return (
    <View style={styles.loyalty}>
      <View style={styles.textContainerLoyalty}>
        <Text style={styles.title}>Loyalty card</Text>
        <Text style={styles.title}>
          {userOwn} / {total}
        </Text>
      </View>
      <View style={styles.glassContainer}>
        {Array.from({ length: 8 }).map((item, index) =>
          //change glass color based API
          index > 3 ? (
            <GlassFillSVG color="#D8D8D8" bodyColor="#D8D8D8" key={index} />
          ) : (
            <GlassFillSVG color="#324A59" bodyColor="#E4D5C9" key={index} />
          )
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loyalty: {
    height: 122,
    backgroundColor: "#324A59",
    width: 325,
    borderRadius: 12,
    alignSelf: "center",
  },
  textContainerLoyalty: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignSelf: "center",
    marginVertical: 12,
  },
  title: {
    color: "#D8D8D8",
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },
  textContainerLoyalty: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignSelf: "center",
    marginVertical: 12,
  },
  glassContainer: {
    backgroundColor: "#FFF",
    width: 300,
    height: 61,
    flexDirection: "row",
    alignSelf: "center",
    borderRadius: 12,

    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
