import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import IconButton from "./IconButton";
import { icons } from "../icons";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.itemBackground};
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0;
`;

const Contents = styled.Text`
  flex: 1;
  font-size: 20px;
  color: ${({ theme }) => theme.main};
  width: 100%;
  align-items: flex-end;
  padding: 0 20px;
`;

const Task = ({ item, deleteTask, toggleTask }) => {
  return (
    <Container>
      <IconButton
        icon={item.completed ? icons.check : icons.uncheck}
        id={item.id}
        onPress={toggleTask}
      />
      <Contents>{item.text}</Contents>
      <IconButton icon={icons.edit} />
      <IconButton icon={icons.delete} id={item.id} onPress={deleteTask} />
    </Container>
  );
};

Task.propTypes = {
  item: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
};

export default Task;
