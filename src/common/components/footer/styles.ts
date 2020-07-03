import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  border-top: 2px solid rgb(255, 102, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(246, 246, 239);
`;

export const LinksContainer = styled.div`
  display: flex;
  margin-top: 15px;

  a {
    color: #000;
    font-size: 11px;
    text-decoration: none;
    border-right: 1px solid #828282;
    padding: 0 5px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  color: rgb(130, 130, 130);
  font-size: 14px;
  margin-top: 10px;
  padding-bottom: 20px;

  input {
    border: 1px solid rgb(118, 118, 118);
    background: rgb(255, 255, 255);
    margin-left: 10px;
    padding: 1px 2px;
    max-width: 135px;
    border-radius: 2px;
    box-sizing: border-box;
  }
`;
