import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import CoffeeCard from "../components/CoffeeCard";
import { coffeeInfo } from "../utils/globalFuntions";
import { SimpleLineIcons } from "@expo/vector-icons";
import Glass from "../assets/svg/Glass.svg";
import GlassFill from "../assets/svg/GlassFill.svg";
export function HomePage() {
  return (
    <View style={styles.container}>
      <View style={styles.user}></View>
      <View style={styles.loyalty}>
        <View style={styles.textContainerLoyalty}>
          <Text style={styles.title}>Loyalty card</Text>
          <Text style={styles.title}>4 / 8</Text>
        </View>
        <View style={styles.glassContainer}>
          {Array.from({ length: 8 }).map((item, index) =>
            //change glass color based API
            index > 3 ? <Glass key={index} /> : <GlassFill key={index} />
          )}
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.subContainer}>
          <View>
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
    backgroundColor: "#324A59",
    width: 325,
    borderRadius: 12,
    alignSelf: "center",
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
  cardContainer: {
    width: "80%",
    flexWrap: "wrap",
    gap: 12,
    paddingTop: 10,
  },
});
