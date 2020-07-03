import React from "react";

import {
  MainContainer,
  LinksContainer,
  LogoContainer,
  Links,
  StyledLinkContainer,
  StyledLink,
} from "./styles";
import logoImage from "common/assets/header/y18.gif";
import { headerMenuLinks } from "common/constants";

const Header = () => {
  return (
    <MainContainer>
      <LinksContainer>
        <LogoContainer>
          <img src={logoImage} alt={"logo"} />
        </LogoContainer>
        <h2>Hacker News</h2>
        <Links>
          {headerMenuLinks.map((elem, key) => (
            <StyledLinkContainer isVisibleBorder={true} key={key}>
              <StyledLink to={"/"}>{elem}</StyledLink>
            </StyledLinkContainer>
          ))}
        </Links>
      </LinksContainer>
      <StyledLinkContainer>
        <StyledLink to={"/"}>login</StyledLink>
      </StyledLinkContainer>
    </MainContainer>
  );
};

export default Header;
