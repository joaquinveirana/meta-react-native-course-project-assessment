import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/little-lemon-logo.png")}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
        <Button
          callback={() => navigation.navigate("Subscribe")}
          innerText="Newsletter"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
  },
  logoContainer: {
    alignItems: "center",
    flex: 0.55,
    justifyContent: "flex-end",
  },
  titleContainer: {
    alignItems: "center",
    flex: 0.45,
    justifyContent: "space-between",
    marginVertical: 20,
  },
  logo: {
    marginTop: 24,
    height: 200,
    alignContent: "center",
    resizeMode: "contain",
    width: 300,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginHorizontal: 5,
    paddingVertical: 10,
    textAlign: "center",
  },
});

export default WelcomeScreen;
