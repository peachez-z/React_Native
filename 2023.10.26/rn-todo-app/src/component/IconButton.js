import React from "react";
import styled from "styled-components/native";
import { icons } from "../icons";
import { TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";

const Icon = styled.Image`
  width: 30px;
  height: 30px;
  margin: 10px;
  tint-color: ${({ theme, completed }) =>
    completed ? theme.done : theme.text};
`;

const IconButton = ({ icon, onPress, item }) => {
  const _onPress = () => {
    onPress(item.id);
  };
  return (
    <TouchableOpacity onPress={_onPress}>
      <View>
        <Icon source={icon} completed={item.completed} />
      </View>
    </TouchableOpacity>
  );
};

IconButton.defaultProps = {
  item: { completed: false },
};

IconButton.propTypes = {
  // 배열로 전달 되어야 함
  icon: PropTypes.oneOf(Object.values(icons)).isRequired,
  onPress: PropTypes.func,
  item: PropTypes.object,
};

export default IconButton;
