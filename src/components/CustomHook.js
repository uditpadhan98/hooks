import React from 'react'
import useCounter from '../useCounter';
import Helper from './Helper';

export default function CustomHook() {
     const [counter,increase,decrease,reset]=useCounter(0);
  return (
    <div>
        <h1>Custom Hook</h1>
        <h2>{counter}</h2>
        <div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
        <Helper/>
    </div>
  )
}
