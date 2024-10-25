import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomNumber(min: number, max: number, exclude: number) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    generateRandomNumber(min, max, exclude);
  }
  return randomNum;
}

let maxBoundary = 100;
let minBoundary = 1;

export default function GameScreen({ userNumber }: { userNumber: number }) {
  const initialGuess = generateRandomNumber(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentguess] = useState(initialGuess);

  function nextGuessHandler(direction: "lower" | "higher") {
    if (direction === "lower") {
      maxBoundary = currentGuess;
    }

    if (direction === "higher") {
      minBoundary = currentGuess + 1;
    }
    const newRandomNum = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentguess(newRandomNum);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton onPress={() => nextGuessHandler("higher")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
      <Text>Log Rounds</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
