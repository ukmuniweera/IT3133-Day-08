import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({ username: "", password: "", error: "" });
  const navigate = useNavigate();

  const getUserInputs = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev, [name]: value,
    }));
  };

  const authentication = () => {
    if (user.username === "admin" && user.password === "password123") {
      setUser({ username: "", password: "", error: "" });
      navigate("/dashboard");
    } else {
      setUser({ 'error': "Invalid Username or Password" });
    }
  };

  return (
    <div>
      <h1>Login here</h1>
      <table>
        <tr>
            <td>Username:</td>
            <td>
              <input type="text" name="username" onChange={getUserInputs} />
            </td>
        </tr>
        <tr>
            <td>Password:</td>
            <td>
              <input type="password" name="password" onChange={getUserInputs} />
            </td>
        </tr>
        <tr>
            <td colSpan={2} style={{ color: "red" }}>
              {user.error}
            </td>
        </tr>
      </table>
      <button onClick={authentication}>Login</button>
    </div>
  );
}
