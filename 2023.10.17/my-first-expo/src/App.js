import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import Mybutton from "./MyButton";
import { useState } from "react";

export default function App() {
  const [addition, setAddition] = useState(0);
  const [multiple, setMultiple] = useState(1);
  return (
    <View style={styles.container}>
      <TextInput
        // onChange={(event) => console.log(event.nativeEvent)}
        onChangeText={(text) => console.log(text)}
        style={{ borderWidth: 1, padding: 10, fontSize: 20 }}
      />
      {/* <Text style={{ fontSize: 20 }}>{addition}</Text>
      <Text style={{ fontSize: 20 }}>{multiple}</Text>
      <Mybutton title="add" onPress={() => setAddition(addition + 2)} />
      <Mybutton title="mul" onPress={() => setMultiple(multiple * 2)} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
