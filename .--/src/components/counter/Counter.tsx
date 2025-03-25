import { useState } from "react";

const Counter = () => {
        const [count, setcount] = useState(90000)
        const handeplus = () =>{
            setcount(count + 1)
        }
        const handemenos = () =>{
            setcount(count - 1)
        }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handeplus}>+</button>
            <button onClick={handemenos}>-</button>
        </div>

    )
}

export default Counter;