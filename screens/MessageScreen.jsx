import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
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
  const flatListRef = useRef(null);

  //handle message input
  const handleMessage = (value) => {
    setMessage(value);
  };

  //scroll to last message
  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd();
    }
  }, [chatData]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -200}
    >
      <View style={styles.messageContainer}>
        <FlatList
          ref={flatListRef}
          data={chatData}
          renderItem={({ item }) => (
            <View
              style={{
                alignItems: item.type === "user" ? "flex-end" : "flex-start",
                marginBottom: 54,
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
              <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <View style={styles.input_container}>
          <TextInput
            style={styles.input}
            placeholder="Say something"
            onChangeText={(value) => handleMessage(value)}
            value={message}
          />
          <TouchableOpacity
            style={{ right: 10, position: "absolute" }}
            onPress={() => {
              dispatch(
                addToChat({
                  user: userName.name,
                  operator: operatorName,
                  message: message,
                  type: "user",
                  timestamp: new Date().toLocaleString(),
                  id: Date.now(),
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
  messageContainer: {
    flex: 1,
    marginVertical: 56,
    width: "90%",
    alignSelf: "center",
  },
  input_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    paddingVertical: 0,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    width: 330,
  },
  input: {
    flex: 1,
    height: 47,
    paddingLeft: 24,
    fontSize: 12,
    fontFamily: "Poppins_500Medium",
    borderWidth: 1.5,
    borderColor: "#324A59",
    borderRadius: 50,

    width: "100%",
  },
  userMessageContainer: {
    backgroundColor: "#324A59",
    borderRadius: 8,
    padding: 10,
    alignSelf: "flex-end",
  },
  operatorMessageContainer: {
    backgroundColor: "#E4D5C9",
    borderRadius: 8,
    padding: 10,
    alignSelf: "flex-start",
  },
  message: {
    color: "#fff",
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: -0.2,
    fontFamily: "Poppins_500Medium",
  },
  timestamp: {
    color: "rgba(0, 24, 51, 0.22)",
    fontSize: 10,
    fontFamily: "Poppins_500Medium",
    marginTop: 5,
  },
});

export default MessageScreen;
