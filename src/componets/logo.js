/** @jsx jsx */
import { jsx } from "@emotion/core";

const container = {
  margin: "0",
  marginLeft: "15px",
  fontWeight: "unset",
  fontSize: "16px",
  "&:hover a": {
    color: "#FF5722"
  },
  "& a": {
    marginLeft: "5px",
    textDecoration: "none",
    color: "#fff",
    transition: "all 0.25s ease-in-out"
  }
};

function Logo() {
  return (
    <h1 css={container}>
      <span role="img" aria-label="Author of the webside">
        👨‍💻
      </span>
      <a href="https://paulotijero.dev">Paulo Tijero</a>
    </h1>
  );
}

export default Logo;
