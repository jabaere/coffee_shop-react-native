import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import RedeemCard from "../components/RedeemCard";
export function RedeemScreen() {
  const redeemData = useSelector((state) => state.redeemList);
  return (
    <View style={styles.container}>
      <FlatList
        data={redeemData}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 37 }}>
            <RedeemCard
              img={item.image}
              name={item.name}
              expirationDate={item.expirationDate}
              price={item.priceInPTS}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        style={{ marginBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 35,
    paddingHorizontal: 20,
  },
});
