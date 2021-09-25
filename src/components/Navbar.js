import React, { useState } from "react";
import {
  Nav,
  Container,
  Hamburger,
  LinkWrapper,
  Menu,
  MenuLink,
  Button,
} from "./Navbar.styles";
import { ReactComponent as LogoIcon } from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Container>
        <LogoIcon />
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <Menu isOpen={isOpen}>
          <LinkWrapper>
            <MenuLink href="#">Search</MenuLink>
            <MenuLink href="#">Login</MenuLink>
            <Button>Join Now</Button>
          </LinkWrapper>
        </Menu>
      </Container>
    </Nav>
  );
};

export default Navbar;
