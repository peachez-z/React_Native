import React from "react";
import styled from "styled-components/native";
import { icons } from "../icons";
import { TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";

const Icon = styled.Image`
  width: 30px;
  height: 30px;
  margin: 10px;
  tint-color: ${({ theme }) => theme.text};
`;

const IconButton = ({ icon, onPress, id }) => {
  const _onPress = () => {
    onPress(id);
  };
  return (
    <TouchableOpacity onPress={_onPress}>
      <View>
        <Icon source={icon}></Icon>
      </View>
    </TouchableOpacity>
  );
};

IconButton.propTypes = {
  // 배열로 전달 되어야 함
  icon: PropTypes.oneOf(Object.values(icons)).isRequired,
  onPress: PropTypes.func,
  id: PropTypes.string,
};

export default IconButton;
