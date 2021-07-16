import React from 'react';

export default function Box({ color }) {
  var styleforbox = {
    backgroundColor: color,
  };
  return <div className="box" style={styleforbox}></div>;
}
