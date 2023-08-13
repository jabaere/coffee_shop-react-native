import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import Constants from "expo-constants";
import { SubmitButton } from "../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import { Countdown } from "../components/CountDown";

export function Verification() {
  // create reference for input number box
  const inputRefs = useRef([]);
  //
  const navigation = useNavigation();
  // resend button state
  const [resend, setResend] = useState(false);
  //form state
  const form = {
    first_box: "",
    second_box: "",
    third_box: "",
    fourth_box: "",
  };

  const [formData, setFormData] = useState(form);
  //reset countdown
  useEffect(() => {
    console.log("render");
    if (resend) {
      //create empty object
      const resetFormData = {};
      //loop form object
      for (const key in form) {
        resetFormData[key] = "";
      }
      //clear formData object values
      setFormData(resetFormData);
    }
  }, [resend]);

  //handle input changes
  const handleInputChange = (field, value, index) => {
    form[index] = value;
    //focus next number box
    if (value !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
    setFormData({ ...formData, [field]: value });
  };
  //error state
  const [errors, setErrors] = useState(form);

  //validate form
  const validateForm = () => {
    let isValid = true;
    // check if every input box has a non-empty value/ return boolean -
    const hasNonEmptyValue = Object.entries(formData).every(([key, value]) => {
      return value !== "" && value !== null && value !== undefined;
    });
    // let isValid = true;
    // const updatedErrors = {};

    console.log("isvalid: ", isValid);
    // setErrors(updatedErrors);
    return hasNonEmptyValue;
  };

  //

  //submit form
  const handleSubmit = () => {
    //check if form is valid
    if (validateForm()) {
      console.log("Submitting form...");

      // Simulate a fake API call
      setTimeout(() => {
        console.log("Form submitted:", formData);
        // Perform any additional logic or API requests here

        // Reset the form data after submission if needed
        // setFormData({
        //   email: "",
        // });
        navigation.navigate("Home");
      }, 2000); // Simulating a 2-second delay
    } else {
      console.log("Form validation failed.");
    }
  };

  //handle ke press
  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === "Backspace" && index > 0) {
      // Focus on the previous input box
      inputRefs.current[index - 1].focus();

      // Clear the previous input value
      form[index - 1] = "";
      handleInputChange("", index - 1);
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
                  {Object.entries(form)?.map(([name, value], index, arr) => (
                    <TextInput
                      ref={(ref) => (inputRefs.current[index] = ref)}
                      maxLength={1}
                      keyboardType="numeric"
                      style={styles.input}
                      key={index}
                      onChangeText={(inputValue) =>
                        handleInputChange(name, inputValue, index)
                      }
                      value={formData[name]}
                      onKeyPress={(event) => handleKeyPress(event, index)}
                    />
                  ))}
                </View>

                <View style={styles.forgot_password}>
                  <Countdown seconds={30} setResend={setResend} />
                </View>
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
