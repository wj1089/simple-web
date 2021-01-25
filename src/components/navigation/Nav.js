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
  
  const handleMenuOnclick = () => {
    setIsActive(!isActive); 
  };

  const handleCompany = () =>{
    setIsCompany(!isCompany);
    console.log("isCompany")
    console.log(isCompany)
  }

  const handleBusiness = () =>{
    setIsBusiness(!isBusiness);
    console.log("isBusiness")
    console.log(isBusiness)
  }

  window.onscroll = () => {
    scrollFunction();
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
        <div className="m-header">
          <div className="m-nav-dropDwon">
            <div className="m-nav-barArea">
              <div className="m-nav-logoSize">
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

                      <div className="m-select-capital">
                        <p>COMPANY</p>
                        <button className="m-nav-upDown" type="button" onClick={handleCompany}>
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
                          <a href="/Company"><div className="m-nav-item">ABOUT</div></a>
                          <a href="/Mission"><div className="m-nav-item">MISSION</div></a> 
                          <a href="/Patent"><div className="m-nav-item">PATENT</div></a>
                        </div>
                      )}
                    </div>



                    <div className="m-nav-select-btn">
                      <div className="m-select-capital">
                        <p>BUSINESS</p>
                        <button className="m-nav-upDown" type="button" onClick={handleBusiness}>
                          {isBusiness === false &&(
                          <span className="material-icons">
                            expand_more
                          </span>
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
                          <a href="/Business"><div className="m-nav-item">EMBEDDED SOLUTION</div></a>
                          <a href="/Platform"><div className="m-nav-item">O2O PLATFORM</div></a>
                        </div>
                      )}
                    </div>

                    <div className="m-nav-select-btn">
                      <a className="m-select-capital" href="/Company">COMPANY</a>
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
