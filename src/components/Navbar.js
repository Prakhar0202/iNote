import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          iNote
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : {}
                } `}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
          </ul>

          {!localStorage.getItem("token") ? (
            <form className="d-flex">
              <Link
                className="btn btn-secondary me-md-2"
                to="/login"
                type="button"
              >
                Login
              </Link>
              <Link className="btn btn-secondary" to="/signup" type="button">
                SignUp
              </Link>
            </form>
          ) : (
            <button
              className="btn btn-secondary"
              onClick={handleLogout}
              type="button"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
