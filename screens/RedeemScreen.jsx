import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RedeemCard from "../components/RedeemCard";
export function RedeemScreen() {
  const redeemData = useSelector((state) => state.redeemList);
  return (
    <View
      style={{
        marginTop: 35,
        width: "95%",
        alignSelf: "center",
        rowGap: 37,
      }}
    >
      {redeemData.map((item) => (
        <RedeemCard
          img={item.image}
          name={item.name}
          expirationDate={item.expirationDate}
          price={item.priceInPTS}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
