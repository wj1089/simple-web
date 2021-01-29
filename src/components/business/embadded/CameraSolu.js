import React from 'react';
import {
  BrowserView,
  MobileView
} from "react-device-detect";
import Footer from '../../footer/Footer';
import '../item.css';
import '../mitem.css';
import '../../../index.css';
import '../../../mindex.css';

import itemImg from '../../../resourse/ES/es_6_detail.png';

const CameraSolu = () => {

    return (
      <>
        <BrowserView>
          <div className="full-screen-dark">
            <div className="screen-layout-dark">
              <div className="lay-top-dark" />
            </div>

            <div className="screen-center-es">
              <div className="center-imgArea-es">
                <div className="es-topText">
                  <p className="es-firstWord">360° CAMERA SOLUTIONS</p>
                  <p className="es-secondWord">MORIAHTOWN / 360° CAMERA SOLUTIONS</p>
                </div>
              </div>

              <div className="main-content-es">
                <div className="center-es">

                  <div className="center-left">
                    <img className="cameraSolu-img" src={itemImg} alt="cameraSolu-img" />
                  </div>

                  <div className="center-right">

                    <div className="discrip-title">
                      <p className="item-topic">EMBEDDED SOLUTION</p>
                      <p className="docu-topic">360° CAMERA SOLUTIONS</p>
                    </div>

                    <div className="underLine-area-es">
                      <p className="topic-underLine-es" />
                    </div>

                    <div className="discrip-body">
                      As virtual reality (VR) products are increasingly introduced to the market, 360° cameras are following this trend and entering into the mainstream market as well. Samsung, LG, Nokia, Ricoh, and many other branded manufacturers are all releasing their own line of new technologies.<br /><br />
                      ArcSoft offers a series of solutions in response to this hot market. Among them are software SDKs featuring de-warping and stitching, which have been thoroughly customized and optimized for integrating with the latest hardware and apps. Along with these core engines, our 360° Camera Solutions also include performance optimizations, network SDKs and full customizable applications for various platforms (Android, iOS, Windows, Mac, etc.) which increase the quality and performance of clients’ products, while significantly reducing our OEMs’ development cycles.
                      <div className="discrip-foot">
                        <span className="foot-title">
                          <p className="foot-date">DATE</p>
                          <p className="foot-dateWord">2016-11-11</p>
                        </span>

                        <span className="foot-title">
                          <p className="foot-date">TAGS</p>
                          <p className="foot-dateWord">Embedded Solution</p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="prevNext-btn">
                <div className="prev-btn">
                  <a href="/DualCamera">
                    <div className="left-btnImg">
                      <span className="material-icons" style={{color:'#ffffff', fontSize:'18px'}}>
                        arrow_back_ios_new
                      </span>
                    </div>
                  </a>
                  <p className="btn-info">PREVIOUS PROJECT</p>
                </div>
                <div className="business-kinds">EMBEDDED SOLUTION</div>
                <div className="next-btn">
                  <a href="/MotionSen">
                    <div className="right-btnImg">
                      <span className="material-icons" style={{color:'#ffffff', fontSize:'18px'}}>
                        arrow_forward_ios
                      </span>
                    </div>
                  </a>
                  <p className="btn-info">NEXT PROJECT</p>
                </div>
              </div>

            </div>
          </div>
          <Footer />
        </BrowserView>


        <MobileView>
          <div className="m-full-screen-dark">
            <div className="m-screen-layout-dark">
              <div className="m-lay-top-dark" />
            </div>

            <div className="m-screen-center-es">
              <div className="m-center-imgArea-es">
                <div className="m-es-topText">
                  <p className="m-es-firstWord">360° CAMERA SOLUTIONS</p>
                  <p className="m-es-secondWord">MORIAHTOWN / 360° CAMERA SOLUTIONS</p>
                </div>
              </div>

              <div className="m-main-content-es">

                <div className="m-center-top">
                  <img className="m-dualCamera-img" src={itemImg} alt="dualCamera-img" />
                </div>

                <div className="m-discrip-info">
                  <div className="">
                    <p className="m-item-topic">EMBEDDED SOLUTION</p>
                    <p className="m-item-docu">360° CAMERA SOLUTIONS</p>
                    
                    <div className="m-underLine-area-detail">
                      <p className="m-topic-underLine-detail" />
                    </div>
                  </div>
                </div>

                <div className="m-center-bottom">
                  <div className="m-discrip-body">
                    As virtual reality (VR) products are increasingly introduced to the market, 360° cameras are following this trend and entering into the mainstream market as well. Samsung, LG, Nokia, Ricoh, and many other branded manufacturers are all releasing their own line of new technologies.
                    <br /><br />
                    ArcSoft offers a series of solutions in response to this hot market. Among them are software SDKs featuring de-warping and stitching, which have been thoroughly customized and optimized for integrating with the latest hardware and apps. Along with these core engines, our 360° Camera Solutions also include performance optimizations, network SDKs and full customizable applications for various platforms (Android, iOS, Windows, Mac, etc.) which increase the quality and performance of clients’ products, while significantly reducing our OEMs’ development cycles.
                  </div>
                </div>

                <div className="m-foot-info">
                  <span className="m-foot-fisrt">
                    <p className="m-foot-date">DATE</p>
                    <p className="m-foot-dateWord">2016-11-11</p>
                  </span>

                  <span className="m-foot-second">
                    <p className="m-foot-date">TAGS</p>
                    <p className="m-foot-dateWord">Embedded Solution</p>
                  </span>
                </div>


                <div className="m-prevNext-btn">
                  <div className="m-prev-btn">
                    <a href="/dualCamera">
                      <button type="button" className="m-left-btnImg">
                        <span className="material-icons" style={{color:'#ffffff', fontSize:'18px'}}>
                          arrow_back_ios_new
                        </span>
                      </button>
                    </a>
                  </div>
                  <div className="m-business-kinds">EMBEDDED SOLUTION</div>
                  
                  <div className="m-next-btn">
                    <a href="/motionSen">
                      <button type="button" className="m-right-btnImg">
                        <span className="material-icons" style={{color:'#ffffff', fontSize:'18px'}}>
                          arrow_forward_ios
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <Footer />
        </MobileView>
      </>
    );
};

export default CameraSolu;