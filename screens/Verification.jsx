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
export function Verification() {
  const navigation = useNavigation();
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
            <Text style={styles.title}>Verification</Text>
            <Text style={styles.subTitle}>Enter the OTP code we sent you</Text>
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
                <View style={styles.block_container}>
                  <TextInput keyboardType="numeric" style={styles.input} />
                  <TextInput keyboardType="numeric" style={styles.input} />
                  <TextInput keyboardType="numeric" style={styles.input} />
                  <TextInput keyboardType="numeric" style={styles.input} />
                </View>

                <Text style={styles.forgot_password}>Resend in 00:30 </Text>
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
    flexDirection: "column",
    height: 200,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 272,
    width: "80%",

    alignItems: "center",
  },

  block_container: {
    height: 150, // Increase the height to accommodate the icon
    width: "100%", // Increase the width to accommodate the icon
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
    marginTop: 90,
  },
  input: {
    width: 48,
    height: 61,
    backgroundColor: "#F7F8FB",
    borderRadius: 10,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  forgot_password: {
    textAlign: "center",

    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    color: "#AAAAAA",
    marginTop: 30,
  },
  button_container: {
    width: "20%",
    marginLeft: 250,
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 190,
  },
});
