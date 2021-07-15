import React from 'react';

export default function Navbar({ logoname }) {
  return (
    <>
      <nav class="navbar">
        <span>
          <button class="logo">{logoname}</button>
        </span>
      </nav>
    </>
  );
}
