import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <Link className="logo" to="/">
      <h1>Math Magicians</h1>
    </Link>
    <ul className="nav-links">
      <Link className="navi-link" to="/">
        <li>Home</li>
      </Link>
      <Link className="navi-link" to="/calculator">
        <li>Calculator</li>
      </Link>
      <Link className="navi-link" to="/quotes">
        <li>Quotes</li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
