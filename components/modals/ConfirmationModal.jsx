import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProperty } from "../../store/profileSlice";
import EditSVG from "../svg/EditSVG";
import { MaterialIcons } from "@expo/vector-icons";
import DeliveryIcon from "../svg/DeliverySVG";
import { RadioButton } from "../RadioButton";
import BlueButton from "../BlueButton";
import Wallet from "../svg/Wallet";
import { useNavigation } from "@react-navigation/native";
import { addToOrderList } from "../../store/orderSlice";
import { clearCard } from "../../store/cartSlice";
export default function ConfirmationModal({ name, adress, totalPrice }) {
  const dispatch = useDispatch();
  const [newAdress, setNewAdress] = useState(adress);
  const [edit, setEdit] = useState(false);
  const tax = (totalPrice * 10) / 100;
  const deliveryFee = 2;
  const total = totalPrice + tax + deliveryFee;
  const [selectedOption, setSelectedOption] = useState("Online Banking");
  const navigation = useNavigation();

  //get cart data
  const cartData = useSelector((state) => state.cart);
  const paymentOptions = [
    {
      method: "Online Banking",
      bank: "sharkbank (one-time)",
      icon: [require("../../assets/img/fpx.png")],
    },
    {
      method: "Credit Card",
      bank: "2540 xxxx xxxx 2648",
      icon: [
        require("../../assets/img/visa.png"),
        require("../../assets/img/mastercard.png"),
      ],
    },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const renderCardContent = () => {
    if (edit) {
      // Render TextInput in edit mode
      return (
        <TextInput
          style={styles.input}
          onChangeText={(value) => setNewAdress(value)}
          value={newAdress}
          autoFocus
        />
      );
    } else {
      // Render Text in default
      console.log(adress + "  dasda");
      console.log(name + "  name");
      return <Text style={styles.user_adress}>{newAdress}</Text>;
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 35 }}>
        <Text style={styles.title}>Order Confirmation</Text>
      </View>
      <View style={styles.delivery_box}>
        <Text style={styles.delivery_placeholder}>Delivery Address</Text>
        <View style={styles.card}>
          <View style={styles.img_container}>
            {<DeliveryIcon color="#000" />}
          </View>
          <View style={styles.name_container}>
            <Text style={styles.name}>{name}</Text>
            {renderCardContent()}
          </View>

          {!edit ? (
            <TouchableOpacity
              style={styles.edit_icon}
              onPress={() => setEdit(true)}
            >
              <EditSVG color="#324A59" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.edit_icon}
              onPress={() => {
                setEdit(""); //set the edit state to empty to exit edit mode
                dispatch(
                  updateProperty({
                    id: "adress",
                    property: "adress",
                    value: newAdress,
                  })
                ); // Dispatch the updateProperty action to update the state
              }}
            >
              <MaterialIcons name="done" size={24} color="black" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.radio_container}>
        <RadioButton
          options={paymentOptions}
          selectedOption={selectedOption}
          onSelect={handleSelect}
        />
      </View>
      <View style={styles.price_details}>
        <View style={styles.subtotal}>
          <Text style={styles.subtotal_title}>Price</Text>
          <Text style={styles.subtotal_title}>${totalPrice.toFixed(2)}</Text>
        </View>
        <View style={styles.subtotal}>
          <Text style={styles.subtotal_title}>Tax(10%)</Text>
          <Text style={styles.subtotal_title}>${tax.toFixed(2)}</Text>
        </View>
        <View style={styles.subtotal}>
          <Text style={styles.subtotal_title}>Delivery fee</Text>
          <Text style={styles.subtotal_title}>${deliveryFee.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.button_container}>
        <View>
          <Text style={styles.total_title}>Total Price</Text>
          <Text style={styles.total_price}>${total.toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          style={{ width: 162 }}
          onPress={() => {
            //add data to the order
            dispatch(addToOrderList(cartData));
            //clear card
            dispatch(clearCard());
            navigation.navigate("order-success");
          }}
        >
          <BlueButton
            width={162}
            height={51}
            text="Pay Now"
            icon={<Wallet />}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 60,
    backgroundColor: "#fff",
    position: "absolute",
    elevation: 100,
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
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
  delivery_box: {
    width: "80%",
    alignSelf: "center",
  },
  delivery_placeholder: {
    color: "#172B4D",
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.2,
  },
  img_container: {
    width: 42,
    height: 42,
    backgroundColor: "#F7F8FB",
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
  },
  name_container: {
    flex: 1,
    alignItems: "flex-start",
  },
  card: {
    width: "100%",
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 13,
    gap: 27,

    alignItems: "center",
  },
  name: {
    color: "#001833",
    fontSize: 12,
    fontFamily: "Poppins_500Medium",
  },
  user_adress: {
    color: "#001833",
    fontSize: 10,
    fontFamily: "Poppins_500Medium",
  },
  radio_container: {
    alignItems: "center",
    marginVertical: 23,
  },
  selectedOptionText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  price_details: {
    flexDirection: "column",
    gap: 10,
    width: "80%",
    alignSelf: "center",
  },
  subtotal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subtotal_title: {
    fontSize: 12,
    fontFamily: "Poppins_500Medium",
    color: "#001833",
  },
  button_container: {
    width: "80%",
    alignItems: "center",
    marginVertical: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  total_title: {
    color: "rgba(0, 24, 51, 0.22)",
    fontSize: 12,
    fontFamily: "Poppins_500Medium",
  },
  total_price: {
    color: "#001833",
    fontSize: 22,
    fontFamily: "Poppins_500Medium",
  },
});
