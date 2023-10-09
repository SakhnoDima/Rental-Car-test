import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Container from "../Container/Container";
import Loader from "../Loader/Loader";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </main>
      {/* <Footer>
        <Link href="https://github.com/SakhnoDima">
          <AiFillGithub />
        </Link>
        <Text>&copy; {new Date().getFullYear()} Movie Search </Text>
      </Footer> */}
    </div>
  );
};

export default Layout;
