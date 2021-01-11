import React from 'react';
import {Link} from 'react-router-dom';
import './navigation.css';

const Nav = () => {

    return (
      <>
        <div className="nav-bar">

          <Link to='/'>
            <h1 className="nav-logo">Navigation</h1>
          </Link>

          <ul className="nav-link">
            <Link to='/Company'>
              <li className="nav-item">COMPANY</li>
            </Link>
            <Link to='/Business'>
              <li className="nav-item">BUSINESS</li>
            </Link>
            <Link to='/Contact'>
              <li className="nav-item">CONTECT</li>
            </Link>
          </ul>

        </div>
      </>
    );
};

export default Nav;