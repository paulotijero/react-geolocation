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
  transition: "all 0.25s ease-in-out",
  "&:hover": {
    borderBottom: "2px solid currentColor"
  }
};

function ActiveLink(props) {
  function getProps({ isCurrent }) {
    return {
      style: {
        color: isCurrent ? "#FF5722" : "",
        borderBottom: isCurrent ? "2px solid currentColor" : ""
      }
    };
  }

  return <Link {...props} getProps={getProps} css={link} />;
}

function Menu() {
  return (
    <nav css={container}>
      <ul css={ul}>
        <li>
          <ActiveLink to="/">Leaflet Map</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/google-map">Google Map</ActiveLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
