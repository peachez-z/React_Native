import React from "react";
import { StyleSheet, View, Platform, Text } from "react-native";

const Shadow = () => {
  return (
    <View style={styles.Shadow}>
      <Text>{Platform.OS === "ios" ? "ios" : "android"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Shadow: {
    width: 200,
    height: 200,
    ...Platform.select({
      ios: {
        backgroundColor: "blue",
        shadowColor: "#000",
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        backgroundColor: "skyblue",
        elevation: 20,
      },
    }),
  },
});
export default Shadow;
