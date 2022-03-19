import styled from "styled-components";

interface ILabelProps {
  isDone: boolean;
}

export const TodoList = styled.ul`
  display: grid;
  gap: 1rem;
  padding: 0;
  margin-top: 5rem;
`;

export const Li = styled.li`
  box-shadow: 0 0 10px #3333332c;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * {
    padding: 1rem;
  }
`;

export const Label = styled.label<ILabelProps>`
  flex-grow: 1;
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "")};
`;

export const Button = styled.button<ILabelProps>`
  border: none;
  background-color: transparent;
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "")};
  cursor: pointer;
`;

export const ButtonRemove = styled(Button)`
  color: ${({ isDone }) => (isDone ? "#ff0000" : "")};
  display: ${({ isDone }) => (isDone ? "block" : "none")};
  text-decoration: none;
`;
