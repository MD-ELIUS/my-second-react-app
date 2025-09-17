import { useState } from "react"

export default function Counter() {

    const handleAdd = () => {
        const newCount = count + 5 ;
        setCount(newCount)
    }

const [count, setCount] = useState(0)

    const counterStyle = {
        border: '2px solid yellow',
        padding:'20px'
    }

    return (
        <div style={counterStyle}>
            <h3>Count: {count} </h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}