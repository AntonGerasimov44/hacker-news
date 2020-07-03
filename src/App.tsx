import React, { Fragment } from "react";

import { BrowserRouter } from "react-router-dom";
import GlobalStyles, { GlobalFonts } from "GlobalStyles";
import Pages from "common/components/pages";
import MainWrapper from "common/components/pages/mainWrapper";
import Header from "common/components/header";
import Footer from "common/components/footer";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <GlobalFonts />
      <MainWrapper>
        <Fragment>
          <Header />
          <Pages />
          <Footer />
        </Fragment>
      </MainWrapper>
    </BrowserRouter>
  );
};

export default App;
