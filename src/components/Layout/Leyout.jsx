import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>SitBar</div>
      <main>
        <Suspense fallback={<p>Loading ... </p>}>
          <Outlet />
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
