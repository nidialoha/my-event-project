
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import { useState } from "react";

function Login() {
  const { setUser, login } = useAuth();

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // console.log(
  //   "🔄 Login component rendered. isAuthenticated:",
  //   isAuthenticated
  // );

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginData;

    if (!email.trim() || !password.trim()) {
      setError("Please fill all the fields");
      return;
    }

    // ✅ Falls das Passwort zu kurz ist
    if (password.length < 6) {
      setError("");
      return;
    }
    // ✅ Falls die E-Mail kein "@" enthält (Basic Check)
    if (!email.includes("@")) {
      setError("");
      return;
    }

    // Wenn alle Prüfungen bestanden sind:
    setError("");
    // console.log("LoginData:", loginData);
    // await login(); // 🔥 Setzt isAuthenticated auf true
    // console.log("✅ Navigation wird gestartet...");
  };

  const fetchLogin = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password,
        }),
      });
      if (!res.ok) throw Error("Bad request");
      const data = await res.json();
      console.log(data);
      localStorage.setItem("token", data.token);
      setUser(data.user);
      await login();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <div className="card shadow-sm h-[350px] w-[300px] m-8 flex justify-self-center">
        <div className="flex flex-col p-6">
          <h2 className="mb-3 font-black text-center ">LOGIN</h2>
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              required
              placeholder="E-mail"
            />
          </label>
          <label className="input validator my-3">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required
              placeholder="Password"
              minlength={8}
              maxLength={30}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
          </label>
          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />
            At least one number
            <br />
            At least one lowercase letter
            <br />
            At least one uppercase letter
          </p>

          {error && <p className="text-red-500">{error}</p>}
          <button
            // to={"/"}

            className="mt-6 bg-slate-950 rounded-lg h-[35px] text-white hover:bg-stone-300 text-center content-center"
            // onClick={login}
            onClick={fetchLogin}
          >
            Login
          </button>
          <p className="text-center">
            no account yet? hier{" "}
            <NavLink className="hover:text-blue-500" to="/sign-up">
              Signup!
            </NavLink>
          </p>

          {/* )} */}
        </div>
      </div>
    </form>

    // <div>
    //   <button onClick={login}>Login</button>
    // </div>
  );
}

export default Login;
