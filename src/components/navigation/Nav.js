import React, { useRef, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Link } from 'react-router-dom';
import '../../index.css';
import '../../mindex.css';
import './navigation.css';
import './mnavigation.css';

import navLogo from '../../resourse/footernav/logo_nav.png';

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const [isCompany, setIsCompany] = useState(false);
  const [isBusiness, setIsBusiness] = useState(false);

  const navBar = useRef(null);
  const mobileNavBar = useRef(null);
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

  function mobileScrollFunction() {
    if (mobileNavBar.current != null) {
      // y scroll event
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        mobileNavBar.current.style.height = '80px';
        mobileNavBar.current.style.backgroundColor = 'rgba(0,0,0,0.85)';
      } else {
        mobileNavBar.current.style.height = '80px';
        mobileNavBar.current.style.backgroundColor = 'rgba(0,0,0,0)';
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

          mobileNavBar.current.style.left = `${0 - left}px`;
      } else {
        mobileNavBar.current.style.left = 0;
      }
    }
  }


  
  const handleMenuOnclick = () => {
    setIsActive(!isActive); 
  };

  const handleCompany = () =>{
    setIsCompany(!isCompany);
  }

  const handleBusiness = () =>{
    setIsBusiness(!isBusiness);
  }

  window.onscroll = () => {
    scrollFunction()
    mobileScrollFunction()
  };







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
                  <a href="/Contact" className="underLineRemove">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </BrowserView>




      <MobileView>
        <div className="m-header" ref={mobileNavBar}>
          <div className="m-nav-dropDwon">
            <div className="m-nav-barArea">
              <div className="m-nav-logoSize" ref={logo}>
                <Link to="/">
                  <img className="m-nav-logo" src={navLogo} alt="navBarLogo" />
                </Link>
              </div>
              <div className="m-nav-readmore">
                <button className="m-readmore-btn" type="button" onClick={handleMenuOnclick}>
                  <span className="material-icons" style={{color:"#ffffff"}}>menu</span>
                </button>
                <div id="mySidenav" className="sidenav" hidden={!isActive}>
                  <div className="m-nav-afterClick">
                    <div className="m-afterClick-barArea" style={{flex:1}}>
                      <img
                        className="nav-afterLogo"
                        src={navLogo}
                        alt="navBarLogo"
                      />
                      <button type="button" className="closebtn" onClick={handleMenuOnclick}>
                        <span className="material-icons">
                          close
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="m-nav-selectItem">
                    <div className="m-nav-select-btn">

                      <div className="m-select-listArea">
                        <button className="m-nav-upDown" type="button" onClick={handleCompany}>
                          <p className="m-select-capital">COMPANY</p>
                          {isCompany === false &&(
                          <span className="material-icons">
                            expand_more
                          </span>
                          )}
                          {isCompany === true &&(
                          <span className="material-icons">
                            expand_less
                          </span>
                          )}
                        </button>
                      </div>

                      { isCompany === true &&(
                        <div className="m-nav-listArea">
                          <button type="button" className="m-nav-item"><a href="/Company">ABOUT</a></button>
                          <button type="button" className="m-nav-item"><a href="/Mission">MISSION</a></button>
                          <button type="button" className="m-nav-item"><a href="/Patent">PATENT</a></button>
                        </div>
                      )}
                    </div>



                    <div className="m-nav-select-btn">
                      <div className="m-select-listArea">
                        <button className="m-nav-upDown" type="button" onClick={handleBusiness}>
                          <p className="m-select-capital">BUSINESS</p>
                          {isBusiness === false &&(
                          <div className="m-material-areas">
                            <span className="material-icons">
                              expand_more
                            </span>
                          </div>
                          )}
                          {isBusiness === true &&(
                            <span className="material-icons">
                              expand_less
                            </span>
                          )}
                        </button>
                      </div>

                      { isBusiness === true && (
                        <div className="m-nav-listArea">
                          <div className="m-nav-item"><a href="/Business">EMBEDDED SOLUTION</a></div>
                          <div className="m-nav-item"><a href="/Platform">O2O PLATFORM</a></div>
                        </div>
                      )}
                    </div>

                    <div className="m-nav-select-btn">
                      <a className="m-select-capital" href="/Contact">CONTACT</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MobileView>
    </>
  );
};

export default Nav;
