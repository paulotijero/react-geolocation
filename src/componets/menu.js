/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

const ul = {
  display: "flex",
  margin: "0",
  padding: "0",
  listStyle: "none",
  "& li": {
    margin: "0 15px",
    fontSize: "25px"
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
    <nav>
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
