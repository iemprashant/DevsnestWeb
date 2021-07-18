import './App.css';
import React, { useState } from 'react';
function App() {
  const [arr, setarr] = useState([0, 0, 0, 0]);
  const styleforcontainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };
 const buttonclick=(idx)=>{
   const temparr=[...arr];
   temparr[idx]++;
   setarr(temparr)
 }
  return (
    <div className="App" style={styleforcontainer}>
      {arr.map((x,index)=><button onClick={()=>{buttonclick(index)}} >{x}</button>)}
    </div>
  );
}

export default App;
