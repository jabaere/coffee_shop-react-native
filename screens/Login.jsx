import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { SubmitButton } from "../components/SubmitButton";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import MessageIcon from "../assets/svg/MessageIcon.svg";
import LockIcon from "../assets/svg/LockIcon.svg";
import ShowIcon from "../assets/svg/ShowIcon.svg";
import { isValidEmail } from "../utils/globalFuntions";
import { useSelector, useDispatch } from "react-redux";
import { addEmailToProfile } from "../store/profileSlice";
export const Login = ({ navigation }) => {
  const userData = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  //manage email && pasword states

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  //handle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //handle forgotPassword click
  const handleForgoTPasswordclick = () => {
    navigation.navigate("ForgotPassword");
  };

  //handle SignUp Click

  const handleSignUpClick = () => {
    navigation.navigate("SignUp");
  };

  //input changes

  const handleInputChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  //load fonts
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  //
  const validateForm = () => {
    let isValid = true;
    const updatedErrors = {};

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
  //

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitting form...");
      if (userData.email !== formData.email) {
        dispatch(addEmailToProfile({ email: formData.email }));
      }

      // Simulate a fake API call
      setTimeout(() => {
        console.log("Form submitted:", formData);

        setFormData({
          email: "",
          password: "",
        });
        navigation.navigate("Home");
      }, 2000); // Simulating a 2-second delay
    } else {
      console.log("Form validation failed.");
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.title_container}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subTitle}>Welcome Back</Text>
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
                  onChangeText={(value) => handleInputChange("email", value)}
                  value={formData.email}
                  placeholder={errors.email ? errors.email : "Email address"}
                  placeholderTextColor={errors.email ? "red" : "#AAAAAA"}
                />
              </View>
              <View style={styles.input_container}>
                <View style={styles.icon_container}>
                  <LockIcon style={styles.icon} />
                </View>
                <TextInput
                  style={styles.input}
                  onChangeText={(value) => handleInputChange("password", value)}
                  value={formData.password}
                  secureTextEntry={!showPassword}
                  keyboardType="default"
                  placeholder={errors.password ? errors.password : "Password"}
                  placeholderTextColor={errors.password ? "red" : "#AAAAAA"}
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <ShowIcon style={styles.icon} fill="#001833" />
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          </View>

          {/* forgot password */}
          <TouchableOpacity onPress={handleForgoTPasswordclick}>
            <Text style={styles.forgot_password}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Submit button */}
          <TouchableOpacity
            style={styles.button_container}
            onPress={handleSubmit}
          >
            <SubmitButton submit={handleSubmit} />
          </TouchableOpacity>

          {/* New member / Sign Up */}
          <Text style={styles.sign_up}>
            <Text>New member?</Text>
            <TouchableOpacity onPress={handleSignUpClick}>
              <Text style={styles.sign_up_span}>Sign Up</Text>
            </TouchableOpacity>
          </Text>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  title_container: {
    marginTop: 57,
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
    height: 30,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  forgot_password: {
    textAlign: "center",
    textDecorationLine: "underline",
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    color: "#324A59",
  },
  sign_up: {
    marginTop: 50,
    color: "#AAAAAA",
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    marginLeft: 41,
    alignItems: "center",
    height: 40,
  },
  sign_up_span: {
    color: "#324A59",
    fontFamily: "Poppins_700Bold",
    paddingLeft: 10,
  },
  button_container: {
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 50,
    marginRight: 12,
  },
});
