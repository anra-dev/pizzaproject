import './App.css';
import PizzaList from "./pizzerias/pizzeriaslist";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://bit.ly/book-pizza" className="App-logo" alt="logo" />
        <p>
          Web App for Pizza Lovers.
        </p>
        <h1>
          Pizza vs Pizza
        </h1>
        <PizzaList/>
      </header>
    </div>
  );
}

export default App;
