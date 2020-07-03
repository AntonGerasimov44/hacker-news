import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  background: rgb(246, 246, 239);
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

export const NewsElement = styled.div`
  margin-top: 5px;
  box-sizing: border-box;
  p {
    color: #828282;
    font-size: 14px;
  }

  a {
    color: #000;
    font-size: 14px;
    margin-left: 2px;
    text-decoration: none;

    :visited {
      color: #828282;
    }
  }

  span {
    color: #828282;
    font-size: 12px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: auto;
    height: auto;
    margin-left: 2px;
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  margin-left: 25px;
  p {
    color: #828282;
    font-size: 10px;
  }
`;

export const HideButton = styled.div`
  color: #828282;
  font-size: 10px;
  border-left: 1px solid #828282;
  border-right: 1px solid #828282;
  padding: 0 4px;
  margin: 0 4px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const MoreButton = styled.div`
  color: #828282;
  font-size: 14px;
  margin-top: 5px;
  cursor: pointer;
  margin-top: 15px;
  margin-left: 20px;
`;

export const StyledLink = styled(Link)`
  color: #828282 !important;
  font-size: 10px !important;
`;
