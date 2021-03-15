import React from "react";
import { graphql, Link, navigate } from "gatsby";

const TRAILING_SLASHES = true;

const ComponentName = ({ data }) => {
  console.log("trailing slash support");
  console.log(TRAILING_SLASHES);
  return (
    <main style={{ padding: 16 }}>
      <i className="nes-mario" />
      <h1>Testing Trailing Slashes</h1>
      <h2>Pages created from createPages</h2>
      <section
        style={{
          display: `grid`,
          gridTemplateColumns: `repeat(auto-fit, minmax(480px, 1fr))`,
          gridGap: 16,
          marginBottom: 32,
        }}
      >
        <Link to="/test-path">
          <div className="nes-btn">
            <div>Non-trailing Path</div>
            <div>/test-path</div>
          </div>
        </Link>
        <Link to="/test-path/">
          <div className="nes-btn">
            <div>Trailing Path</div>
            <div>/test-path/</div>
          </div>
        </Link>
      </section>
      <h2>Using navigate</h2>
      <section
        style={{
          display: `grid`,
          gridTemplateColumns: `repeat(auto-fit, minmax(480px, 1fr))`,
          gridGap: 16,
          marginBottom: 32,
        }}
      >
        <button onClick={() => navigate("/test-path")}>
          <div>
            <div>Non-trailing Path</div>
            <div>/test-path</div>
          </div>
        </button>
        <button onClick={() => navigate("/test-path/")}>
          <div>
            <div>Trailing Path</div>
            <div>/test-path/</div>
          </div>
        </button>
        <button onClick={() => navigate("/test-path#asdf")}>
          <div>
            <div>Non-trailing Path</div>
            <div>/test-path#asdf</div>
          </div>
        </button>
        <button onClick={() => navigate("/test-path/#asdf")}>
          <div>
            <div>Trailing Path</div>
            <div>/test-path/#asdf</div>
          </div>
        </button>
      </section>
      <h2>Pages created from a collection file system routes</h2>
      <section
        style={{
          display: `grid`,
          gridTemplateColumns: `repeat(auto-fit, minmax(240px, 1fr))`,
          gridGap: 16,
          marginBottom: 32,
        }}
      >
        {data.allLevel.nodes.map((level) => (
          <Link to={level.gatsbyPath}>
            <div className="nes-btn">
              <div>{level.name}</div>
              <div>Setting: {level.setting}</div>
            </div>
          </Link>
        ))}
      </section>
      <h2>Pages created from client only file system routes</h2>
      <section
        style={{
          display: `grid`,
          gridTemplateColumns: `repeat(auto-fit, minmax(480px, 1fr))`,
          gridGap: 16,
          marginBottom: 32,
        }}
      >
        <Link to="/test/asdf">
          <div className="nes-btn">
            <div>Bad Path</div>
            <div>(/test/asdf) doesn't have trailing slash</div>
          </div>
        </Link>
        <Link to="/test/asdf/">
          <div className="nes-btn">
            <div>Bad Path</div>
            <div>(/test/asdf/) has trailing slash in Link tag</div>
          </div>
        </Link>
      </section>
    </main>
  );
};

export const query = graphql`
  {
    allLevel {
      nodes {
        id
        name
        setting
        gatsbyPath(filePath: "/{Level.name}")
      }
    }
  }
`;

export default ComponentName;
