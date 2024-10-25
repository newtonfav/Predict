import React, { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import { Colors } from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>();

  function pickNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }

  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={[Colors.primary400, Colors.secondary100]}
    >
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
        {/* {screen} */}
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
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
