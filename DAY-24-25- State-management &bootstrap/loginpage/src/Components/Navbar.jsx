import React from 'react';
import { Link } from "react-router-dom";
const Navbar = ({ islogin }) => {
  return (
    <>
      <nav className="bg-secondary text-light text-decoration-none d-flex justify-content-around p-3">
        <Link to="/" class="text-light text-decoration-none"><h5 > Home</h5></Link>
        <Link to="/about" class="text-light text-decoration-none"><h5 > About</h5></Link>
        {islogin && <Link to="/users" class="text-light text-decoration-none"><h5 >Users</h5></Link>}
        {islogin && <Link to="/Dashboard" class="text-light text-decoration-none"><h5 >Dashboard</h5></Link>}
      </nav>
    </>
  );
};

export default Navbar;