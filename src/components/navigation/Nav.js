import React, { useRef} from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Link } from 'react-router-dom';
import '../../index.css';
import '../../mindex.css';
import './navigation.css';
import './mnavigation.css';

import navLogo from '../../resourse/footernav/logo_nav.png';

const Nav = () => {
  const navBar = useRef(null);
  const logo = useRef(null);

  function scrollFunction() {
    if (navBar.current != null) {
      // y scroll event
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        navBar.current.style.height = '100px';
        navBar.current.style.backgroundColor = 'rgba(0,0,0,0.85)';
      } else {
        navBar.current.style.height = '150px';
        navBar.current.style.backgroundColor = 'rgba(0,0,0,0)';
      }
      // x scroll event
      if (
        document.body.scrollLeft > 0 ||
        document.documentElement.scrollLeft > 0
      ) {
        const left =
          document.body.scrollLeft === 0
            ? document.documentElement.scrollLeft
            : document.body.scrollLeft;

        navBar.current.style.left = `${0 - left}px`;
      } else {
        navBar.current.style.left = 0;
      }
    }
  }

  window.onscroll = () => {
    scrollFunction();
  };



  // const [isActive, setIsActive] = useState(initialState);

  // useEffect(() => {
  //   const onClick = e => {
  //     if (el.current !== null && !el.current.contains(e.target)) {
  //       setIsActive(!isActive);
  //     }
  //   };

  //   if (isActive) {
  //     document.getElementById("mySidenav", onClick).style.width = "100%";
  //   }

  //   return () => {
  //     document.getElementById("mySidenav", onClick).style.width = "0";
  //   };
  // }, [isActive, el]);



  return (
    <>
      <BrowserView>
        <header className="web-header" ref={navBar}>
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
                  <ul className="nav-widemenu">
                    <li className="nav-source">
                      <a href="/Business">EMBEDDED SOLUTION</a>
                    </li>
                    <li className="nav-source">
                      <a href="/Platform">O2O PLATFORM</a>
                    </li>
                  </ul>
                </li>

                <li className="nav-linkItem">
                  <a href="/Contact">CONTACT</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </BrowserView>

      <MobileView>
        <div className="m-header">
          <div className="m-nav-dropDwon">
            <div className="m-nav-barArea">
              <div className="m-nav-logoSize">
                <Link to="/">
                  <img className="nav-logo" src={navLogo} alt="navBarLogo" />
                </Link>
              </div>

              {/* <div className="m-nav-readmore">
                <div id="mySidenav" className="sidenav">

                  <div className="m-nav-afterClick">
                    <img className="nav-afterLogo" src={navLogo} alt="navBarLogo" />
                    
                    <a href="/" className="closebtn">
                      &times;
                    </a>
                  </div>

                  <div className="m-nav-selectItem">
                    <a className="nav-select-btn" href="/Company">COMPANY</a>
                    <a className="nav-select-btn" href="/Business">BUSINESS</a>
                    <a className="nav-select-btn" href="/Contact">CONTACT</a>
                  </div>
                </div>

                <div className="">
                  <span className="material-icons">
                    menu
                  </span>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </MobileView>
    </>
  );
};

export default Nav;
