import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";
import { SubmitButton } from "../components/SubmitButton";
import MessageIcon from "../assets/svg/MessageIcon.svg";
import { isValidEmail } from "../utils/globalFuntions";
import { useNavigation } from "@react-navigation/native";
export function Forgotpassword() {
  //form state
  const [formData, setFormData] = useState({
    email: "",
  });
  //error state
  const [errors, setErrors] = useState({
    email: "",
  });

  //validate form
  const validateForm = () => {
    let isValid = true;
    const updatedErrors = {};

    if (formData.email.trim() === "") {
      updatedErrors.email = "Email is required";
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      console.log("Invalid email address");
      updatedErrors.email = "Invalid email address";

      setFormData({
        email: "",
      });
      isValid = false;
    }

    console.log("isvalid: ", isValid);
    setErrors(updatedErrors);
    return isValid;
  };

  //submit form
  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitting form...");

      // Simulate a fake API call
      setTimeout(() => {
        console.log("Form submitted:", formData);
        // Perform any additional logic or API requests here

        // Reset the form data after submission if needed
        setFormData({
          email: "",
        });
        navigation.navigate("Login");
      }, 2000); // Simulating a 2-second delay
    } else {
      console.log("Form validation failed.");
    }
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.title_container}>
            <Text style={styles.title}>Forgot Password?</Text>
            <Text style={styles.subTitle}>Enter your email adress</Text>
          </View>
          <View style={styles.form_container}>
            <SafeAreaView
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <View style={styles.input_container}>
                <View style={styles.icon_container}>
                  <MessageIcon style={styles.icon} />
                </View>

                <TextInput
                  style={styles.input}
                  onChangeText={(value) => setFormData({ email: value })}
                  value={formData.email}
                  placeholder={errors.email ? errors.email : "Email adress"}
                  placeholderTextColor={errors.email ? "red" : "#AAAAAA"}
                />
              </View>
              {/* Submit button */}
              <TouchableOpacity
                style={styles.button_container}
                onPress={handleSubmit}
              >
                <SubmitButton submit={handleSubmit} />
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title_container: {
    marginTop: 127 - Constants.statusBarHeight,
    marginLeft: 41,
  },
  title: {
    color: "#181D2D",
    fontSize: 22,

    fontFamily: "Poppins_700Bold",
  },
  subTitle: {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    color: "#AAAAAA",
    paddingTop: 10,
  },
  input_container: {
    flexDirection: "row",
    height: 40,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 272,
    width: "80%",
    borderBottomWidth: 2,
    borderColor: "#AAAAAA",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: "80%",
    borderWidth: 1,
    padding: 10,
    borderWidth: 0,

    // color: "#C1C7D0",
    fontSize: 12,
    fontFamily: "Poppins_500Medium",
  },
  icon_container: {
    borderRightWidth: 2,
    borderRightColor: "#AAAAAA",
    height: 30, // Increase the height to accommodate the icon
    width: 40, // Increase the width to accommodate the icon
    alignItems: "center",
    justifyContent: "center",
  },
  button_container: {
    width: "20%",
    marginLeft: 250,
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 190,
  },
});
