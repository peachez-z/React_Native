import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Box from "./Box";
import Shadow from "./Shadow";
import styled, { css } from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #018291;
  align-items: center;
  justify-content: center;
`;
const cssText = css`
  font-size: 20px;
  font-weight: 600;
`;
const StyledText = styled.Text`
  ${cssText}
  color: white;
`;

const ErrorText = styled(StyledText)`
  ${cssText}
  color: red;
`;

const StyledButton = styled.Button``;

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <StyledText>Hi</StyledText>
      <ErrorText>bye</ErrorText>
      <StyledButton title="styled" onPress={() => alert("styled!!")} />
    </Container>
  );
}
