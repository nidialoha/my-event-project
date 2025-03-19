import { useAuth } from '../Context/AuthProvider';

function Login() {
    const {setUser}=useAuth ();
    const login = async () => {
        try {
            const res = await fetch('http://localhost:3001/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({
                    email: "user@example.com",
                    password: "password123"
                })
            })
            if (!res.ok) throw Error("Bad request");
            const data = await res.json();
            console.log(data);
            localStorage.setItem('token', data.token);
            setUser(data.user);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div><button onClick={login}>Login</button></div>
  )
}

export default Login