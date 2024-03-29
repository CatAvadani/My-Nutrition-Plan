import styled from "styled-components";

export const Logo = styled.div`
  color: #6acc01;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;

  img {
    width: 3rem;
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  align-items: center;
  justify-content: center;

  li {
    font-size: 1.5rem;
  }
  .saved-recipes {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.navItem};

    &:hover {
      background-color: ${({ theme }) => theme.colors.buttonHover};
      a {
        color: white;
      }
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    padding: 0.5rem;
    gap: 0.5rem;

    li {
      padding: 0.5rem 1rem;
      border-radius: 5rem;
    }
  }
`;

export const NavHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const Button = styled.button`
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  &:hover {
    color: gray;
  }
  &.nav-toggle {
    display: none;
  }

  @media (max-width: 768px) {
    &.nav-toggle {
      display: block;
    }
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 1.5rem;
  border-radius: 5rem;
  font-size: 1.1rem;
  font-weight: 100;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  text-decoration: none;

  .navLink {
    text-decoration: none;
    transition: all 0.3s ease;
    color: ${({ theme }) => theme.colors.text};
    &:hover {
      color: ${({ theme }) => theme.colors.navItem};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.navItem};
    transition: all 0.3s ease;
  }

  &.icon {
    background-color: transparent;
    &:hover {
      //   background-color: transparent;
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    background-color: ${({ theme }) => theme.colors.navItem};
    .navLink {
      color: white;
      font-size: 1.1rem;
      &:hover {
        color: black;
      }
    }
    &:hover {
      background-color: white;
    }
  }
`;
