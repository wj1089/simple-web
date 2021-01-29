import React from 'react';
import {
  BrowserView,
  MobileView
} from "react-device-detect";
import Footer from '../footer/Footer';
import './business.css';
import '../footer/footer.css';
import './item.css';
import './mitem.css';
import '../../index.css';
import '../../mindex.css';

import single from '../../resourse/ES/es_8.png'
import dual from '../../resourse/ES/es_7.png'
import cameraSolu from '../../resourse/ES/es_6.png'
import motionSen from '../../resourse/ES/es_5.png'
import smartRefri from '../../resourse/ES/es_4.png'
import smartCar from '../../resourse/ES/es_3.png'
import projectSolu from '../../resourse/ES/es_2.png'
import liveVideo from '../../resourse/ES/es_1.png'


const Business = () => {

  return (
    <>
      <BrowserView>
        <div div className="full-screen-busy">
          <div className="screen-layout-busy">
            <div className="lay-top-busy" />
          </div>

          <div className="screen-center-busy">
            <div className="center-imgArea-busy">
              <div className="center-imgText-busy">
                EMBEDDED SOLUTION
                <div className="underLine-area">
                  <p className="topic-underLine" />
                </div>
                <p className="imgText-p">Embedded 소프트웨어 및 솔루션 기술</p>
              </div>
            </div>
            <div className="main-content-busy">
              <div className="center-business">
                <div className="business-imgArea">
                  <div className="imgArea-first-row">

                    <div className="inSide-content-busy">
                      <a className="img-link-detail" href="/singleCamera">
                        <img className="img-busy" src={single} alt="single-img" />
                      </a>
                      <div className="text-busy">
                        <p className="text-busy-title">SINGLE CAMERA SOLUTIONS FOR SMARTPHONES</p>
                      </div>
                    </div>

                    <div className="inSide-content-busy">
                      <a className="img-link-detail" href="/dualcamera">
                        <img className="img-busy" src={dual} alt="dual-img" />
                      </a>                      
                      <div className="text-busy">
                        <p className="text-busy-title">DUAL CAMERA SOLUTIONS FOR SMARTPHONES</p>
                      </div>
                    </div> 
                    
                    <div className="inSide-content-busy">
                      <a className="img-link-detail" href="/cameraSolu">
                        <img className="img-busy" src={cameraSolu} alt="cameraSolu-img" />
                      </a>                      
                      <div className="text-busy">
                        <p className="text-busy-title">360° CAMERA SOLUTIONS </p>
                      </div>
                    </div> 

                    <div className="inSide-content-busy">
                      <a className="img-link-detail" href="/motionSen">
                        <img className="img-busy" src={motionSen} alt="motionSen-img" />
                      </a>                      
                      <div className="text-busy">
                        <p className="text-busy-title">MOTION SENSING CONTROLLER SOLUTIONS</p>
                      </div>
                    </div>

                  </div>

                  <div className="imgArea-second-row">
                    <div className="inSide-content-busy">
                      <a className="img-link-detail" href="/smartRefri">
                        <img className="img-busy" src={smartRefri} alt="smartRefri-img" />
                      </a>   
                      <div className="text-busy">
                        <p className="text-busy-title">SMART REFRIGERATOR SOLUTIONS CONTACT US</p>
                      </div>
                    </div>
                    <div className="inSide-content-busy">
                      <a className="img-link-detail" href="/smartCar">
                        <img className="img-busy" src={smartCar} alt="smartCar-img" />
                      </a>                         
                      <div className="text-busy">
                        <p className="text-busy-title">SMART CAR DVR SOLUTIONS</p>
                      </div>
                    </div> 
                    <div className="inSide-content-busy">
                      <a className="img-link-detail" href="/projectSolu">
                        <img className="img-busy" src={projectSolu} alt="projectSolu-img" />
                      </a>                         
                      <div className="text-busy">
                        <p className="text-busy-title">PROJECTOR SOLUTIONS</p>
                      </div>
                    </div> 
                    <div className="inSide-content-busy">
                      <a className="img-link-detail" href="/liveVideo">
                        <img className="img-busy" src={liveVideo} alt="liveVideo-img" />
                      </a>   
                      <div className="text-busy">
                        <p className="text-busy-title">LIVE VIDEO <br />BROADCASTING SOLUTIONS</p>
                      </div>
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
                  <p className="m-page-mainWord">EMBEDDED SOLUTION</p>
                  <div className="m-underLine-area">
                    <p className="m-topic-underLine" />
                  </div>
                  <p className="m-page-subWord">Embedded 소프트웨어 및 솔루션 기술</p>
                </div>
              </div>

              <div className="m-center-business">
                <div className="m-business-imgArea">

                  <div className="m-center-contentArea">
                    
                    <div className="m-center-row">

                      <div className="m-center-content">
                        <a className="img-link-detail" href="/singleCamera">
                          <img className="m-img-busy" src={single} alt="single-img" />
                        </a>
                        <div className="m-text-busy">
                          <p className="m-text-busy-title">SINGLE CAMERA SOLUTIONS FOR SMARTPHONES</p>
                        </div>
                      </div>

                      <div className="m-center-content">
                        <a className="img-link-detail" href="/dualcamera">
                          <img className="m-img-busy" src={dual} alt="dual-img" />
                        </a>
                        <div className="m-text-busy">
                          <p className="m-text-busy-title">DUAL CAMERA SOLUTIONS FOR SMARTPHONES</p>
                        </div>
                      </div>
                    </div>

                    <div className="m-center-row">
                      <div className="m-center-content">
                        <a className="img-link-detail" href="/cameraSolu">
                          <img className="m-img-busy" src={cameraSolu} alt="cameraSolu-img" />
                        </a>
                        <div className="m-text-busy">
                          <p className="m-text-busy-title">360° CAMERA SOLUTIONS </p>
                        </div>
                      </div>

                      <div className="m-center-content">
                        <a className="img-link-detail" href="/motionSen">
                          <img className="m-img-busy" src={motionSen} alt="motionSen-img" />
                        </a>
                        <div className="m-text-busy">
                          <p className="m-text-busy-title">MOTION SENSING CONTROLLER SOLUTIONS</p>
                        </div>
                      </div>
                    </div>

                    <div className="m-center-row">
                      <div className="m-center-content">
                        <a className="img-link-detail" href="/smartRefri">
                          <img className="m-img-busy" src={smartRefri} alt="smartRefri-img" />
                        </a>
                        <div className="m-text-busy">
                          <p className="m-text-busy-title">SMART REFRIGERATOR SOLUTIONS CONTACT US</p>
                        </div>
                      </div>

                      <div className="m-center-content">
                        <a className="img-link-detail" href="/smartCar">
                          <img className="m-img-busy" src={smartCar} alt="smartCar-img" />
                        </a>
                        <div className="m-text-busy">
                          <p className="m-text-busy-title">SMART CAR DVR SOLUTIONS</p>
                        </div>
                      </div>
                    </div>

                    <div className="m-center-row">
                      <div className="m-center-content">
                        <a className="img-link-detail" href="/projectSolu">
                          <img className="m-img-busy" src={projectSolu} alt="projectSolu-img" />
                        </a>
                        <div className="m-text-busy">
                          <p className="m-text-busy-title">PROJECTOR SOLUTIONS</p>
                        </div>
                      </div>

                      <div className="m-center-content">
                        <a className="img-link-detail" href="/liveVideo">
                          <img className="m-img-busy" src={liveVideo} alt="liveVideo-img" />
                        </a>
                        <div className="m-text-busy">
                          <p className="m-text-busy-title">LIVE VIDEO <br />BROADCASTING SOLUTIONS</p>
                        </div>
                      </div>
                    </div>
                    
                  </div>

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

export default Business;