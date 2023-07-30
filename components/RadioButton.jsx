import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export const RadioButton = ({ options, selectedOption, onSelect }) => {
  console.log(options);
  return (
    <View>
      {options.map((option) => (
        <TouchableOpacity
          key={option.method}
          style={styles.radioButton}
          onPress={() => onSelect(option.method)}
        >
          <View style={styles.radioButtonIcon}>
            {option.method === selectedOption && (
              <View style={styles.radioButtonSelected} />
            )}
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.radioButtonLabel_method}>{option.method}</Text>
            <Text style={styles.radioButtonLabel_bank}>{option.bank}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginRight: 10,
            }}
          >
            {option?.icon.map((icon, index) => (
              <Image source={icon} width={31} height={31} key={index} />
            ))}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: "row",
    alignItems: "center",

    gap: 20,
    marginBottom: 10,
    backgroundColor: "#F7F8FB",
    width: 307,
    height: 81,
    borderRadius: 12,
  },
  radioButtonIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  radioButtonSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#000",
  },
  radioButtonLabel_method: {
    color: "#001833",
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
  radioButtonLabel_bank: {
    color: "rgba(0, 24, 51, 0.22)",
    fontSize: 10,
    fontFamily: "Poppins_500Medium",
  },
});
