import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Quotes } from "./Components/Quotes";
import Navigation from "./Components/Navigation";
import Login from "./Components/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Quotes />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
