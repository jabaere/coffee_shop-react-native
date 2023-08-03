import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PaperPlaneSVG from "../components/svg/PaperPlaneSVG";
import { addToChat } from "../store/chatSlice";

export function MessageScreen({ route }) {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const chatData = useSelector((state) => state.chat);
  const userData = useSelector((state) => state.profile);
  const userName = userData.filter((item) => item.id === "name")[0];
  const { operatorName } = route.params;

  const handleMessage = (value) => {
    setMessage(value);
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null} // Add behavior prop
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -200}
    >
      <View syle={styles.container}>
        <View
          style={{
            width: "80%",
            alignSelf: "center",
            columnGap: 54,
            marginTop: 54,
            maxHeight: "90%",
            zIndex: 3,
            marginVertical: 124,
          }}
        >
          <FlatList
            data={chatData}
            renderItem={({ item }) => (
              <View
                style={{
                  alignItems: item.type === "user" ? "flex-end" : "flex-start",
                  marginTop: 54,
                }}
              >
                <View
                  style={
                    item.type === "user"
                      ? styles.userMessageContainer
                      : styles.operatorMessageContainer
                  }
                >
                  <Text style={styles.message}>{item.message}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.input_container}>
          <TextInput
            style={styles.input}
            placeholder="Say something"
            onChangeText={(value) => handleMessage(value)}
            value={message}
          />
          <TouchableOpacity
            style={{ marginLeft: -50 }}
            onPress={() => {
              dispatch(
                addToChat({
                  user: userName.name,
                  operator: operatorName,
                  message: message,
                  type: "user",
                })
              );
              setMessage("");
            }}
          >
            <PaperPlaneSVG color="#001833" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  input_container: {
    position: "absolute",
    bottom: 20,

    alignItems: "center",
    flexDirection: "row",
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: "#324A59",
    color: "rgba(50, 74, 89, 0.22)",
    width: 330,
    alignSelf: "center",
    zIndex: 1000,
  },
  input: {
    width: "100%",
    height: 47,

    paddingLeft: 24,

    fontSize: 12,
    fontFamily: "Poppins_500Medium",
  },
  userMessageContainer: {
    backgroundColor: "#324A59",
    borderRadius: 8,
    height: 62,
    width: "80%",
  },
  operatorMessageContainer: {
    backgroundColor: "#E4D5C9",
    borderRadius: 8,
    height: 62,
    width: "80%",
  },
  message: {
    color: "#fff",
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: -0.2,
    fontFamily: "Poppins_500Medium",
    padding: 10,
  },
});
