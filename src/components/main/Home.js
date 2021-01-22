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
import embed from '../../resourse/mainphoto/icon_b2b.png';
import patentImg from '../../resourse/mainphoto/icon_patent.png';
import nextBtn from '../../resourse/mainphoto/icon_mainnext.png';
import phone from '../../resourse/mark/phone.png';
import mail from '../../resourse/mark/mail.png';

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
                <div className="content-topText">
                  <div className="content-logoImg">
                    <img className="content-logoSize" src={topLogoImg} alt="mainbanner" />
                  </div>
                  <h3 className="content-logoText">CO-EVOLUTION PARTNER</h3>
                  <h1 className="content-mainText">CREATING SHATED VALUE PARTNER<br /> FOR CO-EVOLUTION </h1>
                </div>

                <div className="inside-content">
                  <div className="inside-top">

                    <div className="bToCorB">
                      <div className="bToCorB-textArea">
                        <p className="bTob-topic">EMBEDDED SOLUTION</p>
                        <p className="bTob-words">
                          실현에 얼마나 이상의 반짝이는 이것이다. 같이 품으며,
                          <br /> 희망의 전자만홍이 이상, 인간의 아니한 피다.
                        </p>
                      </div>
                      <div className="bToCorB-imgArea">
                        <div className="center-clickImg">
                          <a href="/Business">
                            <img className="center-iconSize" src={embed} alt="B2B-img" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="patent">
                      <div className="patent-textArea">
                        <p className="patent-topic">PATENT</p>
                        <p className="patent-words">실현에 얼마나 이상의 반짝이는 이것이다. 같이 품으며,
                          <br /> 인간의 아니한 피다.
                        </p>
                      </div>
                      <div className="bToCorB-imgArea">
                        <div className="center-clickImg">
                          <a href="/Patent">
                            <img className="center-iconSize" src={patentImg} alt="patent-img" />
                          </a>
                        </div>
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
            <div className="m-lay-home-second" />
            <div className="m-lay-home-third" />
            <div className="m-lay-home-forth">
              <div className="forth-left" />
              <div className="forth-right" />
            </div>
            <div className="m-lay-home-fifth" />
            <div className="m-lay-home-footer">
              <div className="m-lay-foot-top" />
              <div className="m-lay-foot-bottom" />
            </div>
          </div>

          <main className="m-screen-fullArea">
            <div className="m-screen-center-Area">
              <div className="m-top-main-image">
                <div className="m-top-textWord">
                  <img className="m-textWord-img" src={topLogoImg} alt="moblie-img-logo" />
                  <p className="m-textWord-small">CO-EVOLUTION PARTNER</p>
                  <p className="m-textWord-big"> CREATING<br /> SHARED VALUE PARTNER FOR CO-EVOLUTION</p>
                </div>
              </div>

              <div className="m-second-home-content">
                <div className="m-embed-img" alt="embed-img" />
                <div className="m-embed-textArea">
                  <p className="m-embed-topic">EMBEDDED SOLUTION</p>
                  <p className="m-embed-descrip">
                    실현에 얼마나 이상의 반짝이는 이것이다. 같이 품으며,
                    <br />
                    희망의 천자만홍이 이상,인간의 아니한 피다.
                    <br />
                    황금시대를 것이다.
                  </p>
                </div>
              </div>
              
              <div className="m-third-home-content">
                <div className="m-patent-img" />
                <div className="m-patent-textArea">
                  <p className="m-patent-topic">PATENT</p>
                  <p className="m-patent-descrip">
                    실현에 얼마나 이상의 반짝이는 이것이다. 같이 품으며,
                    인간의 아니한 피다.
                  </p>
                </div>
              </div>
              <div className="m-fourth-home-content">
                <div className="m-content-about">
                  <p className="m-about-topArea">About us</p>
                  <div className="m-about-downArea">
                    <img className="m-nextBtn" src={nextBtn} alt="nextBtn" />
                  </div>
                </div>
                <div className="m-content-image">Image</div>
              </div>
              <div className="m-fifth-home-content">
                <div className="m-contact-textArea">
                  <div className="m-textArea-oneline">
                    <img className="m-home-icon" src={phone} alt="home-phone" />
                    <p className="m-textArea-title">OFFICE & FAX</p>
                  </div>
                  <p className="m-textArea-discript">OFFICE : +82 2 414 7077</p>
                  <p className="m-textArea-discript">FAX : +82 2 414 7079</p>
                  <div className="m-textArea-oneline">
                    <img className="m-home-icon" src={mail} alt="home-mail" />
                    <p className="m-textArea-title">EMAIL</p>
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