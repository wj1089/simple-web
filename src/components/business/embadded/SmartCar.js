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

import itemImg from '../../../resourse/ES/es_3_detail.png';


const SmartCar = () => {

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
                    </div>
                  </div>

                </div>
              </div>

              <div className="prevNext-btn">
                <div className="prev-btn">
                  <a href="/SmartRefri">
                    <div className="left-btnImg" style={{color:'#ffffff'}}>
                      <span className="material-icons">
                        arrow_back_ios_new
                      </span>
                    </div>
                  </a>
                  <p className="btn-info">PREVIOUS PROJECT</p>
                </div>
                <div className="business-kinds">EMBEDDED SOLUTION</div>
                <div className="next-btn">
                  <a href="/ProjectSolu">
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
                  <p className="m-es-firstWord">SMART CAR DVR SOLUTIONS</p>
                  <p className="m-es-secondWord">MORIAHTOWN / SMART CAR DVR SOLUTIONS</p>
                </div>
              </div>

              <div className="m-main-content-es">

                <div className="m-center-top">
                  <img className="m-smartCar-img" src={itemImg} alt="smartCar-img" />
                </div>

                <div className="m-discrip-info">
                  <div className="">
                    <p className="m-item-topic">EMBEDDED SOLUTION</p>
                    <p className="m-item-docu">SMART CAR DVR SOLUTIONS</p>
                    
                    <div className="m-underLine-area-detail">
                      <p className="m-topic-underLine-detail" />
                    </div>
                  </div>
                </div>

                <div className="m-center-bottom">
                  <div className="m-discrip-body">
                    Automobile digital video recorders (Car DVR) have already been widely incorporated into today’s vehicles, but missing some features that are also very important. For example, most recorders only collect data of the vehicle’s surroundings, but very little or no attention is paid to in-car environment that can also impact the safety.
                    <br /><br />
                    ArcSoft Smart Car DVR solutions works with the in-car camera embedded in a car DVR. This solution, based on the images captured by the in-car camera, will analyze driver fatigue and identity regardless of lighting conditions, face angles or vehicle vibration. Two key features are offered in the SDK:
                    <br /><br />
                    <b>· Fatigue Detection:</b> Driver fatigue has already become one of the most important “hidden dangers” to driving safety, as it could cause serious damage of live and property. ArcSoft uses detailed facial feature recognition, gaze tracking, and comprehensive algorithms to accurately determine whether or not the driver is in fatigue, and help the vehicle to react accordingly.
                    <br />
                    <b>· Identity Recognition:</b> Through the use of ArcSoft’s powerful facial analysis technology, systems can perform driver recognition and determine whether or not they have authorization to operate the vehicle, instantaneously notifying the car owner of unauthorized access via the Internet to help preventing the car from theft.
                    <br /><br />
                    ArcSoft also provides solutions for working with external vehicle cameras, such as detecting other cars and human around, detecting swerving, driving over traffic lines, color of lane divider, and others that could impact driving safety.                  
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
                    <a href="/smartRefri">
                      <div className="m-left-btnImg">
                        <span className="material-icons" style={{color:'#ffffff', fontSize:'15px'}}>
                          arrow_back_ios_new
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="m-business-kinds">EMBEDDED SOLUTION</div>
                  
                  <div className="m-next-btn">
                    <a href="/projectSolu">
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

export default SmartCar;