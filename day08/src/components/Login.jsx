import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [user, setUser] = useState({usename:"", password:"", error:""});
    const navigate = useNavigate();
    const getUserInputs=(e)=>{
        const{name,value}=e.terget;
        setUser((prev)=>({
            ...prev,[name]:value
        }))
    }
    const authentication=()=>{
        if(user.usename==="admin" && user.password==="password123"){
            setUser({usename:"", password:"", error:""});
            navigate('/dashboard');
        }else{
            setUser({'error':"Invalid Username or Password"});
        }
    }
  return (
    <div>
        <table>
            <tr>
                <td>Username:</td>
                <td><input type="text" name="usename" onChange={getUserInputs}/></td>
            </tr>
            <tr>
                <td>Password:</td>
                <td><input type="password" name="password" onChange={getUserInputs}/></td>
            </tr>
            <tr>
                <td style={{color:'red'}} colspan={2}>Username:</td>
            </tr>
        </table>
        <button onClick={authentication}>Login</button>
    </div>
  );
}
