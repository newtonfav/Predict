import React from "react";
import { StyleSheet, Text, Platform } from "react-native";

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
    // borderWidth: Platform.OS === "android" ? 2 : 0,      //You can use tenary operator
    //  borderWidth: Platform.select({ ios: 0, android: 2 }), //You can also use the select method built in Platform
    borderWidth: 2,
    borderColor: "white",
    padding: 5,
    maxWidth: "80%",
    width: 300,
  },
});

export default Title;
