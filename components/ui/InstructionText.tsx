import React from "react";
import { StyleSheet, Text } from "react-native";

export default function InstructionText({
  children,
  style,
}: {
  children: string;
  style?: object;
}) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    fontSize: 16,
    color: "white",
  },
});
