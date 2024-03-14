import './counterCard.css'
import { useState, useEffect } from "react";

export const CounterCard = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    useEffect(()=>{
        console.log('me cargo');
    },[])
    useEffect(()=>{
        console.log('me actualizo');
    })
    useEffect(()=>{
        console.log('se actualiza');
    },[count])


    return (
        <div className="counterCard">
            My count is: {count}
            <div className="changeState" onClick={()=> increment()}>+</div>
            <div className="changeState" onClick={()=> decrement()}>-</div>
        </div>
    )
}