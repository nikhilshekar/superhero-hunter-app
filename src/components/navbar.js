import marvel_logo from "../assets/logo.jpg";
import dc_logo from "../assets/DC_logo.jpeg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function Navbar({ setSearch, search }) {
  const navigate = useNavigate();

  const searchField = (e) => {
    setSearch(e.target.value);
    navigate("/");
  };

  return (
    <header>
      <nav className="navbar">
        <div className="container-fluid">
          <Link className="navbar-brand ml-6" to="/">
            <img src={marvel_logo} alt="" width="220" height="60" />
          </Link>

          <form className="search d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              autoComplete="off"
              id="search"
              value={search}
              onChange={searchField}
            />
          </form>

          <Link className="navbar-brand" to="/">
            <img
              src={dc_logo}
              alt=""
              width="100"
              height="100"
              style={{ borderRadius: "50%" }}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
