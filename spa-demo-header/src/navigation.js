import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav">
      <Link to="/page1" className="link">
        Page 1
      </Link>
      <Link to="/page2" className="link">
        Page 2
      </Link>
    </nav>
  );
};

export default Navigation;