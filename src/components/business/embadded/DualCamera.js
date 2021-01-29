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

import itemImg from '../../../resourse/ES/es_7_detail.png';

const SingleCamera = () => {

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
                  <p className="es-firstWord">DUAL CAMERA SOLUTIONS FOR SMARTPHONES</p>
                  <p className="es-secondWord">MORIAHTOWN / DUAL CAMERA SOLUTIONS FOR SMARTPHONES</p>
                </div>
              </div>

              <div className="main-content-es">
                <div className="center-es">

                  <div className="center-left">
                    <img src={itemImg} alt="esdetail-img" />
                  </div>

                  <div className="center-right">
                    <div>
                      <p className="item-topic">EMBEDDED SOLUTION</p>
                      <p className="docu-topic">DUAL CAMERA SOLUTIONS FOR SMARTPHONES</p>
                    </div>
                    <div className="underLine-area-es">
                      <p className="topic-underLine-es" />
                    </div>
                    <div className="discrip-body">
                      As dual camera smartphones is gradually accepted by the market, ArcSoft has been developing solutions to fit various hardware configurations, including a complete suite which includes RGB + Mono dual-camera technology for improving image quality under low-light conditions, Wide RGB + Tele RGB (W+T) dual camera technology for virtualized optical zoom, and depth-sensing camera technologies.<br /><br />
                      In 2015, ArcSoft assisted smartphone manufacturers in releasing the world’s first (RGB + Mono) rear facing dual camera smartphone, which quickly became a hot feature within the industry. At the same time, we entered into close partnership with major camera module manufacturers, camera sensor manufacturers and SoC platform manufacturers, all together driving the development of future mobile dual camera technologies and the applications.
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
                  <a href="/SingleCamera">
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
                  <a href="/CameraSolu">
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
                  <p className="m-es-firstWord">DUAL CAMERA SOLUTIONS FOR SMARTPHONES</p>
                  <p className="m-es-secondWord">MORIAHTOWN / SINGLE CAMERA SOLUTIONS FOR SMARTPHONES</p>
                </div>
              </div>

              <div className="m-main-content-es">

                <div className="m-center-top">
                  <img className="m-dualCamera-img" src={itemImg} alt="dualCamera-img" />
                </div>

                <div className="m-discrip-info">
                  <div>
                    <p className="m-item-topic">EMBEDDED SOLUTION</p>
                    <p className="m-item-docu">DUAL CAMERA SOLUTIONS</p>
                    <p className="m-item-docu">FOR SMARTPHONES</p>
                    
                    <div>
                      <p className="m-topic-underLine-detail" />
                    </div>
                  </div>
                </div>

                <div className="m-center-bottom">
                  <div className="m-discrip-body">
                    As dual camera smartphones is gradually accepted by the market, ArcSoft has been developing solutions to fit various hardware configurations, including a complete suite which includes RGB + Mono dual-camera technology for improving image quality under low-light conditions, Wide RGB + Tele RGB (W+T) dual camera technology for virtualized optical zoom, and depth-sensing camera technologies.
                    <br /><br />
                    In 2015, ArcSoft assisted smartphone manufacturers in releasing the world’s first (RGB + Mono) rear facing dual camera smartphone, which quickly became a hot feature within the industry. At the same time, we entered into close partnership with major camera module manufacturers, camera sensor manufacturers and SoC platform manufacturers, all together driving the development of future mobile dual camera technologies and the applications.
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
                    <a href="/SingleCamera">
                      <button type="button" className="m-left-btnImg">
                        <span className="material-icons" style={{color:'#ffffff', fontSize:'15px'}}>
                          arrow_back_ios_new
                        </span>
                      </button>
                    </a>
                  </div>
                  <div className="m-business-kinds">EMBEDDED SOLUTION</div>
                  
                  <div className="m-next-btn">
                    <a href="/CameraSolu">
                      <button type="button" className="m-right-btnImg">
                        <span className="material-icons" style={{color:'#ffffff', fontSize:'15px'}}>
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

export default SingleCamera;