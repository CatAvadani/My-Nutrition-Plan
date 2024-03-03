import styled from "styled-components";

export const ThemeButton = styled.button`
  position: fixed;
  right: 4rem;
  bottom: 4rem;
  font-size: 3rem;
  padding: 1rem;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.altBtn};
  color: ${({ theme }) => theme.colors.altText};

  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
  &:active {
    scale: 0.95;
  }

  // settings for the theme icons which are from Tailwind heroicons
  svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 0.7rem;
    right: 1.5rem;
    bottom: 1.5rem;
  }
`;
