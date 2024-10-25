import React from "react";
import { StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";

function Title({ children }: { children: string }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "white",
    padding: 5,
  },
});

export default Title;
