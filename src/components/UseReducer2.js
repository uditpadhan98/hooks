import React, { useReducer, useState } from 'react'

const initialState=[{id:Date.now(),name:"Udit",email:"123@gmail.com"},];

function reducer(state,action){
    switch(action.type){
        case "add":
            return [...state,action.payload];
        case "delete":
            return state.filter((contact)=>{
                return contact.id!==action.payload.id;           
            })
        default:
            return new Error();
    }
}

export default function UseReducer2() {
    const [state,dispatch]=useReducer(reducer,initialState);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");

    const addContact=(e)=>{
        e.preventDefault();
        const contact={
            id:Date.now(),
            name,
            email
        };
        setName("");
        setEmail("");
        dispatch({type:"add",payload:contact})
    };
  return (
    <div>
        <h1>UseReducer</h1>
        <form onSubmit={addContact}>
            <input type="text" 
            placeholder='name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <input type="text"
            placeholder='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <div>
                <button>Add Contact</button>
            </div>
        </form>

        <div>
            <ul>
                {state.map((contact)=>{
                    return(
                        <li key={contact.id}>
                            <h2>{contact.name}</h2>
                            <h2>{contact.email}</h2>
                            <div>
                                <button onClick={()=>dispatch({type:'delete',payload:{id:contact.id}})}>Delete</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}
