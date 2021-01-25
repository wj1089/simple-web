import React from 'react';
import {
  BrowserView,
  MobileView,
} from "react-device-detect";
import './footer.css';
import './mfooter.css';
import '../../index.css'
import '../../mindex.css'

import footerLogo from '../../resourse/footernav/logo_footer.png'

// import * as urls from '../cabinet/urls';

const Footer = () => {
  
  // function clickLink(e) {
  //   e.preventDefault();
  //   window.open(urls.fairTrade);
  // }

    return (
      <>
        {/* {desktop ? desktopRender() : mobileRender() } */}
        <BrowserView>
          <footer>
            <div className="foot-inside">
              <div className="foot-logoSide">
                <div className="foot-logoImg">
                  <img className="foot-imgSize" src={footerLogo} alt="footer-logo" />
                </div>
              </div>
              <div className="foot-wordSide">
                <div className="info-words">
                  <p className="foot-InfoDown">
                    상호명:(주)모리아타운&nbsp;&nbsp;&nbsp;&nbsp;대표자:권오형 
                    &nbsp;&nbsp;&nbsp;&nbsp;정보보호 책임자: 정원석
                  </p>
                  <p 
                    className="foot-InfoDown"
                    aria-hidden="true"
                  >
                    사업자번호 : 215-86-89431
                  </p>
                </div>
              </div>
              <div className="foot-wordSide">
                <div className="info-words">
                  <p className="foot-InfoDown">Office : 02-414-7077 | FAX : +82 2 414 7079 </p>
                  <p className="foot-InfoDown">B-915, MSTATE, 114, BEOBWON-RO, SONGPA-GU, SEOUL, 05854, KOREA</p>
                </div>
              </div>
            </div>
            <div className="foot-botmSide">
              <p className="foot-botmWord">Copyright(c) Moriahtown Co., Ltd. All Rights Reserved.</p>
            </div>
          </footer>
        </BrowserView>

        <MobileView>
          <div className="m-footer">
            <div className="m-foot-inside">
              <div className="m-foot-logoImg">
                <img className="m-foot-imgSize" src={footerLogo} alt="footer-logo" />
              </div>
              <div className="m-foot-wordSide">
                <p className="m-foot-textline">상호명:&nbsp;(주)모리아타운 </p>
                <p className="m-foot-textline"> 대표자:&nbsp;권오형&nbsp;&nbsp;|&nbsp;&nbsp;정보보호 책임자 : 정원석</p>
                <p className="m-foot-textline">사업자등록번호: 215-86-89431</p>
              </div>
              <div className="m-foot-contectInfo">
                <p className="m-foot-textline">Office: +82 2 414 7077</p>
                <p className="m-foot-textline"> FAX: +82 2 414 7079 </p>
                <p className="m-foot-textline">B-915, MSTATE, 114, BEOBWON-RO, SONGPA-GU,
                  <br />SEOUL, 05854, KOREA
                </p>
              </div>
            </div>
            <div className="m-foot-botmSide">
              <p className="m-foot-botmWord">Copyright(c) Moriahtown Co., Ltd. All Rights Reserved.</p>
            </div>
          </div>
        </MobileView>
      </>
    );
};

export default Footer;