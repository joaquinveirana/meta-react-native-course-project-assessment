import React, { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  StyleSheet,
  View,
} from "react-native";
import Button from "../components/Button";
import { validateEmail } from "../utils";

const SubscribeScreen = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");

  const requestSubscription = () => {
    const emailValid = validateEmail(email);
    if (emailValid) {
      Alert.alert("Thanks for subscribing, stay tuned!");
      onChangeEmail("");
    } else Alert.alert("Please, check your email format");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Image
        style={styles.logo}
        source={require("../assets/little-lemon-logo-grey.png")}
      />
      <Text style={styles.title}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <View style={styles.textInputContainer}>
        <TextInput
          clearButtonMode={"always"}
          keyboardType={"email-address"}
          onChangeText={onChangeEmail}
          placeholder={"Type your email"}
          style={styles.textInput}
          value={email}
        />
      </View>
      <Button
        callback={() => requestSubscription()}
        disabled={email.length === 0}
        innerText="Subscribe"
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "flex-start",
    padding: 16,
  },
  logo: {
    marginTop: 24,
    height: 100,
    alignContent: "center",
    resizeMode: "contain",
    width: 300,
  },
  textInputContainer: {
    flexDirection: "row",
  },
  textInput: {
    backgroundColor: "#fff",
    borderColor: "black",
    borderRadius: 12,
    borderWidth: 1,
    flex: 1,
    fontSize: 16,
    height: 55,
    marginVertical: 12,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 22,
    marginHorizontal: 5,
    paddingVertical: 10,
    textAlign: "center",
  },
});

export default SubscribeScreen;
