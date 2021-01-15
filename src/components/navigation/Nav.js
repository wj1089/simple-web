import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
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
      navBar.current.style.backgroundColor = 'black';
    } else {
      navBar.current.style.height = '150px';
      navBar.current.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  }

  window.onscroll = () => {
    scrollFunction();
  };
  
  return (
    <>
      <header ref={navBar}>
        <nav className="nav-dropDwon">
          <div className="nav-barArea">
            <div className="nav-logoSize" ref={logo}>
              <Link to="/">
                <img className="nav-logo" src={navLogo} alt="navBarLogo" />
              </Link>
            </div>
      

            <ul className="nav-linkList">
              <li className="nav-linkItem">
                <a href="/Company">COMPANY</a>
                <ul className="nav-menu">
                  <li className="nav-source">
                    <a href="/Company">ABOUT</a>
                  </li>
                  <li className="nav-source">
                    <a href="/Mission">MISSION</a>
                  </li>
                  <li className="nav-source">
                    <a href="/Patent">PATENT</a>
                  </li>
                </ul>
              </li>
            
              <li className="nav-linkItem">
                <a href="/Business">BUSINESS</a>
                <ul className="nav-menu">
                  <li className="nav-source">
                    <a className="busi-item" href="/Business">EMBEDDED SOLUTION</a>
                  </li>
                  <li className="nav-source">
                    <a className="busi-item" href="/Platform">O2O PLATFORM</a>
                  </li>
                </ul>
              </li>

              <li className="nav-linkItem">
                <a href="/Contact">CONTECT</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
