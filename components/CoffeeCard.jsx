import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import React from "react";
import { useFonts, DMSans_500Medium } from "@expo-google-fonts/dm-sans";
//DM Sans

export default function ({ img, name }) {
  let [fontsLoaded] = useFonts({
    DMSans_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Image source={img} style={{ width: 114, height: 85 }} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: 154,
    height: 164,
    backgroundColor: "#F7F8FB",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 12,
  },
  name: {
    color: "#001833",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.2,
    fontFamily: "DMSans_500Medium",
  },
});
