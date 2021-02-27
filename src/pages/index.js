import * as React from "react";
import Timeline from "../components/Timeline";

// styles
const pageStyles = {
  padding: "5rem",
};
const headerStyles = {
  textAlign: "center",
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Timeline | hy-chou</title>
      <h1 style={headerStyles}>
        <span style={{ color: "#104090" }}>Timeline</span> by&nbsp;hy&#8209;chou
      </h1>
      <Timeline />
    </main>
  );
};

export default IndexPage;
