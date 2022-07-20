import { useState } from "react";
import React from "react";
import Counter from "./components/Counter";

function App() {
  const [value, setValue] = useState('прикол')
  
  
  return (
    <div className="App"> 
      <Counter/>
    </div>
  );
}

export default App;
