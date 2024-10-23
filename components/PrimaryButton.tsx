import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton({ children }: { children: string }) {
  function handlePress() {
    console.log("pressed");
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={handlePress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    alignItems: "center",
    backgroundColor: "#8d143e",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  pressed: {
    opacity: 0.75,
  },

  buttonText: {
    color: "white",
  },
});
