import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <Link className="logo" to="/">
      <h1>Math Magicians</h1>
    </Link>
    <ul className="nav-links">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/calculator">
        <li>Calculator</li>
      </Link>
      <Link to="/quotes">
        <li>Quotes</li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
