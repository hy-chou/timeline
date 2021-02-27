import * as React from "react";
import Timeline from "../components/Timeline";

// styles
const pageStyles = {
  width: "max-content",
  margin: "auto",
  padding: "5rem",
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Timeline | hy-chou</title>
      <h1>
        <span style={{ color: "#104090" }}>Timeline</span> by hy-chou
      </h1>
      <Timeline />
    </main>
  );
};

export default IndexPage;
