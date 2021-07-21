import './App.css';
import React, { useState } from 'react';
function App() {
  const [arr, setarr] = useState([2, 0, 2, 1]);
  const styleforcontainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'black',
    color: 'white',
  };
  const styleforbutton = {
    padding: '2rem',
    margin: '2rem',
    fontSize: '5rem',
    color: 'grey',
    borderRadius: '1rem',
    backgroundColor: 'whitesmoke',
    fontFamily: "'ABeeZee', sans-serif",
  };
  const buttonclick = (idx) => {
    const temparr = [...arr];
    temparr[idx]++;
    setarr(temparr);
  };
  return (
    <div className="App" style={styleforcontainer}>
      <h1>
        Cick On the Button to update the Value <i class="fas fa-hand-peace"></i>
      </h1>
      <div>
        {arr.map((x, index) => (
          <button
            style={styleforbutton}
            onClick={() => {
              buttonclick(index);
            }}
          >
            {x}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
