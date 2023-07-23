import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CheckoutCard } from "../components/CheckoutCard";
export function Cart({ route }) {
  // const { quantity, shot, type, size, ice, name } = route.params;
  const data = useSelector((state) => state.orders);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>

      {data?.map((coffee) => (
        <CheckoutCard data={coffee} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    alignItems: "center",
    width: "100%",
    gap: 20,
    paddingVertical: 23,
  },
  title: {
    alignSelf: "center",
    color: "#001833",
    lineHeight: 24,
    fontSize: 20,
    letterSpacing: -0.28,
    fontFamily: "Poppins_500Medium",
    width: "80%",
  },
});
