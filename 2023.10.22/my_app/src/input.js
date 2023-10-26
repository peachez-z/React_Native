import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.TextInput.attrs(({ placeholder, theme }) => ({
  placeholder: placeholder || "없음",
  placeholderTextColor: theme.InputColor,
}))`
  padding: 20px;
  font-size: 20px;
  border: 1px solid ${({ theme }) => theme.InputBoder};
`;

const Input = ({ placeholder }) => {
  const [text, setText] = useState("");
  return (
    <StyledInput
      onChangeText={(text) => setText(text)}
      text={text}
      placeholder={placeholder}
    />
  );
};

export default Input;
