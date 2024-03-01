import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div className="container text-center"> 
      <ul className="nav nav-tabs justify-content-center"> 
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/About"
            className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="container text-center">
        <h1>Winston Steidley</h1>
        <NavTabs />
      </div>
    </header>
  );
}

export default Header;
