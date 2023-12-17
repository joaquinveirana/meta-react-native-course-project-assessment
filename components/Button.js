import * as React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const Button = ({ callback, disabled, innerText }) => {
  return (
    <View
      style={
        !disabled
          ? styles.buttonContainer
          : { ...styles.buttonContainer, backgroundColor: "#aaa" }
      }
    >
      <Pressable
        style={styles.button}
        onPress={() => callback()}
        disabled={disabled}
      >
        <Text style={styles.innerText}>{innerText}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignContent: "center",
    backgroundColor: "#495e57",
    borderRadius: 12,
    justifyContent: "center",
    padding: 16,
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  innerText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Button;
