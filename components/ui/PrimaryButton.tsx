import React, { ReactNode } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

export default function PrimaryButton({
  children,
  onPress,
}: {
  children: ReactNode;
  onPress?: () => void;
}) {
  function handlePress() {
    if (!onPress) return;

    onPress();
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
        android_ripple={{ color: Colors.primary100 }}
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
    backgroundColor: Colors.primary50,
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
