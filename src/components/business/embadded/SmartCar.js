import React from 'react';
import Footer from '../../footer/Footer';
import '../item.css';
import '../../../index.css';
import itemImg from '../../../resourse/ES/es_3_detail.png';

// import facebook from '../../../resourse/ES/es_6_detail.png';
// import twitter from '../../../resourse/ES/es_6_detail.png';
// import linkdein from '../../../resourse/ES/es_6_detail.png';
// import tt from '../../../resourse/ES/es_6_detail.png';

const SmartCar = () => {

    return (
      <>
        <div className="full-screen-dark">
          <div className="screen-layout-dark">
            <div className="lay-top-dark" />
          </div>

          <div className="screen-center-es">
            <div className="center-imgArea-es">
              <div className="es-topText">
                <p className="es-firstWord">SMART CAR DVR SOLUTIONS</p>
                <p className="es-secondWord">MORIAHTOWN / SMART CAR DVR SOLUTIONSs</p>
              </div>
            </div>

            <div className="main-content-es">
              <div className="center-es">

                <div className="center-left">
                  <img className="smartCar-img" src={itemImg} alt="smartCar-img" />
                </div>

                <div className="center-right">
                  <div className="discrip-title">
                    <p className="item-topic">EMBEDDED SOLUTION</p>
                    <p className="docu-topic">SMART CAR DVR SOLUTIONS</p>
                  </div>
                  <div className="underLine-area-es">
                    <p className="topic-underLine-es" />
                  </div>
                  <div className="discrip-body">
                    Automobile digital video recorders (Car DVR) have already been widely incorporated into today’s vehicles, but missing some features that are also very important. For example, most recorders only collect data of the vehicle’s surroundings, but very little or no attention is paid to in-car environment that can also impact the safety.<br /><br />

                    ArcSoft Smart Car DVR solutions works with the in-car camera embedded in a car DVR. This solution, based on the images captured by the in-car camera, will analyze driver fatigue and identity regardless of lighting conditions, face angles or vehicle vibration. Two key features are offered in the SDK:<br /><br />

                    <b>· Fatigue Detection:</b> Driver fatigue has already become one of the most important “hidden dangers” to driving safety, as it could cause serious damage of live and property. ArcSoft uses detailed facial feature recognition, gaze tracking, and comprehensive algorithms to accurately determine whether or not the driver is in fatigue, and help the vehicle to react accordingly.<br />
                    <b>· Identity Recognition:</b>s Through the use of ArcSoft’s powerful facial analysis technology, systems can perform driver recognition and determine whether or not they have authorization to operate the vehicle, instantaneously notifying the car owner of unauthorized access via the Internet to help preventing the car from theft.<br /><br />

                    ArcSoft also provides solutions for working with external vehicle cameras, such as detecting other cars and human around, detecting swerving, driving over traffic lines, color of lane divider, and others that could impact driving safety.<br />
                    
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

export default SmartCar;