import React, { Fragment } from 'react';
import Box from './box';
export default function Chessboard() {
  var styleforchessboard = {
    border: '1rem solid black',
    borderRadius: '1rem',
    height: '70vh',
    width: '70vh',
    backgroundColor: 'whitesmoke',
    display: 'grid',
    gridTemplateRows: 'repeat(8, 1fr)',
    gridTemplateColumns: 'repeat(8, 1fr)',
    padding: '0.25rem',
  };

  var boxes = [];
  for (let i = 0; i < 64; i++) {
    if (Math.floor(i / 8) % 2 == 0) {
      i % 2 == 0
        ? boxes.push(<Box color="white" />)
        : boxes.push(<Box color="black" />);
    } else {
      i % 2 == 0
        ? boxes.push(<Box color="black" />)
        : boxes.push(<Box color="white" />);
    }
  }

  return (
    <>
      <div className="chessbox" style={styleforchessboard}>
        {boxes}
      </div>
    </>
  );
}
