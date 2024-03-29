import React, { Fragment } from 'react';
import Chessboard from './Component/chessboard';
import Navbar from './Navbar';
export default function App() {
  return (
    <Fragment>
      <Navbar logoname="Chessboard" />
      <div className="img-container">
        <div className="container">
          <Chessboard />
        </div>
      </div>
    </Fragment>
  );
}
