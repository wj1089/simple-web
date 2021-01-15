import React from 'react';
import './footer.css';
import '../../index.css'
import footerLogo from '../../resourse/footernav/logo_footer.png'

const Footer = () => {


    return (
      <>
        <footer>
          <div className="foot-inside">
            <div className="foot-logoSide">
              <div className="foot-logoImg">
                <img className="foot-imgSize" src={footerLogo} alt="footer-logo" />
              </div>
            </div>
            <div className="foot-wordSide">
              <p>상호면:(주)모리아타운 대표자:권오형 ㅣ 개인정보 책임자: 정원석
                <p className="foot-InfoDown">
                  사업자번호 : 215-86-89431
                </p>
              </p>
            </div>
            <div className="foot-contectInfo">
              <p>Office : 02-414-7077 | FAX : +82 2 414 7079 
                <p className="foot-InfoDown">B-915, MSTATE, 114, BEOBWON-RO, SONGPA-GU, SEOUL, 05854, KOREA</p>
              </p>
            </div>
          </div>
          <div className="foot-botmSide">
            <p className="foot-botmWord">Copyright(c) Moriahtown Co., Ltd. All Rights Reserved.</p>
          </div>
        </footer>
      </>
    );
};

export default Footer;