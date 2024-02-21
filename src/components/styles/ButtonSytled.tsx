import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 2rem;
  background-color: #6acc01;
  border: none;
  border-radius-right: 50%;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #5fbc00;
  }
`;
