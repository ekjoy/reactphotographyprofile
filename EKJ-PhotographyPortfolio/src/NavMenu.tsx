import React from "react";

function NavMenu() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-dark">
      <div className="container">
        <a
          className="navbar-brand"
          style={{
            color: "white",
          }}
          href="http://www.eldhosekjoy.com/"
        >
          ELDHOSE K JOY
        </a>
        <a
          className="navbar-brand align-content-end"
          style={{
            color: "white",
          }}
          href="/"
        >
          Latest Topics
        </a>
      </div>
    </nav>
  );
}

export default NavMenu;
