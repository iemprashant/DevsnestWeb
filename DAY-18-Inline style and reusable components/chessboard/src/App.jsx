import React, { Fragment } from 'react';
import Navbar from './Navbar';
export default function App() {
  var styleforcontainer = {
    display: 'flex',
    width: '100vw',
    height: '90vh',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxShadow:
      '0 3px 6px 0px rgba(0, 0, 0, 0.16),0 3px 6px 0px rgba(0, 0, 0, 0.23)',
  };

  return (
    <Fragment>
      <Navbar logoname="Chessboard" />
      <div style={styleforcontainer}>
        <h1>React app</h1>
      </div>
    </Fragment>
  );
}
