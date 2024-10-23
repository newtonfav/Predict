import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={["#4e0329", "#ddb52f"]}
    >
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    // backgroundColor: "#ddb52f",
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
