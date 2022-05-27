import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/drafts" className="text-bold text-sky-600 underline">
        drafts
      </Link>
      <span> </span>
      <Link to="/prompts" className="text-bold text-sky-600 underline">
        prompts
      </Link>
    </nav>
  );
};

export default Navbar;
