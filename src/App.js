import { useState } from "react";
import React from "react";

function App() {
  const [count, setCount] = useState(0);
  console.log(count)
  console.log(setCount)
  return (
    <div className="App">
    {/* <h1>likes: {likes}</h1>
      <button onClick={Like}>Like</button>
      <button onClick={Dislike}>Dislike</button> */}
    </div>
  );
}

export default App;
