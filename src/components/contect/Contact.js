import React from 'react';
import {
  BrowserView,
  MobileView
} from "react-device-detect";
import Footer from '../footer/Footer';
import '../business/business.css'
import './contact.css';
import './mcontact.css';
import '../../index.css';
import '../../mindex.css';

import phone from '../../resourse/mark/phone.png';
import mail from '../../resourse/mark/mail.png';
import map from '../../resourse/mark/map.png';
import location from '../../resourse/mark/location.png';
import GoogleMapWrapper from './GoogleMapWrapper';

import mmail from '../../resourse/m.contact/m_mail.png'
import mmap from '../../resourse/m.contact/m_map.png'
import mphone from '../../resourse/m.contact/m_phone.png'


const Platform = () => {
  return (
    <>
      <BrowserView>
        <div className="full-screen-busy">
          <div className="screen-layout-busy">
            <div className="lay-top-busy" />
            <div className="lay-contact-second" />
            <div className="lay-contact-third" />
          </div>

          <div className="screen-center-busy">
            <div className="center-imgArea-busy">
              <div className="center-imgText-busy">
                CONTACT US
                <div className="underLine-area">
                  <p className="topic-underLine" />
                </div>
                <p className="imgText-p">모리아타운 연락 및 오시는 법</p>
              </div>
            </div>
            <div className="main-content-busy">
              <div className="business-imgArea-contact">
                <div className="contact-icons">
                  <div className="icon-wrapper">
                    <div className="contact-icon-area">
                      <img
                        className="contact-phone"
                        src={phone}
                        alt="contact-phone"
                      />
                      <p className="contact-word">OFFICE & FAX</p>
                      <br />
                      <p className="contact-info">OFFICE: +82 2 414 7077</p>
                      <p className="contact-info">FAX: +82 2 414 7079</p>
                    </div>
                    <div className="contact-icon-area">
                      <img
                        className="contact-mail"
                        src={mail}
                        alt="contact-mail"
                      />
                      <p className="contact-word">EMAIL</p>
                      <br />
                      <p className="contact-info">RND@MORIAHTOWN.COM</p>
                    </div>
                    <div className="contact-icon-area">
                      <img className="contact-map" src={map} alt="contact-map" />
                      <p className="contact-word">ADDRESS</p>
                      <br />
                      <p className="contact-info">
                        B-915, MSTATE, 114, BEOBWON-RO, SONGPA-GU, SEOUL, 05854,
                        KOREA
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-map-btmArea">
                  <div className="contact-map-top">
                    <div className="contact-top-wrapper">
                      <img
                        className="contect-location"
                        src={location}
                        alt="contect-location"
                      />
                      <p className="contact-word">FIND US</p>
                      <div className="underLine-area-map">
                        <p className="topic-underLine-map" />
                      </div>
                    </div>
                  </div>
                  <div className="contact-map-bottom">
                    <div className="contact-mapImg">
                      <GoogleMapWrapper />
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
            <div className="lay-mobile-top" />
          </div>

          <main className="m-screen-fullArea">
            <div className="m-screen-center-Area">
              <div className="m-top-mobile-image">
                <div className="m-page-imgText">
                  <p className="m-page-mainWord">CONTACT</p>
                  <div className="m-underLine-area">
                    <p className="m-topic-underLine" />
                  </div>
                  <p className="m-page-subWord">모리아타운 연락 및 오시는 법</p>
                </div>
              </div>

              <div className="m-center-platfrom">
                <div className="m-contactArea">
                  <div className="m-contact-imgSize">
                    <img className="m-contact-img" src={mphone} alt="m-phone" />
                  </div>
                  <p className="m-contact-word">OFFICE & FAX</p> 
                  <p className="m-contact-info">OFFICE: +82 2 414 7077</p>
                  <p className="m-contact-info">FAX: +82 2 414 7079</p>
                </div>

                <div className="m-contactArea">
                  <div className="m-contact-imgSize">
                    <img className="m-contact-img" src={mmail} alt="m-mail" />
                  </div>
                  <p className="m-contact-word">EMAIL</p>
                  <p className="m-contact-info">RND@MORIAHTOWN.COM</p>
                </div>
                <div className="m-contactArea">
                  <div className="m-contact-imgSize">
                    <img className="m-contact-img" src={mmap} alt="m-map" />
                  </div>
                  <div className="m-contact-word">ADDRESS</div>
                  <div className="m-contact-info">B-915, MSTATE, 114, BEOBWON-RO,
                    <br /> SONGPA-GU, SEOUL, 05854, KOREA
                  </div>
                </div>
              </div>


              <div className="m-contact-map-btmArea">
                <div className="m-contact-map-top">
                  <div className="m-contact-top-wrapper">
                    <img
                      className="m-contect-location"
                      src={location}
                      alt="contect-location"
                    />
                    <p className="m-contact-word">FIND US</p>
                    <div className="m-underLine-area-map">
                      <p className="m-topic-underLine-map" />
                    </div>
                  </div>
                </div>
                <div className="m-contact-map-bottom">
                  {/* <div className="contact-mapImg">Image</div> */}
                  <GoogleMapWrapper />
                </div>
              </div>
            </div>
          </main>
        </div>
        <Footer /> 
      </MobileView>
    </>
  );
};

export default Platform;
