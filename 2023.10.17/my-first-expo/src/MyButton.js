import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import propTypes from "prop-types";

const Mybutton = ({ title, onPress, children }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log("on")}
      onPressIn={() => console.log("in")}
      onPressOut={() => console.log("out")}
      onLongPress={() => console.log("long")}
      delayLongPress={3000}
      pressRetentionOffset={{ bottom: 10, top: 10, left: 10, right: 10 }}
    >
      <View style={{ backgroundColor: "blue", padding: 10, margin: 10 }}>
        <Text style={{ fontSize: 20, color: "white" }}>
          {children || title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// 기본 값 설정
Mybutton.defaultProps = {
  title: "default",
  onPress: () => alert("default"),
};

Mybutton.propTypes = {
  title: propTypes.string,
  onPress: propTypes.func,
  // title2: propTypes.string.isRequired,
};

export default Mybutton;
