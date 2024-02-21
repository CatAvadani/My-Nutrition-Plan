import { useState } from "react";
import { BarsIcon } from "./styles/BarsIcon.styled";
import {
  Button,
  Logo,
  NavHeader,
  NavItem,
  NavList,
} from "./styles/Header.styled";
import { Navigation } from "./styles/Navigation.styled";

export default function Header() {
  const [showLinks, setShowLinks] = useState(true);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <Navigation>
      <NavHeader>
        <Logo>
          <span>
            <img src='/public/logo.png' alt='logo' />
          </span>{" "}
          My Nutrition Plan
        </Logo>
        <Button className='nav-toggle' onClick={toggleLinks}>
          <BarsIcon className='fa-solid fa-bars' />
        </Button>
      </NavHeader>
      {showLinks && (
        <NavList>
          <NavItem>Home</NavItem>
          <NavItem>Explore</NavItem>
          <NavItem>About</NavItem>
        </NavList>
      )}
    </Navigation>
  );
}
