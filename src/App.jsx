import { useState } from "react";
import './App.css';
function App() {
  const [password, setPassword] = useState("");
  const changePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
    const length = 12; 
    let newPass = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPass += chars[randomIndex];
    }
    setPassword(newPass);
  }
  return (
    <>
      <div>
        <h1>Random Password Generator</h1>
        <h2>
          “Generate strong, secure passwords instantly with a single click.”
        </h2>
        <button onClick={changePassword}>Generate Password</button>
        {password && <p>{password}</p>}
      </div>
    </>
  );
}

export default App;
