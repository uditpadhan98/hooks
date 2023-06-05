import React, { useCallback, useEffect, useMemo, useState } from 'react'

export default function UseMemo() {

    //to memoize a function use callback but to memoize a value use memo
    // we can pass props in use callback
    const [counter,setCounter]=useState(1);
    const result=useMemo(()=>{
        return factorial(counter);
    },[counter]);
    const [name,setName]=useState(""); 

    const displayName=useCallback((greeting)=>{
        return greeting +" " +name;
    },[name]);

  return (
    <div>
        <h1>UseMemo & UseCallback</h1>
        <h3>Factorial of {counter} is : <span>{result}</span></h3>
        <div>
            <button onClick={()=>setCounter(counter-1)}>Decrease</button>
            <button onClick={()=>setCounter(counter+1)}>Increase</button>
        </div>
        <hr />
        <div>
            <div><label>Enter Name</label></div>
            <input type="text" 
            placeholder='enter name'
            value={name}
            onChange={(e)=>setName(e.target.value)}/>
            <hr />
            <DisplayName displayName={displayName}></DisplayName>  
        </div>
    </div>
  )
}

const DisplayName=({displayName})=>{
    const [value,setValue]=useState("");
    useEffect(()=>{
        setValue(displayName("hello"));
        console.log("component rendered");
    },[displayName]);
    return <p>{`My name is ${value}`}</p>
}

// const DisplayName=React.memo(({name})=>{
//     // console.log("rendered");
//     // this rendered should output only when name is changed ,
//     // when factorial is counted rendered should not ren 
//     // since memo is used in name components
//     return <p>{`My name is ${name}`}</p>
// });

function factorial(n){
    let i=0;
    while(i<20000000)i++;
    if(n<0){
        return -1;
    }
    if(n===0){
        return 1;
    }
    return n*factorial(n-1);
}