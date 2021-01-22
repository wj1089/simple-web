import React from 'react';
import {
  BrowserView,
  MobileView
} from "react-device-detect";
import Footer from '../footer/Footer';
import './mission.css';
import './mmission.css';
import '../../index.css';
import '../../mindex.css';

import missionImg from '../../resourse/missonphoto/mission.png'
import visionImg from '../../resourse/missonphoto/vision.png'
import mmissionImg from '../../resourse/m.mission/m.mission.png'
import mvisionImg from '../../resourse/m.mission/m.vision.png'


import cv1Img from '../../resourse/missonphoto/cv_1.png'
import cv2Img from '../../resourse/missonphoto/cv_2.png'
import cv3Img from '../../resourse/missonphoto/cv_3.png'
import cv4Img from '../../resourse/missonphoto/cv_4.png'
import cv5Img from '../../resourse/missonphoto/cv_5.png'
import cv6Img from '../../resourse/missonphoto/cv_6.png'



const Mission = () => {


    return (
      <>
        <BrowserView>
          <div className="full-screen">
            <div className="screen-layout">
              <div className="lay-top" />
              <div className="lay-mission-first" />
              <div className="lay-mission-second" />
              <div className="lay-mission-third" />
            </div>

            <div className="screen-centerArea">
              <div className="center-imgArea-mission">
                <div className="center-imgText">
                  COMPANY
                </div>
              </div>
              <div className="center-selectBar">
                <a className="disable-Button" href="/Company">ABOUT</a>
                <div className="select-Button">MISSION</div>
                <a className="disable-Button" href="/Patent">PATENT</a>
              </div>

              <div className="center-visionAreaTop">
                <div>
                  <h1>MISSION</h1>
                  <div className="underLine-area">
                    <p className="topic-underLine" />
                  </div>
                  <div className="content-box">
                    <img src={missionImg} alt="mission" />
                    <div align="left" style={{ marginLeft: 15 }}>
                      <p className="content-subTitleSize">CREATING SHARED VALUE PARTNER</p>
                      <h2 style={{ marginBottom: 10 }}>FOR CO-EVOLUTION</h2>
                      <span className="content-rightText">공유 가치 창출을 위하여 함께 성장하는 창조적 파트너</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="center-visionAreaBottom">
                <div className="center-vision">
                  <h1>VISION</h1>
                  <div className="underLine-area">
                    <p className="topic-underLine" />
                  </div>
                  <div className="content-box">
                    <img src={visionImg} alt="mission" />
                    <div align="left" style={{ marginLeft: 15 }}>
                      <p className="content-subTitleSize">2030 SMART ICT</p>
                      <h2 style={{ marginBottom: 10 }}>FUSION BUSINESS LEADER!</h2>
                      <span className="content-rightText">2030 스마트 ICT 융합 비지니스 리더!</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="center-coreArea">
                <div className="center-core">
                  <h1>CORE VALUE</h1>
                  <div className="underLine-area">
                    <p className="topic-underLine" />
                  </div>
                  <div>
                    <div className="core-bodytop">
                      <div className="core-innerbody" align="left">
                        <img className="core-image" src={cv1Img} alt="mission" />
                        <div className="core-contentbody">
                          <div>
                            <span className="core-contenttitle">MEDIATION</span>
                          </div>
                          <div className="core-contentsub">
                            <span>매개 비즈니스의 선두 주자를 지향합니다. 우리는 고객의 요구와 기대를 이해하고 이를 충족하기 위해 노력합니다. 모리아타운의 목적은 이윤 추구만을 위함이 아닙니다. 우리는 고객, 파트너와 함께 성장하고 발전합니다.</span>
                          </div>
                        </div>
                      </div>
                      <div className="core-innerbodycenter" align="left">
                        <img className="core-image" src={cv2Img} alt="mission" />
                        <div className="core-contentbody">
                          <div>
                            <span className="core-contenttitle">OBSERVATION</span>
                          </div>
                          <div className="core-contentsub">
                            <span>관찰을 통한 정교한 업무의 추진을 확립합니다. 우리는 각각의 지식과 정보를 발전적으로 탐구합니다. 모리아타운은 가치창출을 통해 지속가능한 발전을 위해 노력합니다.</span>
                          </div>
                        </div>
                      </div>
                      <div className="core-innerbody" align="left">
                        <img className="core-image" src={cv3Img} alt="mission" />
                        <div className="core-contentbody">
                          <div>
                            <span className="core-contenttitle">RESPECT</span>
                          </div>
                          <div className="core-contentsub">
                            <span>상호존중을 통한 동반관계를 구축합니다. 우리는 서로에 대해 배려하고 서로의 차이점을 인정합니다. 모리아타운은 상호 간의 배려를 바탕으로 한 소통을 원칙으로 합니다.</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="core-bodybottom">
                      <div className="core-innerbody" align="left">
                        <img className="core-image" src={cv4Img} alt="mission" />
                        <div className="core-contentbody">
                          <div>
                            <span className="core-contenttitle">INSIGHT</span>
                          </div>
                          <div className="core-contentsub">
                            <span>통찰력을 기반으로 시장을 개척합니다. 우리는 호기심과 아이디어를 적극적으로 수용하여 발전합니다. 모리아타운은 충분한 시장조사와 사례분석을 기반으로 사업을 진행합니다.</span>
                          </div>
                        </div>
                      </div>
                      <div className="core-innerbodycenter" align="left">
                        <img className="core-image" src={cv5Img} alt="mission" />
                        <div className="core-contentbody">
                          <div>
                            <span className="core-contenttitle">ACHIEVEMENT</span>
                          </div>
                          <div className="core-contentsub">
                            <span>성과의 보상을 통한 공정함을 추구합니다. 우리는 공동목표를 달성하기 위해 서로 협력합니다. 모리아타운은 성과를 파악하고 이를 칭찬하며, 업무의 만족도를 높이는 보상을 하기 위해 노력합니다.</span>
                          </div>
                        </div>
                      </div>
                      <div className="core-innerbody" align="left">
                        <img className="core-image" src={cv6Img} alt="mission" />
                        <div className="core-contentbody">
                          <div>
                            <span className="core-contenttitle">HONESTY</span>
                          </div>
                          <div className="core-contentsub">
                            <span>정직을 최고의 가치로 생각합니다. 우리는 신뢰를 바탕으로 투명한 업무를 지향합니다. 모리아타운은 정직한 소통을 통해 서로의 업무를 이해하고 능률을 높이기 위해 노력합니다.</span>
                          </div>
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
              <div className="lay-mobile-first-mission" />
              <div className="lay-mobile-second-mission" />
              <div className="lay-mobile-third-mission" />
              <div className="lay-mobile-forth-mission" />
              <div className="lay-mobile-last" />
            </div>

            <main className="m-screen-fullArea">
              <div className="m-screen-center-Area-company">
                <div className="m-company-mobile">
                  <div className="m-center-imgtitle">
                    <p className="m-page-mainWord">MISSION</p>
                  </div>
                  <div className="m-center-selectBar">
                    <a className="m-disable-Button" href="/Company">ABOUT</a>
                    <div className="m-select-Button">MISSION</div>
                    <a className="m-disable-Button" href="/Patent">PATENT</a>
                  </div>
                </div>

                <div className="m-center-contentArea-company">
                  <div>
                    <div className="m-center-topspaceArea">
                      <div className="m-center-missionArea">
                        <p className="m-center-title">MISSION</p>
                        <div className="m-underLine-area">
                          <p className="m-topic-underLine" />
                        </div>
                        <div className="m-center-sharedImg-Area">
                          <img className="m-center-sharedImg" src={mmissionImg} alt="m-center-sharedImg" />
                        </div>
                        <p className="m-center-titleText">
                          CREATING SHARED VALUE PARTNER 
                          <br />FOR CO-EVOLUTION
                        </p>
                        <p className="m-center-smallText-mission">공유 가치 창출을 위하여 함께 성장하는 창조적 파트너</p>
                      </div>

                      <div className="m-center-missionArea">
                        <p className="m-center-title">VISION</p>
                        <div className="m-underLine-area">
                          <p className="m-topic-underLine" />
                        </div>
                        <div className="m-center-sharedImg-Area">
                          <img className="m-center-sharedImg" src={mvisionImg} alt="m-center-sharedImg" />
                        </div>
                        <p className="m-center-titleText">
                          2030 SMART ICT 
                          <br /> FUSION BUSINESS LEADER!
                        </p>
                        <p className="m-center-smallText-mission">2030 스마트 ICT 융합 비지니스 리더!</p>
                      </div>
                    </div>
                  </div>

                  <div className="m-center-coreArea">
                    <p className="m-center-title">CORE VALUE</p>
                    <div className="m-underLine-area">
                      <p className="m-topic-underLine" />
                    </div>

                    <div className="m-core-bodybottom">

                      <div className="m-core-innerbody" align="left">
                        <img className="m-core-image" src={cv1Img} alt="mission" />
                        <div className="m-core-contentbody">
                          <div>
                            <span className="m-core-contenttitle">MEDIATION</span>
                          </div>
                          <div className="m-core-contentsub">
                            <span>
                              매개 비즈니스의 선두 주자를 지향합니다. 우리는 고객의 요구와 기대를 이해하고 이를 충족하기 위해 노력합니다. 모리아타운의 목적은 이윤 추구만을 위함이 아닙니다. 우리는 고객, 파트너와 함께 성장하고 발전합니다.
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="m-core-innerbody" align="left">
                        <img className="m-core-image" src={cv2Img} alt="mission" />
                        <div className="m-core-contentbody">
                          <div>
                            <span className="m-core-contenttitle">OBSERVATION</span>
                          </div>
                          <div className="m-core-contentsub">
                            <span>
                              관찰을 통한 정교한 업무의 추진을 확립합니다. 우리는 각각의 지식과 정보를 발전적으로 탐구합니다. 모리아타운은 가치창출을 통해 지속가능한 발전을 위해 노력합니다.
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="m-core-innerbody" align="left">
                        <img className="m-core-image" src={cv3Img} alt="mission" />
                        <div className="m-core-contentbody">
                          <div>
                            <span className="m-core-contenttitle">RESPECT</span>
                          </div>
                          <div className="m-core-contentsub">
                            <span>
                              상호존중을 통한 동반관계를 구축합니다. 우리는 서로에 대해 배려하고 서로의 차이점을 인정합니다. 모리아타운은 상호 간의 배려를 바탕으로 한 소통을 원칙으로 합니다.
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="m-core-innerbody" align="left">
                        <img className="m-core-image" src={cv4Img} alt="mission" />
                        <div className="m-core-contentbody">
                          <div>
                            <span className="m-core-contenttitle">INSIGHT</span>
                          </div>
                          <div className="m-core-contentsub">
                            <span>
                              통찰력을 기반으로 시장을 개척합니다. 우리는 호기심과 아이디어를 적극적으로 수용하여 발전합니다. 모리아타운은 충분한 시장조사와 사례분석을 기반으로 사업을 진행합니다.
                            </span>
                          </div>
                        </div>
                      </div>


                      <div className="m-core-innerbody" align="left">
                        <img className="m-core-image" src={cv5Img} alt="mission" />
                        <div className="m-core-contentbody">
                          <div>
                            <span className="m-core-contenttitle">ACHIEVEMENT</span>
                          </div>
                          <div className="m-core-contentsub">
                            <span>성과의 보상을 통한 공정함을 추구합니다. 우리는 공동목표를 달성하기 위해 서로 협력합니다. 모리아타운은 성과를 파악하고 이를 칭찬하며, 업무의 만족도를 높이는 보상을 하기 위해 노력합니다.</span>
                          </div>
                        </div>
                      </div>


                      <div className="m-core-innerbody" align="left">
                        <img className="m-core-image" src={cv6Img} alt="mission" />
                        <div className="m-core-contentbody">
                          <div>
                            <span className="m-core-contenttitle">HONESTY</span>
                          </div>
                          <div className="m-core-contentsub">
                            <span>정직을 최고의 가치로 생각합니다. 우리는 신뢰를 바탕으로 투명한 업무를 지향합니다. 모리아타운은 정직한 소통을 통해 서로의 업무를 이해하고 능률을 높이기 위해 노력합니다.</span>
                          </div>
                        </div>
                      </div>



                    </div>

                    {/* <div className="m-history-imgArea">
                      <div className="m-history-imgSize" alt="history-img" />
                    </div> */}
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

export default Mission;