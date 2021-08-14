import './App.css';
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import { data } from "../src/helper/data";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="card--bg">
        <div className="card">
          <h2>languages</h2>
          <div className="card-icons">
            {data.map((item, index) => <Card key={item.name} item={item} />)}

          </div>
        </div>
      </div> 
    </div>
    
  );
}

export default App;
