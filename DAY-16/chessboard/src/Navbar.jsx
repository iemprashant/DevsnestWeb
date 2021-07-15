import React from 'react';

export default function Navbar({ logoname }) {
  return (
    <>
      <nav class="navbar">
        <span>
        <i class="fas fa-chess"></i>
          <button class="logo">{logoname}</button>
        </span>
      </nav>
    </>
  );
}
