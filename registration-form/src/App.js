import "./styles.css";
import { useState } from "react";
export default function App() {
  const [report, setReport] = useState([]);

  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    phone: ""
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    setReport([...report, data]);
    setData({ username: "", password: "", email: "", phone: "" });
  };

  return (
    <div className="form">
      <div>
        <form className="data">
          <div className="lables">
            <label>
              User Name :
              <input
                type="text"
                autoCapitalize="On"
                autoComplete="off"
                value={data.username}
                name="username"
                id="username"
                onChange={handleInput}
              />
            </label>
            <label>
              Password :
              <input
                type="password"
                value={data.password}
                name="password"
                id="password"
                onChange={handleInput}
              />
            </label>
            <label>
              Email :
              <input
                type="email"
                autoComplete="off"
                value={data.email}
                name="email"
                id="email"
                onChange={handleInput}
              />
            </label>
            <label>
              Phone Number :
              <input
                type="text"
                autoComplete="off"
                value={data.phone}
                name="phone"
                id="phone"
                onChange={handleInput}
              />
            </label>
          </div>
        </form>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <div>
        {report.map((item) => {
          return (
            <div className="inputs">
              <p>Username: {item.username}</p>
              <p>Email: {item.email}</p>
              <p>Phone Number:{item.phone}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
