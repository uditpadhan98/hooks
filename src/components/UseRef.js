import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {
    const [name,setName]=useState("");
    const inputEl=useRef("");
    const [counter,setCounter]=useState(0);
    const previousCounter=useRef("");

    useEffect(()=>{
        previousCounter.current=counter;
    },[counter])

    const resetInput=()=>{
        setName("");
        inputEl.current.focus();
        console.log(inputEl.current.value);
    }
  return (
    <div>
        <h1>UseRef</h1>
        <hr />
        <div>
            <input 
            ref={inputEl}
            type="text" 
            name='name'
            autoComplete='off'
            value={name}
            onChange={(e)=>setName(e.target.value)}/>
            <button onClick={resetInput}>Reset</button>
        </div>
        <div>My Name is {name}</div>
        <div>
            <h1>Random counter : {counter}</h1>
            {typeof previousCounter.current!=="undefined" &&
            (<h2>Previous Counter : {previousCounter.current}</h2>)}
            <button onClick={(e)=>setCounter(Math.ceil(Math.random()*100))}>Generate Number</button>
        </div>
    </div>
  )
}
