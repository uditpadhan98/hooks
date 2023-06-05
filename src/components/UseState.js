import React,{useState} from 'react'

export default function UseState() {
    const [name,setName]=useState("Udit");
  const [flag,setFlag]=useState(false);
  const [steps,setSteps]=useState(()=>{
    return 0;
  });

  const [names,setNames]=useState([]);

  function changeName(){
    // console.log("clicked!");
    return setName("Padhan");
  }
  function changeName2(){
    return setFlag(!flag);
  }
  function increase(){
    setSteps((prev)=>prev+1);
    setSteps((prev)=>prev+1);
  }
  function decrease(){
    return setSteps(steps-1);
  }

  function addNames(e){
    e.preventDefault();
    setNames([...names,{id:names.length,name}]);
    setName("");
  }
  return (
    <div>
       <h1>UseState</h1>
       <hr />
        <div>Hello, {name}</div>
      <button onClick={changeName} >Click Me</button>
      <div>Hello, {flag ? name:" "}</div>
      <button onClick={changeName2} >Click Me</button>
      <hr />
      <div>{steps}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <hr />
      <form onSubmit={addNames}>
        <input type="text" 
        value={name} 
        placeholder="add names" 
        onChange={(e)=>setName(e.target.value)}/>
      <button>Submit</button>
      </form>
      <hr />
      <ul>
        {names.map((item)=>(
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
