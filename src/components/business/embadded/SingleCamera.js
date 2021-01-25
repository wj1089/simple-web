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

import itemImg from '../../../resourse/ES/es_8_detail.jpg'

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
                  <p className="es-firstWord">SINGLE CAMERA SOLUTIONS FOR SMARTPHONES</p>
                  <p className="es-secondWord">MORIAHTOWN / SINGLE CAMERA SOLUTIONS FOR SMARTPHONES</p>
                </div>
              </div>

              <div className="main-content-es">
                <div className="center-es">

                  <div className="center-left">
                    <img className="sigleCamera-left" src={itemImg} alt="sigleCamera-img" />
                  </div>

                  <div className="center-right">
                    <div className="discrip-title">
                      <p className="item-topic">EMBEDDED SOLUTION</p>
                      <p className="docu-topic">SINGLE CAMERA SOLUTIONS</p>
                      <p className="docu-topic">FOR SMARTPHONES</p>
                    </div>
                    <div className="underLine-area-es">
                      <p className="topic-underLine-es" />
                    </div>
                    <div className="discrip-body">
                      ArcSoft offers a complete suite of image and video solutions for both front and rear-facing smartphone cameras to assist phone manufacturers improving the quality of captured images and recorded video, and also expanding the capabilities of existing camera apps.<br /><br />

                      Our licensed algorithms are thoroughly optimized to fit the specifications of most popular phone SoC brands such as Qualcomm, MediaTek, Samsung, and Spreadtrum. These optimizations significantly help to lower the requirements on the hardware, therefore our solutions can usually all be applied to an OEM’s low, mid, and high-end platforms for the mass market.<br /><br />

                      ArcSoft also provides professional engineering integration services and technical support for its mobile camera solutions. Our team specializes in the Android framework and its camera Hardware Abstraction Layer (HAL), as well as the structure and development of mobile apps. Our deep understanding of all mainstream camera sensors and modules allows us to provide OEMs with fast integration and optimization, resulting in high performance and customer satisfaction on the end products.<br /><br />

                      ArcSoft’s single camera solutions for smartphones are already embedded on billions of smartphones shipped worldwide.
                    </div>
                    <div className="discrip-body">
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
                <div className="prev-btn" />
                <div className="business-kinds">EMBEDDED SOLUTION</div>
                <div className="next-btn">
                  <a href="/DualCamera">
                    <div className="right-btnImg">
                      <span className="material-icons" style={{color:'#ffffff'}}>
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
                  <p className="m-es-firstWord">SINGLE CAMERA SOLUTIONS FOR SMARTPHONES</p>
                  <p className="m-es-secondWord">MORIAHTOWN / SINGLE CAMERA SOLUTIONS FOR SMARTPHONES</p>
                </div>
              </div>

              <div className="m-main-content-es">

                <div className="m-center-top">
                  <img className="m-sigleCamera-img" src={itemImg} alt="sigleCamera-img" />
                </div>

                <div className="m-discrip-info">
                  <p className="m-item-topic">EMBEDDED SOLUTION</p>
                  <p className="m-item-docu">SINGLE CAMERA SOLUTIONS FOR SMARTPHONES</p>
                  
                  <div className="m-underLine-area-detail">
                    <p className="m-topic-underLine-detail" />
                  </div>
                </div>

                <div className="m-center-bottom">
                  <div className="m-discrip-body">
                    ArcSoft offers a complete suite of image and video solutions for both front and rear-facing martphone cameras to assist phone manufacturers improving the quality of captured images and recorded video, and also expanding the capabilities of existing camera apps.
                    <br /><br />
                    Our licensed algorithms are thoroughly optimized to fit the specifications of most popular phone SoC brands such as Qualcomm, MediaTek, Samsung, and Spreadtrum. These optimizations significantly help to lower the requirements on the hardware, therefore our solutions can usually all be applied to an OEM’s low, mid, and high-end platforms for the mass market.
                    <br /><br />
                    ArcSoft also provides professional engineering integration services and technical support for its mobile camera solutions. Our team specializes in the Android framework and its camera Hardware Abstraction Layer (HAL), as well as the structure and development of mobile apps. Our deep understanding of all mainstream camera sensors and modules allows us to provide OEMs with fast integration and optimization, resulting in high performance and customer satisfaction on the end products.
                    <br /><br />
                    ArcSoft’s single camera solutions for smartphones are already embedded on billions of smartphones shipped worldwide.                  
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
                    {/* emty */}
                  </div>
                  <div className="m-business-kinds">EMBEDDED SOLUTION</div>
                  
                  <div className="m-next-btn">
                    <a href="/dualCamera">
                      <div className="m-right-btnImg">
                        <span className="material-icons" style={{color:'#ffffff', fontSize:'15px'}}>
                          arrow_forward_ios
                        </span>
                      </div>
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