import "./App.css";
import Card from "./Component/Card";
import data from "./App_data";

function App() {
  return (
    <div className="App">
      <header>
        <h1 style={{ margin: "0, auto" }}>Your App</h1>
      </header>
      <div className="card">
        {data.map((item) => {
          return <Card name={item.name} src={item.src} />;
        })}
      </div>
    </div>
  );
}

export default App;
