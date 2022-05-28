import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/">
      <h1 className="mt-8 mb-3 text-3xl">Journal App</h1>
    </Link>
  );
};

export default Header;
