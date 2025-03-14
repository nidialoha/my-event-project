import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  console.log(isAuthenticated);

  const handleLogin = () => {
    navigate("sign-up");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1 ml-4 font-bold">
          <NavLink to="/">FESTIVAL-HIGHLIGHTS 2025</NavLink>
        </div>

        {isAuthenticated ? (
          <p className="mr-6">Hello, User Name!</p>
        ) : (
          <button
            onClick={handleLogin}
            className="mr-6 hover:underline"
            to="Sign-up"
          >
            Hello, log in!
          </button>
        )}

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            {isAuthenticated ? (
              <>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      {/* <span className="badge">New</span> */}
                    </a>
                  </li>
                  <li>
                    <a>Create New Events</a>
                  </li>
                  <li>
                    <a onClick={handleLogout}>Logout</a>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a onClick={handleLogin}>Login</a>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
