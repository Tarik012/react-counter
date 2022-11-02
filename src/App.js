import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0); // je déclare mon hook
  return (
    <div className="App-container">
      <Header />
      <div className="main">
        <div className="div-button-haut">
          <button
            onClick={() => {
              // j'appelle l'état du hook dans mon événement click
              setCounter(counter - 1);
            }}
          >
            {counter === 0 ? "" : "-"}
          </button>
          <p>{counter}</p>
          <button
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            {counter === 10 ? "" : "+"}
          </button>
        </div>
        <button
          className="btn-reset"
          onClick={() => {
            setCounter(0);
          }}
        >
          Reset
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
