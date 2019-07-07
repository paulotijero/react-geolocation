/** @jsx jsx */
import { jsx } from "@emotion/core";

import Logo from "./logo";
import Footer from "./footer";
import Menu from "./menu";

const container = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "10vh",
  width: "100vw",
  background: "#212121",
  color: "#fff"
};

function Header() {
  return (
    <header css={container}>
      <Logo />
      <Menu />
      <Footer />
    </header>
  );
}

export default Header;
