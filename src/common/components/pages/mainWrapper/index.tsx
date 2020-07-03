import React, { ReactElement } from "react";

import { MainContainer } from "./styles";

interface IProps {
  children: ReactElement;
}

const MainWrapper = ({ children }: IProps) => {
  return <MainContainer>{React.cloneElement(children)}</MainContainer>;
};

export default MainWrapper;
