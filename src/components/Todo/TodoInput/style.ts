import styled from "styled-components";

export const TodoFrom = styled.form`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 3fr 1fr;

  input,
  button {
    padding: 0.5rem 1rem;
  }
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  box-shadow: 0 0 10px #0000001a;

  &:focus {
    outline-color: #1ea2fa3d;
  }
`;

export const Button = styled.button`
  background-color: #1ea2fa;
  border: 0;
  color: #fff;
  cursor: pointer;
`;
