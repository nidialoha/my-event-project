import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // console.log(
  //   "🔄 Signup component rendered. isAuthenticated:",
  //   isAuthenticated
  // );

  const handleSignup = (e) => {
    e.preventDefault();
    const { email, password } = signupData;

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
    // console.log("Signup Data:", signupData);
    // login(); // 🔥 Setzt isAuthenticated auf true
    // console.log("✅ Navigation wird gestartet...");
    navigate("/login"); // 🔥 Navigiert zur Login-Seite von Patrick
  };

  const signup = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        body: JSON.stringify({
          email: `${signupData.email}`,
          password: `${signupData.password}`,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <div className="card bg-base-100 w-96 shadow-sm m-6"> */}
      <form onSubmit={handleSignup}>
        <div className="card shadow-sm h-[350px] w-[300px] m-8 flex justify-self-center">
          <div className="flex flex-col p-6">
            <h2 className="mb-3 font-black text-center ">SIGN UP</h2>
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
                value={signupData.email}
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
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                name="password"
                value={signupData.password}
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
              type="submit"
              className="mt-6 bg-slate-950 rounded-lg h-[35px] text-white hover:bg-stone-300 text-center content-center"
              // onClick={login}
              onClick={signup}
            >
              Sign up
            </button>

            {/* )} */}
          </div>
        </div>
      </form>
    </>
  );
}

export default Signup;
