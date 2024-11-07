import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

interface GuessLogItemProps {
  roundNumber: number;
  guess: number;
}

export default function ({ roundNumber, guess }: GuessLogItemProps) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Computer Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: Colors.primary400,
    marginVertical: 8,
    backgroundColor: Colors.secondary100,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
