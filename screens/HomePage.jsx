import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import CoffeeCard from "../components/CoffeeCard";
import { coffeeInfo } from "../utils/globalFuntions";
export function HomePage() {
  return (
    <View style={styles.container}>
      <View style={styles.user}></View>
      <View style={styles.loyalty}></View>
      <View style={styles.bottomContainer}>
        <View style={styles.subContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Choose your coffee</Text>
          </View>

          <View style={styles.cardContainer}>
            {coffeeInfo?.map((coffee, index) => (
              <TouchableOpacity key={index}>
                <CoffeeCard name={coffee.name} img={coffee.img} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
    gap: 20,
  },
  user: {
    height: 100,
    backgroundColor: "red",
  },
  loyalty: {
    height: 122,
    backgroundColor: "green",
  },
  bottomContainer: {
    backgroundColor: "#324A59",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    flex: 1,
  },
  subContainer: {
    width: "80%",
    padding: 20,
  },
  title: {
    color: "#D8D8D8",
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },

  textContainer: {},
  cardContainer: {
    width: "80%",
    flexWrap: "wrap",
    gap: 12,
    paddingTop: 10,
  },
});
