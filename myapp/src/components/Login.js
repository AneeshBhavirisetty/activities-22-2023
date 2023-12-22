import { useState } from "react";
import axios from "axios";

export const Login = () => {
    const [emailId, setEmailId] = useState('');
    const [passWord, setPassword] = useState('');
  
    const handleLogin = async () => {
      try {
        const response = await axios.post('http://localhost:1223/customer/login', {
          email: emailId,
          password: passWord,
        }).then(console.log("vachinidi"));
      } catch (error) {
        console.error('Error during login:', error.response.data);
      }
    };
  
    return (
      <div>
        <h2>Login</h2>
        <form>
          <label>
            Username:
            <input type="text" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={passWord} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          <br />
         
        </form>
      </div>
    );
  };