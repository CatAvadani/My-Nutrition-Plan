import styled from "styled-components";

export const BarsIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    padding: 0;
    font-size: 1.5rem;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.navItem};
    }
  }
`;
