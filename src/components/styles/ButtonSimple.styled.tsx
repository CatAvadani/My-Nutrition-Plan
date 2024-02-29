import styled from "styled-components";

export const ButtonSimple = styled.button`
  background-color: ${({ theme }) => theme.colors.navItem};
  color: #fff;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 5rem;
  margin: 1rem 0;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;
