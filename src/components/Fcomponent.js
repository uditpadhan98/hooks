import React, { useContext } from "react";
import { CounterContext } from "../CounterContext";

function Fcomponent(){
    const {counter,setCounter}=useContext(CounterContext);
    return(
        <div>
            <h1>Functional Component</h1>
            {/* <h2>{counter}</h2> */}
            <h2>{counter}</h2>
            <button onClick={()=>setCounter(counter+1)}>increase</button>
            <hr />
            <Fchild />
        </div>
    )
}

const Fchild=()=>{
    const {counter,setCounter}=useContext(CounterContext);
    return(
        <div>
            <h3>Functional Child Component</h3>
            {/* <h4>{counter}</h4> */}
            <h5>{counter}</h5>
            <button onClick={()=>setCounter(counter-1)}>decrease</button>
        </div>
    )
}

export default Fcomponent;