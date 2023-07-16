import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export function Countdown({ seconds, setResend }) {
  const [remainingTime, setRemainingTime] = useState(seconds);

  useEffect(() => {
    if (remainingTime > 0) {
      const timer = setTimeout(() => {
        setRemainingTime(remainingTime - 1);
      }, 1000);
      // Clear the input fields
      setResend(true);
      return () => clearTimeout(timer);
    }
  }, [remainingTime]);

  const handleResend = () => {
    setRemainingTime(seconds); // Reset the remaining time
    setResend(false); // Clear the input fields
  };

  return (
    <View>
      {remainingTime === 0 ? (
        <TouchableOpacity onPress={handleResend}>
          <Text>Resend</Text>
        </TouchableOpacity>
      ) : (
        <Text>Resend in 00:{remainingTime}</Text>
      )}
    </View>
  );
}
