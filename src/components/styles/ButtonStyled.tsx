import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 2rem;
  background-color: white;
  border: none;
  border-radius: 0 2rem 2rem 0;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1rem;
    font-size: 1.1rem;
  }
`;
