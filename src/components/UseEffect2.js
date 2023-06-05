import React,{useState} from 'react';
import UseEffect from './UseEffect';

export default function UseEffect2() {
    const [flag,setFlag]=useState(true);
  const toggle=()=>{
    return setFlag(!flag);
  }
  return (
    <div>
        <h1>Use Effect</h1>
        <button onClick={toggle}>toggle</button>
      {flag ? <UseEffect/>:""}
    </div>
  )
}
