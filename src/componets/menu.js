/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

const container = {
  overflow: "auto",
  height: "100%"
};

const ul = {
  display: "flex",
  alignItems: "center",
  minWidth: "300px",
  height: "100%",
  margin: "0",
  padding: "0",
  listStyle: "none",
  "& li": {
    margin: "0 15px",
    fontSize: "25px",
    "@media (max-width: 768px)": {
      fontSize: "22px",
      fontWeight: "bold"
    }
  }
};

const link = {
  textDecoration: "none",
  color: "#FFF",
  borderBottom: "2px solid transparent",
  transition: "all 0.25s ease-in-out",
  "&:hover": {
    color: "#FF5722",
    borderBottom: "2px solid currentColor"
  }
};

function Menu() {
  return (
    <nav css={container}>
      <ul css={ul}>
        <li>
          <Link to="/" css={link}>
            Leaflet Map
          </Link>
        </li>
        <li>
          <Link to="/google-map" css={link}>
            Google Map
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
