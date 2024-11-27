import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [user, setUser] = useState({usename:"", password:"", error:""});
    const navigate = useNavigate();
    
  return (
    <div>
        <table>
            <tr>
                <td>
                    <input
                     type="text"
                     value={userName} 
                    />
                </td>
            </tr>
        </table>
    </div>
  )
}
