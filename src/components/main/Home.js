import React from 'react';
import {
  BrowserView,
  MobileView,
} from "react-device-detect";

import './home.css';
import './mhome.css';
import '../../index.css';
import '../../mindex.css';
import Footer from '../footer/Footer';

import insideBotmImg from '../../resourse/mainphoto/bg_main_geometry.png';
import topLogoImg from '../../resourse/mainphoto/logo_mainbanner.png';
import nextBtn from '../../resourse/mainphoto/icon_mainnext.png';

const Home = () => {

  




  return (
    <>
      <BrowserView>
        <div className="full-screen">
          <div className="screen-layout">
            <div className="lay-top">
              <div className="lay-topImg" />
              <div className="lay-topImgNext" />
            </div>
            <div className="lay-home-second" />
          </div>

          <div className="screen-centerArea">
            <div className="outSilde-image" />
            <div className="main-content">
              <div className="content-area">

                <div className="top-main-image">
                  <div className="top-textWord">

                    <div className="text-fixedArea">
                      <img className="textWord-img" src={topLogoImg} alt="mainbanner" />
                      <p className="textWord-small">CO-EVOLUTION PARTNER</p>
                    </div>

                    <div className="text-changeArea">
                      <p className="textWord-big"> 
                        2030 SMART ICT 
                        <br /> FUSION BUSINESS LEADER!
                      </p>
                      <p className="textWord-Next"> 
                        CREATING SHARED VALUE PARTNER 
                        <br /> FOR CO-EVOLUTION
                      </p>
                    </div>
                  </div>
                </div>

                <div className="inside-content">
                  <div className="inside-top">

                    <div className="bToCorB">
                      <div className="bToCorB-textArea">
                        <p className="bTob-topic">EMBEDDED SOLUTION</p>
                        <p className="bTob-words">
                          모리아타운은 다양한 솔루션 발굴 및 공급 경험을 
                          <br />토대로 보다 창조적이고 발전된 기술을 제공합니다.
                        </p>
                      </div>
                      <div className="bToCorB-imgArea">
                        <a href="/Business">
                          <div className="center-web-embed" alt="B2B-img" />
                        </a>
                      </div>
                    </div>

                    <div className="patent">
                      <div className="patent-textArea">
                        <p className="patent-topic">PATENT</p>
                        <p className="patent-words">다양한 특허를 보유함으로써 차별화 된
                          <br /> 새로운 대안을 제시합니다.
                        </p>
                      </div>
                      <div className="bToCorB-imgArea">
                        <a href="/Patent">
                          <div className="center-web-patent" alt="patent-img" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="inside-bottom">
                    <div className="about-us">
                      <div className="aboutUs-textArea">
                        <p className="aboutUs-topic">About Us</p>
                        <p className="aboutUs-words">모리아타운은 새로운 가치 창조와 시장을
                          <br />선도하는 기업을 만들기 위해 노력하고 있습니다.
                        </p>
                      </div>
                      <div className="aboutUs-imgArea">
                        <a href="/About">
                          <img className="aboutUs-imgSize" src={nextBtn} alt="about-nextbtn" />
                        </a>
                      </div>
                    </div>
                    <div className="inbotm-image">
                      <img className="inbotm-imgSize" src={insideBotmImg} alt="inside-bottom-img" />
                    </div>
                    <div className="contact">
                      <div className="content-imgSize">
                        <span className="material-icons">phone</span>
                      </div>

                      <p className="content-communi">Office or FAX</p>
                      <p className="content-detail">Office: +82 2 414 7077</p>
                      <p className="content-detail">FAX: +82 2 414 7079</p>
                      <br />
                      <div className="content-imgSize">
                        <span className="material-icons">mail</span>
                      </div>
                      <p className="content-communi">EMAIL</p>
                      <p className="content-detail">RND@MORIAHTOWN.COM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </BrowserView>





      <MobileView>
        <div className="m-full-screen">
          <div className="m-screen-layout">
            <div className="m-lay-top">
              <div className="m-lay-topImg" />
              <div className="m-lay-topImgNext" />
            </div>
          </div>

          <main className="m-screen-fullArea">
            <div className="m-screen-center-Area">
              <div className="m-top-main-image">

                <div className="m-top-textWord">

                  <div className="m-text-fixedArea">
                    <img className="m-textWord-img" src={topLogoImg} alt="moblie-img-logo" />
                    <p className="m-textWord-small">CO-EVOLUTION PARTNER</p>
                  </div>

                  <div className="m-text-changeArea">
                    <p className="m-textWord-big"> 
                      CREATING
                      <br /> SHARED VALUE PARTNER 
                      <br /> FOR CO-EVOLUTION
                    </p>
                    <p className="m-textWord-Next"> 
                      2030 SMART ICT 
                      <br /> FUSION BUSINESS
                      <br /> LEADER!
                    </p>
                  </div>

                </div>
              </div>

              <div className="m-second-home-content">
                <a href="/business">
                  <div className="m-embed-img" alt="embed-img">
                    <div className="m-center-area">
                      <div className="m-embed-textArea">
                        <p className="m-embed-topic">EMBEDDED SOLUTION</p>
                        <p className="m-embed-descrip">
                          모리아타운은 끊임없는 연구개발로<br />
                          보다 경쟁력 있는 솔루션과 기술을 제공합니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="m-third-home-content">
                <a href="/patent">
                  <div className="m-patent-img" alt="patent-img">
                    <div className="m-center-area">
                      <div className="m-patent-textArea">
                        <p className="m-patent-topic">PATENT</p>
                        <p className="m-patent-descrip">
                          다양한 특허를 보유함으로써
                          <br />차별화 된 새로운 대안을 제시합니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              
              <div className="m-fourth-home-content">
                <a className="m-content-about" href="/Company">
                  <p className="m-about-topArea">About us</p>
                  <img className="m-nextBtn" src={nextBtn} alt="nextBtn" />
                </a>
                <div className="m-content-image" />
              </div>

              <div className="m-fifth-home-content">
                <div className="m-contact-textArea">
                  <div>
                    <div className="m-textArea-oneline">
                      <div className="m-content-imgSize">
                        <span className="material-icons">phone</span>
                      </div>
                      <p className="m-textArea-title">OFFICE & FAX</p>
                    </div>
                    <p className="m-textArea-discript">OFFICE : +82 2 414 7077</p>
                    <p className="m-textArea-discript">FAX : +82 2 414 7079</p>
                  </div>
                  <div style={{marginTop:16}}>
                    <div className="m-textArea-oneline">
                      <div className="m-content-imgSize">
                        <span className="material-icons">mail</span>
                      </div>
                      <p className="m-textArea-title">EMAIL</p>
                    </div>
                  </div>
                  <div className="m-textArea-discript">RND@MORIAHTOWN.COM</div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </MobileView>
    </>
  );
};

export default Home;