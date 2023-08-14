import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Keypad = ({ close }) => {
  const [inputValue, setInputValue] = useState("");
  //Control the keypad behavior based on the input
  const handleKeyPress = (key) => {
    if (key === "clear") {
      setInputValue("");

      close();
    } else if (key === "backspace") {
      setInputValue(inputValue.slice(0, -1));
    } else {
      setInputValue(inputValue + key);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        keyboardType="numeric"
      />
      <View style={styles.keypad}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handleKeyPress("1")}
            style={styles.key}
          >
            <Text style={styles.text}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleKeyPress("2")}
            style={styles.key}
          >
            <Text style={styles.text}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleKeyPress("3")}
            style={styles.key}
          >
            <Text style={styles.text}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handleKeyPress("4")}
            style={styles.key}
          >
            <Text style={styles.text}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleKeyPress("5")}
            style={styles.key}
          >
            <Text style={styles.text}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleKeyPress("6")}
            style={styles.key}
          >
            <Text style={styles.text}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handleKeyPress("7")}
            style={styles.key}
          >
            <Text style={styles.text}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleKeyPress("8")}
            style={styles.key}
          >
            <Text style={styles.text}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleKeyPress("9")}
            style={styles.key}
          >
            <Text style={styles.text}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handleKeyPress("clear")}
            style={styles.key}
          >
            <Ionicons name="keypad-outline" size={33} color="#324A59" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleKeyPress("0")}
            style={styles.key}
          >
            <Text style={styles.text}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleKeyPress("backspace")}
            style={styles.key}
          >
            <Text style={styles.text}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowOpacity: 1,
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 0.5,
    borderColor: "white",
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "85%",
    alignSelf: "center",
    borderRadius: 4,
  },
  input: {
    width: "100%",
    height: 40,
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
    color: "#001833",
    borderWidth: 0,
    paddingHorizontal: 8,
    marginBottom: 16,

    textAlign: "center",
  },
  keypad: {
    borderWidth: 0,

    padding: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  key: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "rgba(131, 157, 173, 0.10)",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins_500Medium",
    color: "#001833",
  },
});

export default Keypad;
