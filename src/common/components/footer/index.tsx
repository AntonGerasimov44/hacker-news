import React from "react";

import { MainContainer, LinksContainer, SearchContainer } from "./styles";
import { footerMenuLinks } from "common/constants";

export const Footer = () => {
  return (
    <MainContainer>
      <LinksContainer>
        {footerMenuLinks.map((elem, key) => (
          <a href={"/"} key={key}>
            {elem}
          </a>
        ))}
      </LinksContainer>
      <SearchContainer>
        Search: <input />
      </SearchContainer>
    </MainContainer>
  );
};

export default Footer;
