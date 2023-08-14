import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditSVG from "../components/svg/EditSVG";
import CallSVG from "../components/svg/CallSVG";
import EmailSVG from "../components/svg/EmailSVG";
import LocationSVG from "../components/svg/LocationSVG";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { updateProperty } from "../store/profileSlice";
export function Profile() {
  // Fetch data from the user's profile.
  const data = useSelector((state) => state.profile);
  const [edit, setEdit] = useState("");
  const dispatch = useDispatch();

  //profile state
  const [profileData, setProfileData] = useState({
    name: "",
    number: "",
    email: "",
    adress: "",
  });

  //Manage user input changes.
  const handleInputChange = (field, value) => {
    setProfileData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };
  //content to render within map function
  const renderCardContent = (item) => {
    if (edit === item.id) {
      // Render TextInput in edit mode
      return (
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleInputChange(item.id, value)}
          value={profileData[item.id]}
          autoFocus={edit === item.id}
        />
      );
    } else {
      // Render Text in view mode
      return <Text style={styles.user}>{getLabel({ item })}</Text>;
    }
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null} // Add behavior prop
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -200}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <Text style={styles.name}>Profile</Text>
        </View>
        {data?.map((item, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.img_container}>{getProfileIcon(item)}</View>
            <View style={styles.name_container}>
              <Text style={styles.placeholder}>{item.placeholder}</Text>
              {renderCardContent(item)}
            </View>

            {edit !== item.id ? (
              <TouchableOpacity
                style={styles.edit_icon}
                onPress={() => setEdit(item.id)}
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
                      id: item.id,
                      property: item.id,
                      value: profileData[item.id],
                    })
                  ); // Dispatch the updateProperty action to update the state
                }}
              >
                <MaterialIcons name="done" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

//Display card icon based on card ID
function getProfileIcon(item) {
  switch (item.id) {
    case "name":
      return <AntDesign name="user" size={16} color="#001833" />;
    case "number":
      return <CallSVG color="#324A59" size={16} />;
    case "email":
      return <EmailSVG color="#324A59" />;
    case "adress":
      return <LocationSVG color="#324A59" size={20} />;
  }
}

//get cardlabel based on card ID
function getLabel({ item }) {
  //console.log(item.email);
  switch (item.id) {
    case "name":
      return item.name;
    case "number":
      return item.number;
    case "email":
      return item?.email ? item?.email : null;
    case "adress":
      return item.adress;

    default:
      return null;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    paddingVertical: 23,
  },
  name: {
    color: "#001833",
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: 0.28,
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
  placeholder: {
    fontSize: 10,
    color: "rgba(0, 24, 51, 0.22)",
    fontFamily: "Poppins_500Medium",
  },
  user: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
  },
  edit_icon: {},
  input: {
    height: 40,
    width: "80%",
    borderWidth: 1,

    borderWidth: 0,
    fontSize: 12,
    fontFamily: "Poppins_500Medium",
  },
});
