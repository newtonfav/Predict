import React from "react";
import { StyleSheet, Text } from "react-native";

function Title({ children }: { children: string }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ddb52f",
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 5,
  },
});

export default Title;
