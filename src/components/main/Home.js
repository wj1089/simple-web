import React from 'react';
// import {NavLink} from "react-router-dom";
import Footer from '../footer/Footer';
import './home.css';
import '../../index.css';
import insideBotmImg from '../../resourse/mainphoto/bg_main_geometry.png'
import topLogoImg from '../../resourse/mainphoto/logo_mainbanner.png'
import btobImg from '../../resourse/mainphoto/icon_b2b.png'
import patentImg from '../../resourse/mainphoto/icon_patent.png'
import nextBtn from '../../resourse/mainphoto/icon_mainnext.png'

import phone from '../../resourse/mark/phone.png'
import mail from '../../resourse/mark/mail.png'

const Home = () => {
  
  return ( 
    <>
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
                        <img className="center-iconSize" src={btobImg} alt="B2B-img" />
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
                        <img className="center-iconSize" src={patentImg} alt="patent-img" />
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
                      <div className="aboutUs-clickImg">
                        <img className="aboutUs-imgSize" src={nextBtn} alt="about-nextbtn" />
                      </div>
                    </div>
                  </div>
                  <div className="inbotm-image">
                    <img className="inbotm-imgSize" src={insideBotmImg} alt="inside-bottom-img" />
                  </div>
                  <div className="contect">
                    <div className="contect-wrapper">
                      <img className="home-icon" src={phone} alt="home-phone" />
                      <p className="content-communi">Office or FAX</p>
                      <p className="content-detail">Office: -82 2 414 7077</p>
                      <p className="content-detail">FAX: -82 2 414 7079</p>
                      <br />
                      <img className="home-icon" src={mail} alt="home-mail" />
                      <p className="content-communi">EMAIL</p>
                      <p className="content-detail">RND@MORIAHTOWN.COM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;