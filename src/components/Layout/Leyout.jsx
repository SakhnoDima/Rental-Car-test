import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Container from "../Container/Container";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Main, Wrapper } from "./Leyout.styled";

const Layout = () => {
  return (
    <Wrapper>
      <Header />

      <Main>
        <Suspense fallback={<Loader />}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
