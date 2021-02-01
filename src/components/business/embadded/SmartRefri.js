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

import itemImg from '../../../resourse/ES/es_4_detail.png';

const SmartRefri = () => {

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
                  <p className="es-firstWord">SMART REFRIGERATOR SOLUTIONS CONTACT US</p>
                  <p className="es-secondWord">MORIAHTOWN / SMART REFRIGERATOR SOLUTIONS CONTACT US</p>
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
                      <p className="docu-topic">SMART REFRIGERATOR SOLUTIONS CONTACT US</p>
                    </div>
                    <div className="underLine-area-es">
                      <p className="topic-underLine-es" />
                    </div>
                    <div className="discrip-body">
                      Refrigerator is one of the most used appliances in a home. ArcSoft Smart Refrigerator Solutions include our cutting-edge food recognition engine that helps the refrigerator makers develop features of “guess and automatically get what is needed”.<br /><br />

                      ArcSoft’s Smart Refrigerator software SDK works with the interior and exterior cameras in a refrigerator:<br /><br />

                      · Based on the imaging data of items/foods captured by the cameras installed inside a refrigerator, and combining with the new technologies of big data analysis, cloud computing, deep learning of food material recognition, users’ dietary habits will be able to obtain. Therefore, personalized services to users such as online shopping, nutritional recommendations, and high-quality recipes can be offered.
                      · The exterior cameras is usually designed to work with the refrigerator’s external display panel, allowing users to give commands through ArcSoft’s hand-gesture technologies when it is inconvenient (for example, users’ hands are wet or in gloves) to touch the panel. This offers users a smoother and smarter refrigerator experience.<br /><br />

                      This solution guarantees that even in low-light condition, algorithms can still provide high-quality, high-accuracy results.
                      <div className="discrip-foot">
                        <span className="foot-title">
                          <p className="foot-date">DATE</p>
                          <p className="foot-dateWord">2021-02-01</p>
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
                  <a href="/MotionSen">
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
                  <a href="/SmartCar">
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
                  <p className="m-es-firstWord">SMART REFRIGERATOR SOLUTIONS CONTACT US</p>
                  <p className="m-es-secondWord">MORIAHTOWN / SMART REFRIGERATOR SOLUTIONS CONTACT US</p>
                </div>
              </div>

              <div className="m-main-content-es">

                <div className="m-center-top">
                  <img className="m-smartRif-img" src={itemImg} alt="smartRif-img" />
                </div>

                <div className="m-discrip-info">
                  <div className="">
                    <p className="m-item-topic">EMBEDDED SOLUTION</p>
                    <p className="m-item-docu">SMART REFRIGERATOR SOLUTIONS CONTACT US</p>
                    
                    <div>
                      <p className="m-topic-underLine-detail" />
                    </div>
                  </div>
                </div>

                <div className="m-center-bottom">
                  <div className="m-discrip-body">
                    Refrigerator is one of the most used appliances in a home. ArcSoft Smart Refrigerator Solutions include our cutting-edge food recognition engine that helps the refrigerator makers develop features of “guess and automatically get what is needed”.
                    <br /><br />
                    ArcSoft’s Smart Refrigerator software SDK works with the interior and exterior cameras in a refrigerator:
                    <br /><br />
                    · Based on the imaging data of items/foods captured by the cameras installed inside a refrigerator, and combining with the new technologies of big data analysis, cloud computing, deep learning of food material recognition, users’ dietary habits will be able to obtain. Therefore, personalized services to users such as online shopping, nutritional recommendations, and high-quality recipes can be offered.
                    <br />
                    · The exterior cameras is usually designed to work with the refrigerator’s external display panel, allowing users to give commands through ArcSoft’s hand-gesture technologies when it is inconvenient (for example, users’ hands are wet or in gloves) to touch the panel. This offers users a smoother and smarter refrigerator experience.
                    <br /><br />
                    This solution guarantees that even in low-light condition, algorithms can still provide high-quality, high-accuracy results.                  
                  </div>
                </div>

                <div className="m-foot-info">
                  <span className="m-foot-fisrt">
                    <p className="m-foot-date">DATE</p>
                    <p className="m-foot-dateWord">2021-02-01</p>
                  </span>

                  <span className="m-foot-second">
                    <p className="m-foot-date">TAGS</p>
                    <p className="m-foot-dateWord">Embedded Solution</p>
                  </span>
                </div>


                <div className="m-prevNext-btn">
                  <div className="m-prev-btn">
                    <a href="/motionSen">
                      <button type="button" className="m-left-btnImg">
                        <span className="material-icons" style={{color:'#ffffff', fontSize:'15px'}}>
                          arrow_back_ios_new
                        </span>
                      </button>
                    </a>
                  </div>
                  <div className="m-business-kinds">EMBEDDED SOLUTION</div>
                  
                  <div className="m-next-btn">
                    <a href="/smartCar">
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

export default SmartRefri;