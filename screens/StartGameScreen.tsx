import React, { SetStateAction, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(
    enteredText: NativeSyntheticEvent<TextInputChangeEventData>
  ) {
    setEnteredNumber(enteredText as unknown as string);
  }

  function confirmInputHandler() {}

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChange={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 100,
    backgroundColor: "#3b021f",
    elevation: 4,
    shadowColor: "black",
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
  },

  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
