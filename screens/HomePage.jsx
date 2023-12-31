import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import CoffeeCard from "../components/CoffeeCard";
import { coffeeInfo } from "../utils/globalFuntions";
import { AntDesign } from "@expo/vector-icons";
import ShopingCart from "../components/svg/ShopingCart";
import LoyaltyCard from "../components/LoyaltyCard";
import { StatusBar } from "expo-status-bar";
export function HomePage() {
  const navigation = useNavigation();

  // Fetch data from the user's profile.
  const data = useSelector((state) => state.profile);

  // Retrieve the 'name' object from the 'profile' array.
  const userObj = data.filter((item) => item.id === "name");

  //get period of the day
  function getDayPeriod(currentHour) {
    // const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return "morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "afternoon";
    } else if (currentHour >= 18 && currentHour < 21) {
      return "evening";
    } else {
      return "night";
    }
  }

  const [dayPeriod, setDayPeriod] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    const period = getDayPeriod(currentHour);
    setDayPeriod(period);
  }, []);

  //state for loyalty cart
  const [loyalty, setLoyalty] = useState({
    total: 8,
    userOwn: 4,
  });

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <View style={styles.user}>
        <View style={styles.greeting}>
          <Text style={styles.user__greeting}>Good {dayPeriod}</Text>
          <Text style={styles.user__name}>{userObj[0].name}</Text>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity
            onPress={() => {
              /*navigate shopping cart*/
              navigation.navigate("Cart");
            }}
          >
            <ShopingCart size={26} color="transparent" sColor="#001833" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              /*navigate shopping profile*/
              navigation.navigate("Profile");
            }}
          >
            <AntDesign name="user" size={22} color="#001833" />
          </TouchableOpacity>
        </View>
      </View>

      {/* {loyalty card} */}
      <LoyaltyCard userOwn={loyalty.userOwn} total={loyalty.total} />
      {/* <View style={styles.loyalty}>
        <View style={styles.textContainerLoyalty}>
          <Text style={styles.title}>Loyalty card</Text>
          <Text style={styles.title}>
            {loyalty.userOwn} / {loyalty.total}
          </Text>
        </View>
        <View style={styles.glassContainer}>
          {Array.from({ length: 8 }).map((item, index) =>
            //change glass color based API
            index > 3 ? <Glass key={index} /> : <GlassFill key={index} />
          )}
        </View>
      </View> */}
      <View style={styles.bottomContainer}>
        <View style={styles.subContainer}>
          <View>
            <Text style={styles.title}>Choose your coffee</Text>
          </View>

          <View style={styles.cardContainer}>
            {coffeeInfo?.map((coffee, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate("Details", {
                    name: coffee.name,
                    img: coffee.img,
                    price: coffee.price,
                  })
                }
                style={styles.item}
              >
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
  },
  user: {
    height: 100,
    width: 300,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 29,
    alignSelf: "center",
    alignItems: "center",
  },
  greeting: {},
  user__greeting: {
    color: "#D8D8D8",
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },

  user__name: {
    fontFamily: "Poppins_500Medium",
    color: "#001833",
    fontSize: 18,
  },
  icons: {
    flexDirection: "row",
    gap: 20,
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

    flex: 1,
    marginTop: 20,
  },
  subContainer: {
    width: "100%",
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
    width: "100%",

    flexWrap: "wrap",

    gap: 12,
    paddingTop: 10,
    alignSelf: "center",
  },
  item: {
    width: "48%",
  },
});
