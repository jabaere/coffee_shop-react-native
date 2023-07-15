import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { SubmitButton } from "../components/SubmitButton";
//icons
import ProfileIcon from "../assets/svg/Profile.svg";
import SmartPhoneIcon from "../assets/svg/SmartPhoneIcon.svg";
import MessageIcon from "../assets/svg/MessageIcon.svg";
import LockIcon from "../assets/svg/LockIcon.svg";
import ShowIcon from "../assets/svg/ShowIcon.svg";
import { AntDesign } from "@expo/vector-icons";
import { isValidEmail } from "../utils/globalFuntions";
import Constants from "expo-constants";
import { Dimensions } from "react-native";
export const SignUp = () => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;
  //manage states
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };
  //handle password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignInClick = () => {
    navigation.navigate("Login");
  };

  const validateForm = () => {
    let isValid = true;
    const updatedErrors = {};

    if (formData.name.trim() === "") {
      updatedErrors.name = "Name is required";
      isValid = false;
    }

    if (formData.number.trim() === "") {
      updatedErrors.number = "Number is required";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      updatedErrors.email = "Email is required";
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      console.log("Invalid email address");
      updatedErrors.email = "Invalid email address";

      setFormData((prevData) => ({
        ...prevData,
        email: "",
      }));
      isValid = false;
    }
    if (formData.password.trim() === "") {
      updatedErrors.password = "Password is required";
      isValid = false;
    }
    console.log("isvalid: ", isValid);
    setErrors(updatedErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitting form...");

      // Simulate a fake API call
      setTimeout(() => {
        console.log("Form submitted:", formData);
        // Perform any additional logic or API requests here

        // Reset the form data after submission if needed
        setFormData({
          name: "",
          number: "",
          email: "",
          password: "",
        });
        navigation.navigate("Login");
      }, 2000); // Simulating a 2-second delay
    } else {
      console.log("Form validation failed.");
    }
  };
  // Basic email validation regex

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.title_container}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subTitle}>Create an account here</Text>
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
                <AntDesign name="user" size={20} color="#001833" />
              </View>
              <View style={{ flex: 1 }}>
                <TextInput
                  style={styles.input}
                  onChangeText={(value) => handleInputChange("name", value)}
                  value={formData.name}
                  placeholder={errors.name ? errors.name : "User name"}
                  placeholderTextColor={errors.name ? "red" : "#AAAAAA"}
                />
              </View>
              {/* {errors.name && formData.name == "" && (
                <Text style={styles.error}>{errors.name}</Text>
              )} */}
            </View>

            <View style={styles.input_container}>
              <View style={styles.icon_container}>
                <SmartPhoneIcon style={styles.icon} color="#FF0000" />
              </View>
              <View style={{ flex: 1 }}>
                <TextInput
                  style={styles.input}
                  onChangeText={(value) => handleInputChange("number", value)}
                  value={formData.number}
                  placeholder={
                    errors.number && formData.number == ""
                      ? errors.number
                      : "Mobile number"
                  }
                  placeholderTextColor={errors.number ? "red" : "#AAAAAA"}
                />
              </View>
              {/* {errors.number && formData.number == "" && (
                <Text style={styles.error}>{errors.number}</Text>
              )} */}
            </View>
            <View style={styles.input_container}>
              <View style={styles.icon_container}>
                <MessageIcon style={styles.icon} />
              </View>
              <View style={{ flex: 1 }}>
                <TextInput
                  style={styles.input}
                  onChangeText={(value) => handleInputChange("email", value)}
                  value={formData.email}
                  placeholder={errors.email ? errors.email : "Email adress"}
                  placeholderTextColor={errors.email ? "red" : "#AAAAAA"}
                />
              </View>
              {/* {errors.email && formData.email == "" && (
                <Text style={styles.error}>{errors.email}</Text>
              )} */}
            </View>
            <View style={styles.input_container}>
              <View style={styles.icon_container}>
                <LockIcon style={styles.icon} />
              </View>
              <View
                style={{
                  flex: 1,
                }}
              >
                <TextInput
                  style={styles.input}
                  onChangeText={(value) => handleInputChange("password", value)}
                  value={formData.password}
                  secureTextEntry={!showPassword}
                  placeholder={errors.password ? errors.password : "Password"}
                  placeholderTextColor={errors.password ? "red" : "#AAAAAA"}
                />
              </View>
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <ShowIcon
                  style={errors.password ? styles.hide : styles.icon}
                  fill="#001833"
                  // marginLeft: -10,
                />
              </TouchableOpacity>

              {/* {errors.password && formData.password == "" && (
                <Text style={styles.error}>{errors.password}</Text>
              )} */}
            </View>
          </SafeAreaView>
        </View>

        {/* Submit button */}
        <TouchableOpacity
          style={styles.button_container}
          onPress={() => handleSubmit()}
        >
          <SubmitButton submit={handleSubmit} />
        </TouchableOpacity>
        {/* New member / Sign Up */}
        <Text style={styles.sign_up}>
          Already a member?
          <TouchableOpacity onPress={handleSignInClick}>
            <Text style={styles.sign_up_span}>Sign In</Text>
          </TouchableOpacity>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  scrollContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title_container: {
    marginTop: 17,
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
  form_container: {
    width: "100%",
    justifyContent: "center",
    marginTop: 152,
  },
  input_container: {
    flexDirection: "row",
    height: 40,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 32,
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
  sign_up: {
    marginTop: 50,
    color: "#AAAAAA",
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    marginLeft: 41,
  },
  sign_up_span: {
    color: "#324A59",
    fontFamily: "Poppins_700Bold",
    paddingLeft: 10,
  },
  icon: {
    width: 28,
    height: 28,
  },
  error: {
    color: "red",
    marginBottom: 5,
    textAlign: "left",
    flex: 1,
    marginLeft: -20,
  },
  hide: {
    display: "none",
  },
});

export default SignUp;
