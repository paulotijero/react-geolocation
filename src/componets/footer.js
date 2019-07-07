/** @jsx jsx */
import { jsx } from "@emotion/core";

const container = {
  margin: "0",
  marginRight: "20px",
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

function Footer() {
  return (
    <footer>
      <h1 css={container}>
        <span role="img" aria-label="Soruce code">
          📝
        </span>
        <a href="https://github.com/paulotijero/react-geolocation">Github</a>
      </h1>
    </footer>
  );
}

export default Footer;
