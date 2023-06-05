import React, { useState } from 'react'
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';
import { CounterContext } from '../CounterContext';

export default function UseContext() {
  const [counter,setCounter]=useState(0);
  const increase=()=>{
    setCounter(counter+1);
  }
  const decrease=()=>{
    setCounter(counter-1);
  }
  return (
    <div>
      <h1>Use Context</h1>
        <h3>{counter}</h3>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <hr />
        <CounterContext.Provider value={{counter,setCounter}}>
          <Fcomponent/>
          <hr />
          {/* <Ccomponent/> */}
        </CounterContext.Provider>
    </div>
  )
}
