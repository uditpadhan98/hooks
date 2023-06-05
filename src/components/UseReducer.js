import React, { useReducer, useState } from 'react'

const initialState=0;

function reducer(state,action){
    switch (action.type){
        case "increase":
            return state+1;
        case "decrease":
            return state-1;
        default:
            return new Error();
    }
}

export default function UseReducer() {
    // const [counter,setCounter]=useState(0);
    const [state,dispatch]=useReducer(reducer,initialState);

    // const increase=()=>{
    //     setCounter(counter+1);
    // }

    // const decrease=()=>{
    //     setCounter(counter-1);
    // }
  return (
    <div>
        <h1>UseReducer</h1>
        <h2>{state}</h2>
        <div>
            <button onClick={()=>dispatch({type:"increase"})}>Increase</button>
            <button onClick={()=>dispatch({type:"decrease"})}>decrease</button>
        </div>
    </div>
  )
}
