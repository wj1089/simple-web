import React from 'react';
import Footer from '../../footer/Footer';
import '../item.css';
import '../../../index.css';
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
                    <p className="docu-topic">360° CAMERA SOLUTIONS</p>
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

                    <div className="Link-icons">
                      <p className="icon-round"><i className="fab fa-facebook-f" /></p>
                      <p className="icon-round"><i className="fab fa-linkedin-in" /></p>
                      <p className="icon-round"><i className="fab fa-twitter" /></p>
                      <p className="icon-round"><i className="fab fa-tumblr" /></p>
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

export default MotionSen;