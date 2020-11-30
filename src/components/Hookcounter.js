import React, {useState} from 'react'


function Hookcounter() {
    
       const [count, countIncrement] = useState(0)
       const [hoveres, hoverIncrement] = useState(0) 

    return (
        <div>
            <button onClick={()=>countIncrement(count + 1)} >Count {count}</button>
            <h2 onMouseOver={() => hoverIncrement(hoveres + 1)} > Hovered {hoveres} times</h2>
            
        </div>
    )
}

export default Hookcounter
