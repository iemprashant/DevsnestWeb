import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="bg-light text-dark text-decoration-none d-flex justify-content-around p-2">
        <Link to="/"><h3 class="text-dark text-decoration-none"> Home</h3></Link>
        <Link to="/about"><h3 class="text-dark text-decoration-none"> About</h3></Link>
        <Link to="/users"><h3 class="text-dark text-decoration-none">Users</h3></Link>
        <Link to="/Dashboard"><h3 class="text-dark text-decoration-none">Dashboard</h3></Link>
      </nav>
    </>
  );
};

export default Navbar;