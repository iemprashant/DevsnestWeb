import React, { Fragment } from 'react';
import Cardbox from './Components/Cardbox';
import Navbar from './Components/Navbar';
export default function App() {
  var styleforcontainer = {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#b3e5fc',
    boxShadow:
      '0 3px 6px 0px rgba(0, 0, 0, 0.16),0 3px 6px 0px rgba(0, 0, 0, 0.23)',
  };
  return (
    <Fragment>
      <Navbar logoname="Bookmarked" bgcolor="#0288d1" logocolor="white" fontawesomeClass="far fa-bookmark"/>
      <div style={styleforcontainer}>
        <Cardbox/>
      </div>
    </Fragment>
  );
}
