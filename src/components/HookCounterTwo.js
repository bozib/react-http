import React, {useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive =()=>{
        for (let index = 0; index < 5; index++) {
            setCount(prevCount => prevCount + 1);
            
        }
    }
    return (
        <div>
            Count : {count}<br/>
            <button onClick= {() => setCount(initialCount)}>Reset</button><br/>
            <button onClick = {() => setCount(prevCount => prevCount + 1)}>Increment</button><br/>
            <button onClick = {() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick ={incrementFive}>Increment five</button>
            
        </div>
    )
}

export default HookCounterTwo
