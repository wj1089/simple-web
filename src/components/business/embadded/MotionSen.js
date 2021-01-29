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

import itemImg from '../../../resourse/ES/es_5_detail.png';

import integrating from '../../../resourse/ES/es_5_detail_icon1.png';
import performance from '../../../resourse/ES/es_5_detail_icon2.png';
import design from '../../../resourse/ES/es_5_detail_icon3.png';


// import facebook from '../../../resourse/ES/es_6_detail.png';
// import twitter from '../../../resourse/ES/es_6_detail.png';
// import linkdein from '../../../resourse/ES/es_6_detail.png';
// import tt from '../../../resourse/ES/es_6_detail.png';

const MotionSen = () => {

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
                  <p className="es-firstWord">MOTION SENSING CONTROLLER SOLUTIONS</p>
                  <p className="es-secondWord">MORIAHTOWN / MOTION SENSING CONTROLLER SOLUTIONS</p>
                </div>
              </div>

              <div className="main-content-es">
                <div className="center-es">

                  <div className="center-left">
                    <img src={itemImg} alt="motion-img" />
                  </div>

                  <div className="center-right">
                    <div className="discrip-title">
                      <p className="item-topic">EMBEDDED SOLUTION</p>
                      <p className="docu-topic">MOTION SENSING CONTROLLER SOLUTIONS</p>
                    </div>
                    <div className="underLine-area-es">
                      <p className="topic-underLine-es" />
                    </div>
                    <div className="discrip-body">
                      <b>Depth-Sensing Camera Solutions</b><br />
                      Depth-sensing cameras not only capture 2D image color and brightness information of a scene, but also obtain depth data of the objects in it. This extra layer of information can better simulate how the human eyes work, giving users a more natural and realistic experience. As an important component of the cutting-edge applications such as augmented and virtual reality (AR/VR), human-computer interaction and autopilot vehicles, depth-sensing cameras will be widely used in the market.<br />
                      <br />
                      ArcSoft’s Depth-sensing camera solution include the 3D hand gesture control technology, which helps users remotely interact with machines naturally, and the 3D scanning technology, which enables a user acquire an accurate 3D representation of an object’s shape and dimension by using as simple as a handheld camera. For many years, ArcSoft has engaged with several leading depth-sensing camera ODM/OEMs to make these systems commercially available to the market.<br />
                      <br />
                      To make our solution working effectively and more precisely, ArcSoft also offer the camera module manufacturers software tools for optical calibrations with engineering services, helping to increase production yield rate.<br />
                      <br />
                      <b>3D Hand-Gesture Recognition Technologies:</b><br />
                      Through the use of depth-sensing cameras, ArcSoft has created 3D hand-gesture technologies which can instantaneously form a complete 3D image of human hands for recognizing and tracking their motions. When paired with accurate depth information, users will be able to interact with the remote computer or appliance in a fashion that is more natural than traditional means. In fact, these technologies have already been applied to many game consoles such as Microsoft’s XBOX and some of the “smart” TVs, as well as the future VR/AR equipment, allowing their users to interact with the virtual environment in more realistic ways.<br />
                      <br />
                      ArcSoft Depth-Sensing Camera Features:
                      <br />

                      <img src={integrating} alt="Integration-img" />  <br />
                      <b>Easy Integration</b>  <br />
                      Can be used in low profile systems with easy integration
                      <br />

                      <img src={performance} alt="Performance-img" />  <br />
                      <b>High Performance, Low Power Consumption</b>  <br />
                      No need to worry about high CPU usage, we can resolve the bottleneck
                      <br />


                      <img src={design} alt="Design-img" />  <br />
                      <b>Designed for the Best User Experience</b>  <br />
                      Hand-gestures, and their recognition and interaction methods are designed with natural interaction in mind
                      <br />
                      
                      
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
                  <a href="/CameraSolu">
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
                  <a href="/SmartRefri">
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
                  <p className="m-es-firstWord">MOTION SENSING CONTROLLER SOLUTIONS</p>
                  <p className="m-es-secondWord">MORIAHTOWN / MOTION SENSING CONTROLLER SOLUTIONS</p>
                </div>
              </div>

              <div className="m-main-content-es">

                <div className="m-center-top">
                  <img className="m-cameraSolu-img" src={itemImg} alt="cameraSolu-img" />
                </div>

                <div className="m-discrip-info">
                  <div className="">
                    <p className="m-item-topic">EMBEDDED SOLUTION</p>
                    <p className="m-item-docu">MOTION SENSING CONTROLLER SOLUTIONS</p>
                    
                    <div className="m-underLine-area-detail">
                      <p className="m-topic-underLine-detail" />
                    </div>
                  </div>
                </div>

                <div className="m-center-bottom">
                  <div className="m-discrip-body">
                    <b>Depth-Sensing Camera Solutions</b><br />
                    Depth-sensing cameras not only capture 2D image color and brightness information of a scene, but also obtain depth data of the objects in it. This extra layer of information can better simulate how the human eyes work, giving users a more natural and realistic experience. As an important component of the cutting-edge applications such as augmented and virtual reality (AR/VR), human-computer interaction and autopilot vehicles, depth-sensing cameras will be widely used in the market.
                    <br /><br />
                    ArcSoft’s Depth-sensing camera solution include the 3D hand gesture control technology, which helps users remotely interact with machines naturally, and the 3D scanning technology, which enables a user acquire an accurate 3D representation of an object’s shape and dimension by using as simple as a handheld camera. For many years, ArcSoft has engaged with several leading depth-sensing camera ODM/OEMs to make these systems commercially available to the market.
                    <br /><br />
                    To make our solution working effectively and more precisely, ArcSoft also offer the camera module manufacturers software tools for optical calibrations with engineering services, helping to increase production yield rate.
                    <br /><br />
                    <b>3D Hand-Gesture Recognition Technologies:</b><br />
                    Through the use of depth-sensing cameras, ArcSoft has created 3D hand-gesture technologies which can instantaneously form a complete 3D image of human hands for recognizing and tracking their motions. When paired with accurate depth information, users will be able to interact with the remote computer or appliance in a fashion that is more natural than traditional means. In fact, these technologies have already been applied to many game consoles such as Microsoft’s XBOX and some of the “smart” TVs, as well as the future VR/AR equipment, allowing their users to interact with the virtual environment in more realistic ways.
                  </div>

                  <img className="m-motion-toolImg" src={integrating} alt="Integration-img" />  <br />
                  <div className="m-motion-discrip">
                    <b>Easy Integration</b>  <br />
                    Can be used in low profile systems with easy integration
                    <br />
                  </div>

                  <img className="m-motion-toolImg" src={performance} alt="Performance-img" />  <br />
                  <div className="m-motion-discrip">
                    <b>High Performance, Low Power Consumption</b>  <br />
                    No need to worry about high CPU usage, we can resolve the bottleneck
                    <br />
                  </div>

                  <img className="m-motion-toolImg" src={design} alt="Design-img" />  <br />
                  <div className="m-motion-discrip">
                    <b>Designed for the Best User Experience</b>  <br />
                    Hand-gestures, and their recognition and interaction methods are designed with natural interaction in mind
                    <br />
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
                    <a href="/CameraSolu">
                      <button type="button" className="m-left-btnImg">
                        <span className="material-icons" style={{color:'#ffffff', fontSize:'15px'}}>
                          arrow_back_ios_new
                        </span>
                      </button>
                    </a>
                  </div>
                  <div className="m-business-kinds">EMBEDDED SOLUTION</div>
                  
                  <div className="m-next-btn">
                    <a href="/smartRefri">
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

export default MotionSen;