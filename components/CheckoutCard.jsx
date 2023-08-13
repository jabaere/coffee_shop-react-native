import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../store/cartSlice";
import DeleteIcon from "./svg/Delete";

export function CheckoutCard({ data }) {
  const { img, name, price, quantity, shot, type, size, ice, id } = data;
  const [pressed, setPressed] = useState(false);
  const dispatch = useDispatch();
  console.log(id);

  const handleCardPress = () => {
    setPressed(!pressed);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.container_without_button,
          { marginLeft: pressed ? -70 : 0 },
        ]}
        onPress={() => handleCardPress()}
      >
        <View>
          <Image source={img} style={{ width: 82, height: 61 }} />
        </View>
        <View style={styles.about}>
          <View>
            <Text style={styles.name}>{name}</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.sub_text}>
                {shot.toLowerCase()} | {ice && "iced"} | {size.toLowerCase()} |{" "}
                {type.toLowerCase()}
              </Text>
            </View>
            <View>
              <Text style={styles.price}>$ {price?.toFixed(2)}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.sub_text}>x{quantity}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.delete_button, { display: pressed ? "flex" : "none" }]}
        onPress={() => dispatch(deleteItem(id))}
      >
        <DeleteIcon />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 15,
    gap: 10,
  },
  container_without_button: {
    borderRadius: 15,
    width: 327,
    height: 96,
    backgroundColor: "#F7F8FB",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 0,
  },
  name: {
    color: "#001833",
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.2,
    fontFamily: "Poppins_500Medium",
  },
  sub_text: {
    color: "#757575",
    fontSize: 10,
    fontFamily: "Poppins_500Medium",
  },
  about: {
    flexDirection: "column",
    gap: 3,
  },
  price: {
    color: "#001833",
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },
  delete_button: {
    width: 48,
    height: 96,
    borderRadius: 15,
    backgroundColor: "#FFE5E5",
    justifyContent: "center",
    alignItems: "center",
    display: "none",
  },
});
