import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import HotCoffeeCup from "../components/svg/HotCoffeeCup";
import ColdCoffeeCup from "../components/svg/ColdCoffeeCup";
import SmallCup from "../components/svg/SmallCup";
import MediumCup from "../components/svg/MediumCup";
import BigCup from "../components/svg/BigCup";
import BlueButton from "../components/BlueButton";
export function Details({ route }) {
  const { name, img, price } = route.params;
  const [order_number, setOrder_number] = useState(1);
  const [order_limit, setOrder_limit] = useState(34);

  const [coffee, setCoffee] = useState({
    shot: "SINGLE",
    type: "COLD",
    size: "MEDIUM",
    ice: "THREE",
  });

  const update_order = (operation) => {
    console.log(coffee);
    switch (operation) {
      case "INCREASE":
        order_number <= order_limit && setOrder_number((prev) => prev + 1);
        break;
      case "DECREASE":
        order_number > 1 && setOrder_number((prev) => prev - 1);
        break;
      case "SINGLE":
        setCoffee((prevData) => ({
          ...prevData,
          shot: operation,
        }));
        break;
      case "DOUBLE":
        setCoffee((prevData) => ({
          ...prevData,
          shot: operation,
        }));
        break;
      case "COLD":
        setCoffee((prevData) => ({
          ...prevData,
          type: operation,
        }));
        break;
      case "HOT":
        setCoffee((prevData) => ({
          ...prevData,
          type: operation,
        }));
        break;

      case "SMALL":
        setCoffee((prevData) => ({
          ...prevData,
          size: operation,
        }));
        break;
      case "MEDIUM":
        setCoffee((prevData) => ({
          ...prevData,
          size: operation,
        }));
        break;
      case "BIG":
        setCoffee((prevData) => ({
          ...prevData,
          size: operation,
        }));
        break;
      case "ONE":
        setCoffee((prevData) => ({
          ...prevData,
          ice: operation,
        }));
        break;
      case "TWO":
        setCoffee((prevData) => ({
          ...prevData,
          ice: operation,
        }));
        break;
      case "THREE":
        setCoffee((prevData) => ({
          ...prevData,
          ice: operation,
        }));
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image source={img} style={styles.img} resizeMode="cover" />
      </View>
      {/* {counter container} */}
      <View style={styles.name_container}>
        <View>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.counter_button}>
          <TouchableOpacity onPress={() => update_order("DECREASE")}>
            <Text style={styles.arr}> - </Text>
          </TouchableOpacity>

          <Text style={styles.name}>{order_number}</Text>

          <TouchableOpacity onPress={() => update_order("INCREASE")}>
            <Text style={styles.arr}> + </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* {shot container} */}
      <View style={styles.name_container}>
        <View>
          <Text style={styles.name}>Shot</Text>
        </View>
        <View style={styles.shot_button_container}>
          <View
            style={[
              styles.counter_button,
              {
                borderColor:
                  coffee.shot === "SINGLE"
                    ? "#FF7465"
                    : "rgba(216, 216, 216, 0.40)",
              },
            ]}
          >
            <TouchableOpacity onPress={() => update_order("SINGLE")}>
              <Text style={styles.shot_button_text}> Single </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.counter_button,
              {
                borderColor:
                  coffee.shot === "DOUBLE"
                    ? "#FF7465"
                    : "rgba(216, 216, 216, 0.40)",
              },
            ]}
          >
            <TouchableOpacity onPress={() => update_order("DOUBLE")}>
              <Text style={styles.shot_button_text}> Double </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* type container */}
      <View style={styles.name_container}>
        <View>
          <Text style={styles.name}>Select</Text>
        </View>
        <View style={styles.type_container}>
          <TouchableOpacity onPress={() => update_order("HOT")}>
            <HotCoffeeCup color={coffee.type === "HOT" ? "#FF7465" : "gray"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => update_order("COLD")}>
            <ColdCoffeeCup
              color={coffee.type === "COLD" ? "#FF7465" : "gray"}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* size container */}
      <View style={styles.name_container}>
        <View>
          <Text style={styles.name}>Select</Text>
        </View>
        <View style={styles.type_container}>
          <TouchableOpacity onPress={() => update_order("SMALL")}>
            {/* set the color based on the coffee.size state */}
            <SmallCup color={coffee.size === "SMALL" ? "#FF7465" : "gray"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => update_order("MEDIUM")}>
            {/* set the color based on the coffee.size state */}
            <MediumCup color={coffee.size === "MEDIUM" ? "#FF7465" : "gray"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => update_order("BIG")}>
            {/* set the color based on the coffee.size state */}
            <BigCup color={coffee.size === "BIG" ? "#FF7465" : "gray"} />
          </TouchableOpacity>
        </View>
      </View>
      {/* ice container */}
      <View style={[styles.name_container, { alignItems: "baseline" }]}>
        <View>
          <Text style={styles.name}>Ice</Text>
        </View>
        <View style={styles.type_container}>
          <TouchableOpacity onPress={() => update_order("ONE")}>
            {/* set the color based on the coffee.ice state */}

            <View
              style={[
                styles.ice,
                { borderColor: coffee.ice === "ONE" ? "#FF7465" : "gray" },
              ]}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => update_order("TWO")}
            style={{ flexDirection: "row" }}
          >
            {/* set the color based on the coffee.ice state */}
            <View
              style={[
                styles.ice,
                { borderColor: coffee.ice === "TWO" ? "#FF7465" : "gray" },
              ]}
            ></View>
            <View
              style={[
                styles.ice,
                {
                  borderColor: coffee.ice === "TWO" ? "#FF7465" : "gray",
                  marginVertical: 5,
                },
              ]}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => update_order("THREE")}
            style={{ alignItems: "center" }}
          >
            {/* set the color based on the coffee.ice state */}
            <View
              style={[
                styles.ice,
                { borderColor: coffee.ice === "THREE" ? "#FF7465" : "gray" },
              ]}
            ></View>
            <View style={{ flexDirection: "row" }}>
              <View
                style={[
                  styles.ice,
                  { borderColor: coffee.ice === "THREE" ? "#FF7465" : "gray" },
                ]}
              ></View>
              <View
                style={[
                  styles.ice,
                  { borderColor: coffee.ice === "THREE" ? "#FF7465" : "gray" },
                ]}
              ></View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.total}>
        <View>
          <Text style={styles.total_text}>Total amount</Text>
        </View>
        <View>
          <Text style={styles.total_text}>$3.0</Text>
        </View>
      </View>
      <View style={{ width: "80%", alignSelf: "center" }}>
        <BlueButton width={316} height={46} text="Checkout" icon={null} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    height: 300,
    width: "100%",
    gap: 20,
  },
  image_container: {
    width: 325,
    height: 146,
    backgroundColor: "#F7F8FB",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    margin: 25,
    alignSelf: "center",
  },
  img: {
    width: 172,
    height: 128,
    flexShrink: 0,
  },
  name_container: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
    height: 50,
  },

  shot_button_container: {
    flexDirection: "row",
    gap: 10,
  },
  shot_button_text: {
    fontSize: 12,
    color: "#001833",
    fontFamily: "DMSans_500Medium",
    lineHeight: 20,
    letterSpacing: -0.2,
  },
  name: {
    color: "#001833",
    fontSize: 14,
    fontFamily: "DMSans_500Medium",
  },
  arr: {
    fontSize: 18,
    fontFamily: "DMSans_500Medium",
    color: "#001833",
  },
  counter_button: {
    width: 73,
    height: 29,
    borderRadius: 50,
    borderWidth: 1.7,
    borderColor: "rgba(216, 216, 216, 0.40)",
    justifyContent: "space-around",
    alignItems: "center",
    flexShrink: 0,
    flexDirection: "row",
  },
  type_container: {
    flexDirection: "row",
    gap: 40,
  },
  ice: {
    width: 14,
    height: 14,
    borderRadius: 4,
    borderWidth: 1.7,
  },
  total: {
    width: "80%",
    alignSelf: "center",
    justifyContent: "space-between",

    flexDirection: "row",
  },
  total_text: {
    color: "#001833",
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },
});
