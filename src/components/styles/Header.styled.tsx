import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 0.4rem 0;
  h1 {
    padding-left: 1rem;
    font-family: "Roboto", sans-serif;
  }
`;

export const Navigation = styled.nav`
  color: ${({ theme }) => theme.colors.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  color: #6acc01;
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 1;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`;

export const NavItem = styled.li`
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 1.5rem;
  border-radius: 5rem;
  font-size: 1.3rem;
  font-weight: semibold;
  background-color: ${({ theme }) => theme.colors.navItem};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  span {
    color: black;
    font-size: 1.7rem;
  }
  &:hover {
    background-color: gray;
    transition: all 0.3s ease;
  }

  &.icon {
    background-color: transparent;
    &:hover {
      //   background-color: transparent;
    }
  }
`;
