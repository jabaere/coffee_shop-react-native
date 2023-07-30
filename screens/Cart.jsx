import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CheckoutCard } from "../components/CheckoutCard";
import BlueButton from "../components/BlueButton";
import { useNavigation } from "@react-navigation/native";
import ConfirmationModal from "../components/modals/ConfirmationModal";
import ShopingCart from "../components/svg/ShopingCart";
export function Cart({ route }) {
  // const { quantity, shot, type, size, ice, name } = route.params;
  const navigation = useNavigation();
  const data = useSelector((state) => state.orders);
  const userData = useSelector((state) => state.profile);
  const sum = data.reduce(
    (accumulator, currentItem) => accumulator + currentItem.price,
    0
  );
  const [user, setUser] = useState({
    name: "",
    adress: "",
  });
  const [ordered, setORdered] = useState(false);

  useEffect(() => {
    const userObj = userData.filter((item) => item.id === "name");
    //
    const userAdress = userData.filter((item) => item.id === "adress");
    console.log(userAdress);
    if (userObj) {
      setUser({
        name: userObj[0].name,
        adress: userAdress[0].adress,
      });
    }
  }, [userData]);
  //change headerStyle depend orderClick
  useEffect(() => {
    navigation.setOptions({
      title: "",
      headerStyle: {
        backgroundColor: ordered ? "rgba(29, 35, 53, 0.51)" : "#fff",

        borderBottomWidth: 0,
        elevation: 0,
      },
    });
  }, [ordered]);
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: ordered ? "rgba(29, 35, 53, 0.51)" : "#FFFFFF" },
      ]}
    >
      <Text style={styles.title}>My Cart</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{ paddingVertical: 10 }}>
            <CheckoutCard data={item} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        style={{ gap: 20 }}
      />
      <View style={styles.bottom_container}>
        <View>
          <Text style={styles.total_placeholder}>Total Price</Text>
          <Text style={styles.total_price}>${sum.toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          style={{ width: 162 }}
          onPress={() => setORdered(true)}
        >
          <BlueButton
            width={162}
            height={51}
            text="Checkout"
            icon={<ShopingCart color="transparent" sColor="#fff" />}
          />
        </TouchableOpacity>
      </View>
      {ordered ? (
        <ConfirmationModal name={user.name} adress={user.adress} />
      ) : null}
    </SafeAreaView>
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
  total_placeholder: {
    fontSize: 12,
    fontFamily: "Poppins_500Medium",
    color: "rgba(0, 24, 51, 0.22)",
  },
  bottom_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  total_price: {
    color: "#001833",
    fontSize: 22,
    fontFamily: "Poppins_500Medium",
  },
});
