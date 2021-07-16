import React, { Fragment } from 'react';
import Box from './box';
export default function Chessboard() {
  return (
    <>
      <div className="chessbox">
        {Array.from({ length: 4 }, () => (
          <Fragment>
            <div className="gridbox oddrow">
              {Array.from({ length: 8 }, () => (
                <Box />
              ))}
            </div>
            <div className="gridbox evenrow">
              {Array.from({ length: 8 }, () => (
                <Box />
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
}
