/** @jsx jsx */
import { jsx } from "@emotion/core";

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  p: {
    fontSize: "4em",
    textAlign: "center"
  }
};

function RequestLocation() {
  return (
    <div css={container}>
      <p>
        Please allow location access{" "}
        <span role="img" aria-label="Face With Rolling Eyes">
          🙄
        </span>
      </p>
    </div>
  );
}

export default RequestLocation;
