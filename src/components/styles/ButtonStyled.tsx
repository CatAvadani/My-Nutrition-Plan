import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 2rem;
  background-color: white;
  border: none;
  border-radius: 0 2rem 2rem 0;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #5fbc00;
  }
`;
