import styled, { ThemeProvider } from "styled-components/native";
import theme from "./theme"; // theme를 import할 때 default로 가져와야 합니다.
import { StatusBar, Dimensions } from "react-native";
import Input from "./component/input";
import React, { useState } from "react";
import Task from "./component/Task";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  width: 100%;
  align-items: flex-end;
  padding: 0 20px;
`;
const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;

export default function App() {
  const width = Dimensions.get("window").width;

  const tempData = {
    1: { id: "1", text: "React", complete: "false" },
    2: { id: "2", text: "React-Native", complete: "false" },
    3: { id: "3", text: "RN", complete: "false" },
  };
  const [tasks, setTasks] = useState(tempData);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    // 빈텍스트는 추가X
    if (newTask.length < 1) {
      return;
    }
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: { id: ID, text: newTask, complete: false },
    };
    setNewTask("");
    setTasks({ ...tasks, ...newTaskObject });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>TODO List</Title>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Input
          placeholder="+ Add a Task"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
          onSubmitEditing={addTask}
        />

        <List width={width}>
          {Object.values(tasks)
            .reverse()
            .map((item) => (
              <Task key={item.id} text={item.text} />
            ))}
        </List>
      </Container>
    </ThemeProvider>
  );
}
