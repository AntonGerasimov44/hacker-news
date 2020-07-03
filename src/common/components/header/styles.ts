import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  width: 100%;
  background: rgb(255, 102, 0);
  display: flex;
  justify-content: space-between;
  padding: 2px;
  box-sizing: border-box;
  align-items: center;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  h2 {
    font-size: 14px;
    margin-left: 5px;
    font-weight: 700;
  }
`;

export const LogoContainer = styled.div`
  border: 1px solid #fff;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Links = styled.div`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const StyledLinkContainer = styled.div`
  padding: 0 5px;
  margin: 0;
  font-size: 14px;
  cursor: pointer;

  ${({ isVisibleBorder }: { isVisibleBorder?: boolean }) =>
    isVisibleBorder &&
    css`
      border-right: 1px solid #000;
    `};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
