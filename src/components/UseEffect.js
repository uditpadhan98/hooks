import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [time,setTime]=useState(new Date().toString());
    const [message,setMessage]=useState("Functional Components");

    useEffect(()=>{
        console.log("component mounted or updated");
        const interval=setInterval(showDate,1000);

        return (()=>{
            console.log("cleaned up!");
            clearInterval(interval);
        })
    },[]);

    const showDate=()=>{
        setTime(new Date().toString());
    }
  return (
    <div>
        <h1>Use Effect</h1>
        <div>{time}</div>
        <button onClick={showDate}>Show Date</button>
        <div>{message}</div>
        <button onClick={()=>setMessage("Changed functional components")}>Change Message</button>
    </div>
  )
}
