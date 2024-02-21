import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.footer};
  // color: ${({ theme }) => theme.colors.text};
  color: white;
  text-align: center;
  width: 100%;
  padding: 1rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 100;
  height: 100%;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  li {
    margin: 0 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

// Footer icons

export const FontAwesomeIcon = styled.i`
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.navItem};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: gray;
  }
`;
