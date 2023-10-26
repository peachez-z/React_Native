import { StatusBar } from "expo-status-bar";
import { StyleSheet, Switch } from "react-native";
import Box from "./Box";
import Shadow from "./Shadow";
import styled, { css, ThemeProvider } from "styled-components/native";
import Input from "./input";
import React, { useState } from "react";
const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
  align-items: center;
  justify-content: center;
`;
const LightTheme = {
  InputColor: "black",
  InputBoder: "black",
  bgColor: "lightgrey",
};

const DarkTheme = {
  InputColor: "grey",
  InputBoder: "grey",
  bgColor: "black",
};

const StyledButton = styled.Button``;

export default function App() {
  const [isLight, toggleTheme] = useState(true);
  return (
    <ThemeProvider theme={isLight ? LightTheme : DarkTheme}>
      <Container>
        <StatusBar style="auto" />
        <Switch
          value={isLight}
          onValueChange={(isLight) => toggleTheme(isLight)}
        />
        <Input placeholder="음오아예" />
        <Input />
      </Container>
    </ThemeProvider>
  );
}
