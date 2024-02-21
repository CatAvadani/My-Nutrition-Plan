import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  height: 8rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
