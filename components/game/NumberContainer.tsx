import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

export default function NumberContainer({ children }: { children: number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.secondary100,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 36,
    fontWeight: "bold",
    color: Colors.secondary100,
  },
});
