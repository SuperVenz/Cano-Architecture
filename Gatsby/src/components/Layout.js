import React from "react";
import Reset from "../styles/reset.js";
import { Helmet } from "react-helmet";
import MobileNav from "./MobileNav.js";
import Form from "./Form.js";
import Nav from "./Nav.js";
function Layout({ children, pageMeta }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Cano Architecture`}</title>
        <link
          rel="canonical"
          href="https://nostalgic-bohr-4c3187.netlify.app/"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="author" content="Alec Venzor" />
        <html lang="en" />
      </Helmet>
      <Reset />
      <Nav />
      <div>{children}</div>
      <Form />
      <MobileNav />
    </div>
  );
}

export default Layout;
