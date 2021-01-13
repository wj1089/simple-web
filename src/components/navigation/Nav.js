import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';
import navLogo from '../../resourse/footernav/logo_nav.png';

const Nav = () => {
  const navBar = useRef(null);
  const logo = useRef(null);

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      navBar.current.style.height = '100px';
    } else {
      navBar.current.style.height = '150px';
    }
  }

  window.onscroll = () => {
    scrollFunction();
  };
  return (
    <>
      <nav className="nav-dropDwon" ref={navBar}>
        <div className="nav-logoSize" ref={logo}>
          <Link to="/Home">
            <img className="nav-logo" src={navLogo} alt="navBarLogo" />
          </Link>
        </div>

        <ul className="nav-linkList">
          <li className="nav-linkItem">
            <a href="/Company">COMPANY</a>
            <ul className="nav-menu">
              <li className="nav-source">
                <a href="/Company/About">ABOUT</a>
              </li>
              <li className="nav-source">
                <a href="/Company/Misson">MISSION</a>
              </li>
              <li className="nav-source">
                <a href="/Company/Patent">PATENT</a>
              </li>
            </ul>
          </li>

          <li className="nav-linkItem">
            <a href="/Business">BUSINESS</a>
            <ul className="nav-menu">
              <li className="nav-source">
                <a href="/Business">b123123</a>
              </li>
              <li className="nav-source">
                <a href="/Business">ab123123</a>
              </li>
              <li className="nav-source">
                <a href="/Business">ab123123</a>
              </li>
            </ul>
          </li>

          <li className="nav-linkItem">
            <a href="/Contact">CONTECT</a>
            <ul className="nav-menu">
              <li className="nav-source">
                <a href="/Contact">b123123</a>
              </li>
              <li className="nav-source">
                <a href="/Contact">ab123123</a>
              </li>
              <li className="nav-source">
                <a href="/Contact">ab123123</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
