import React, { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import { Colors } from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
import AppLoading from "expo-app-loading";

// SplashScreen.preventAutoHideAsync();
export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>();
  const [gameOver, setGameOver] = useState<boolean>(false);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    // SplashScreen.hideAsync();
    return <AppLoading />;
  }

  function pickNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
  }

  function gameOverHandler() {
    setGameOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameOver) {
    screen = <GameOverScreen />;
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
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
