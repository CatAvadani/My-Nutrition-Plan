import { useState } from "react";
import { Link } from "react-router-dom";
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
        <Link className='logoLink' to='/'>
          <Logo>
            <span>
              <img src='/public/logo.png' alt='logo' />
            </span>{" "}
            My Nutrition Plan
          </Logo>
        </Link>
        <Button className='nav-toggle' onClick={toggleLinks}>
          <BarsIcon className='fa-solid fa-bars' />
        </Button>
      </NavHeader>
      {showLinks && (
        <NavList>
          <NavItem>
            <Link className='navLink' to='/'>
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link className='navLink' to='/explore'>
              Explore
            </Link>
          </NavItem>
          <NavItem>
            <Link className='navLink' to='/about'>
              About
            </Link>
          </NavItem>
        </NavList>
      )}
    </Navigation>
  );
}
