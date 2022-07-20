import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    function Like(){
        setCount(count+1)
      }
      function Dislike(){
        setCount(count-1)
      }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Like}>Like</button>
            <button onClick={Dislike}>Dislike</button>
        </div>
    )
}
export default Counter;