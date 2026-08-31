import { useState } from "react"

const Counter = () => {
    //
    const [num, setNum] = useState(0)
    // let count = 0;
    // const incr = () => {
    //     count++;
    //     console.log(count)
    // }

    const incr = () => {
        setNum(num + 1);
    }
    const decr = () => { setNum(num - 1) }


    const reset = () => {
        setNum(0)
    }
    return (
        <>
            <h1>Counter project using React</h1>
            <p>{num}</p>
            <button onClick={incr}>Increment</button>
            <button onClick={decr}>Decr</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}


export default Counter;

//hooks:
//  useState: 
