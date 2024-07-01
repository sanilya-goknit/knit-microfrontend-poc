import React from "react";
import "./root.component.css";
import {BrowserRouter, Link} from "react-router-dom";

export default function Root(props) {
  return (
      <BrowserRouter>
      <nav className="nav">
          <Link to="/page1" className="link">
              Page 1
          </Link>
          <Link to="/page2" className="link">
              Page 2
          </Link>
      </nav>
      </BrowserRouter>
  );
}
