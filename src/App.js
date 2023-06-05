import React, { useState } from "react";
import './App.css';
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import UseRef from "./components/UseRef";
import UseMemo from "./components/UseMemo";
import UseContext from "./components/UseContext";
import UseReducer from "./components/UseReducer";
import UseReducer2 from "./components/UseReducer2";
import CustomHook from "./components/CustomHook";
import UseEffect2 from "./components/UseEffect2";
import { Route, Routes ,BrowserRouter} from "react-router-dom";
import Home from "./components/Home";

function App() {
  // const [flag,setFlag]=useState(true);
  // const toggle=()=>{
  //   return setFlag(!flag);
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/useState" element={<UseState/>}/>
          <Route path="/useEffect" element={<UseEffect/>}/>
          <Route path="/useEffect2" element={<UseEffect2/>}/>
          <Route path="/useRef" element={<UseRef/>}/>
          <Route path="/useMemo" element={<UseMemo/>}/>
          <Route path="/useContext" element={<UseContext/>}/>
          <Route path="/useReducer" element={<UseReducer/>}/>
          <Route path="/useReducer2" element={<UseReducer2/>}/>
          <Route path="/CustomHook" element={<CustomHook/>}/>
        </Routes>
      </BrowserRouter>
      {/* <UseState/>    */}
      {/* <button onClick={toggle}>toggle</button>
      {flag ? <UseEffect/>:""} */}
      {/* <UseRef/> */}
      {/* <UseMemo/> */}
      {/* <UseContext/> */}
      {/* <UseReducer/> */}
      {/* <UseReducer2/> */}
      {/* <CustomHook/> */}
    </div>
    
  );
}

export default App;
