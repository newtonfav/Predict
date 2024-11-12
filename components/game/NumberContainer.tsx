import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Colors } from "../../constants/colors";

const deviceWidth = Dimensions.get("window").width;

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
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
    color: Colors.secondary100,
  },
});
