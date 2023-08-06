import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import CallSVG from "../components/svg/CallSVG";
import Keypad from "../components/Keypad";
export function CallScreen({ route, navigation }) {
  const { operatorName } = route.params;
  const [inputValue, setInputValue] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [call, setCall] = useState({
    incoming: true,
    operatorName: operatorName,
    mute: false,
    keyboard: false,
    speaker: false,
    endCall: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
    // Clear the input fields

    return () => clearInterval(timer);
  }, [seconds]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleKeyPress = (key) => {
    if (key === "clear") {
      setInputValue("");
    } else if (key === "backspace") {
      setInputValue(inputValue.slice(0, -1));
    } else {
      setInputValue(inputValue + key);
    }
  };

  const resetTimer = () => {
    setSeconds(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.status}>
        {call.incoming ? "Incoming Call" : "Outgoing Call"}
      </Text>
      <Text style={styles.timer}>{formatTime(seconds)}</Text>
      <View
        style={{
          marginTop: 40,
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(131, 157, 173, 0.10)",
            width: 170,
            height: 170,
            borderRadius: 140,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/img/user.jpg")}
            style={styles.user_image}
          />
        </View>
        <Text style={styles.user_name}>Wu Liuqi</Text>
      </View>
      <View style={styles.buttons_container}>
        {/* {mute button} */}
        <View style={{ gap: 13 }}>
          <TouchableOpacity
            style={styles.icon_container}
            onPress={() => setCall({ mute: !call.mute })}
          >
            {call.mute ? (
              <Ionicons name="volume-mute-outline" size={33} color="#324A59" />
            ) : (
              <Ionicons name="volume-off-outline" size={33} color="#324A59" />
            )}
          </TouchableOpacity>
          <Text style={styles.icon_description}>Mute</Text>
        </View>

        {/* {keypad} */}
        <View style={{ gap: 13 }}>
          <TouchableOpacity
            style={styles.icon_container}
            onPress={() => setCall({ keyboard: !call.keyboard })}
          >
            <Ionicons name="keypad-outline" size={33} color="#324A59" />
          </TouchableOpacity>
          <Text style={styles.icon_description}>Keypad</Text>
        </View>
        {/* {speaker} */}
        <View style={{ gap: 13 }}>
          <TouchableOpacity
            style={styles.icon_container}
            onPress={() => setCall({ speaker: !call.speaker })}
          >
            {!call.speaker ? (
              <Ionicons name="volume-low-outline" size={33} color="#324A59" />
            ) : (
              <Ionicons name="volume-high-outline" size={33} color="#324A59" />
            )}
          </TouchableOpacity>
          <Text style={styles.icon_description}>Speaker</Text>
        </View>
      </View>
      <View style={styles.endCall_container}>
        <TouchableOpacity
          style={styles.icon_container_red}
          onPress={() => {
            navigation.navigate("track-order");
            resetTimer();
          }}
        >
          <CallSVG color="#fff" size={31} />
        </TouchableOpacity>
      </View>

      {/* {keypad} */}
      <View style={{ width: "100%", position: "absolute", bottom: 50 }}>
        {call.keyboard ? (
          <Keypad close={() => setCall({ keyboard: false })} />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  status: {
    color: "#001833",
    textAlign: "center",
    marginTop: 44,
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },
  timer: {
    textAlign: "center",
    marginTop: 13,
    color: "rgba(0, 24, 51, 0.22)",
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: -0.28,
    fontFamily: "Poppins_500Medium",
  },
  user_image: {
    width: 133,
    height: 133,
    borderRadius: 133,
  },
  user_name: {
    textAlign: "center",
    marginTop: 50,
    color: "#001833",
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: -0.28,
    fontFamily: "Poppins_500Medium",
  },
  buttons_container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 62,
    marginHorizontal: 56,
    flexDirection: "row",
  },
  icon_description: {
    color: "#001833",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.2,
    fontFamily: "Poppins_500Medium",
    alignSelf: "center",
  },
  icon_container: {
    alignItems: "center",
    justifyContent: "center",

    width: 63,
    height: 63,
    borderRadius: 100,
    backgroundColor: "rgba(131, 157, 173, 0.10)",
  },
  endCall_container: {
    flex: 1,
    marginTop: 40,
    width: "100%",
    alignItems: "center",
  },
  icon_container_red: {
    alignItems: "center",
    justifyContent: "center",

    width: 63,
    height: 63,
    borderRadius: 100,
    backgroundColor: "#FF3030",
    transform: [{ rotate: "135deg" }],
  },
});
