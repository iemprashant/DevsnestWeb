import React from 'react';

export default function Navbar({
  logoname,
  bgcolor,
  logocolor,
  fontawesomeClass,iconcolor
}) {
  const Stylefornavbar = {
    height: '10vh',
    backgroundColor: bgcolor,
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '0 2px 4px 0 rgba(255, 254, 254, 0.2)',
  };
  const Stylefornavbarspan = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  };
  const Stylefornavbaricon = {
    fontSize: '2.5rem',
    color: iconcolor,
    marginRight: '0.5rem',
    padding: '0.25rem',
  };
  const Stylefornavbarlogo = {
    border: 'none',
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bolder',
    fontFamily: "'Athiti', sans-serif",
    color: logocolor,
  };

  return (
    <>
      <nav style={Stylefornavbar} className='shadow-sm'>
        <span style={Stylefornavbarspan}>
          <i class={fontawesomeClass} style={Stylefornavbaricon}></i>
          <button style={Stylefornavbarlogo}>{logoname}</button>
        </span>
      </nav>
    </>
  );
}
