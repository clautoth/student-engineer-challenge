import React from "react";
import Counter from "./components/counter/Counter";
import Autocomplete from "./components/autocomplete/Autocomplete";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Counter />
      <Autocomplete placeholder="Search..." />
    </div>
  );
}

export default App;
