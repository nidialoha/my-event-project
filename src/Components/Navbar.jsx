import { NavLink } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

function Navbar() {
  const { isAuthenticated, login, logout } = useAuth();
  

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1 ml-4 font-bold">
          <NavLink to="/">FESTIVAL-HIGHLIGHTS 2025</NavLink>
        </div>

        {isAuthenticated ? (
          <p className="mr-6">Hello, User Email</p>
        ) : (
          <NavLink className="mr-6 hover:underline" to="Login">
            Hello, log in!
          </NavLink>
        )}

        {isAuthenticated ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <>
          <NavLink to="Login" className="mr-6">
              <button>
                Login
              </button>
            </NavLink>
          <NavLink to="sign-up">
              <button>
                Sign up
              </button>
            </NavLink>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;
