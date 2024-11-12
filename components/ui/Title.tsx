import React from "react";
import { StyleSheet, Text } from "react-native";

function Title({ children }: { children: string }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    textAlign: "center",
    color: "white",
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "white",
    padding: 5,
    maxWidth: "80%",
    width: 300,
  },
});

export default Title;
