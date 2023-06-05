import React,{useState} from 'react'

export default function useCounter(initialValue) {
    const [value,setValue]=useState(initialValue);

     const increase=()=>{
         setValue(value+1);
     }
 
     const decrease=()=>{
         setValue(value-1);
     }

     const reset=()=>{
        return setValue(initialValue);
     }

  return [value,increase,decrease,reset];
}
