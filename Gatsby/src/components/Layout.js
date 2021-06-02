import React from "react";
import Reset from "../styles/reset.js";
import { Helmet } from "react-helmet";
import MobileNav from "./MobileNav.js";
import Form from "./Form.js";
import Nav from "./Nav.js";
function Layout({ children }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
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
