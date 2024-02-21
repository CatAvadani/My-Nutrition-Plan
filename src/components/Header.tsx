import { Container } from "./styles/Container.styled";
import {
  Logo,
  NavItem,
  NavList,
  Navigation,
  StyledHeader,
} from "./styles/Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Navigation>
          <Logo>My Nutrition Plan</Logo>
          <NavList>
            <NavItem>Home</NavItem>
            <NavItem>Explore</NavItem>
            <NavItem>About</NavItem>
            <NavItem className='icon'>
              <span>☼</span>
            </NavItem>
          </NavList>
        </Navigation>
      </Container>
    </StyledHeader>
  );
}
