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
export default function ConfirmationModal({ name, adress }) {
  const dispatch = useDispatch();
  const [newAdress, setNewAdress] = useState(adress);
  const [edit, setEdit] = useState(false);

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
      // Render Text in view mode
      console.log(adress + "  dasda");
      console.log(name + "  name");
      return <Text style={styles.user}>{newAdress}</Text>;
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
            <Text style={styles.placeholder}>{name}</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 70,
    backgroundColor: "#fff",
    position: "absolute",
    elevation: 100,
    height: 300,
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
  },
  card: {
    width: "80%",
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 38,
    gap: 27,
    alignItems: "center",
  },
});
