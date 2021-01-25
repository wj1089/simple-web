import React from 'react';
import {
  BrowserView,
  MobileView
} from "react-device-detect";
import Footer from '../footer/Footer';
import './patent.css';
import './mpatent.css';
import '../../index.css';
import '../../mindex.css';

import pefamServ from '../../resourse/patent/moriahtown_20160729_페팸서비스등록.jpg'
import dualCamera from '../../resourse/patent/moriahtown_20130828_다중-카메라를-이용한-이미지-합성-장치-및-방법.png'
import mesinSistem from '../../resourse/patent/moriahtown_20130806_메신저-광고-서비스-시스템-및-방법.png'
import cameraManage from '../../resourse/patent/moriahtown_2013_0314_카메라를-이용한-단말-간-파일-관리-장치-및-방법.png'

import uiScreen from '../../resourse/patent/moriahtown_2013_0208_사용자-중심의-메인-화면-아이콘-구성-장치-및-방법.png'
import numNetwork from '../../resourse/patent/moriahtown_2013_0205_전화번호-기반-소셜-네트워크-서비스-시스템-및-방법.png'
import infoVirtual from '../../resourse/patent/moriahtown_2012_1101_속성-정보를-이용한-전자화폐-관리-시스템-및-방법.png'
import voteProduct from '../../resourse/patent/moriahtown_2012_1005_소비자-투표를-통해-상품-가격-할인을-제공하는-소셜-커머스-서비스-시스템-및-방법.png'

import usepreview from '../../resourse/patent/moriahtown_2012_0727_전화-용건-미리보기-서비스-제공-시스템-및-방법.png'
import delayInfo from '../../resourse/patent/moriahtown_2012_0510_모바일-단말기를-이용한-대기-정보-서비스-제공-시스템-및-방법.png'
import multiScreen from '../../resourse/patent/moriahtown_2012_0424_다양한-형태의-멀티스크린을-이용한-광고생성시스템-및-그-제어방법.png'
import openTypeCumers from '../../resourse/patent/moriahtown_2011_1205_소비자-주도의-개방형-참여형-소셜-커머스-서비스-시스템-및-방법.png'

import digiSubscript from '../../resourse/patent/moriahtown_2011_1107_시각-장애인을-위한-디지털-점자-입출력-장치-및-방법.png'
import smartSearch from '../../resourse/patent/moriahtown_2011_1107_스마트-서치-시스템-및-방법.png'
import naviRoad from '../../resourse/patent/moriahtown_2011_1020_길-안내-서비스-시스템-및-방법.png'
import inputAdvr from '../../resourse/patent/moriahtown_2011_0926_문자-입력기를-이용한-소셜-광고-서비스-시스템-및-방법.png'

import simuMotion from '../../resourse/patent/moriahtown_2011_0727_시뮬레이션-모션-데이터를-이용한-스마트-모션-슈트의-움직임-제어-시스템-및-방법.png'
import certifiMark from '../../resourse/patent/moriahtown_2011_0601_상품정보-제공장치-및-그-방법과-인증코드를-마킹하는-시스템.png'
import touchInput from '../../resourse/patent/moriahtown_2011_0531_터치식-문자-입력-장치-및-방법.png'



const Patent = () => {

    return (
      <>
        <BrowserView>
          <div className="full-screen">
            <div className="screen-layout">
              <div className="lay-top" />
            </div>

            <div className="screen-centerArea">
              <div className="center-imgArea-mission">
                <div className="center-imgText">
                  COMPANY
                </div>
              </div>
              <div className="center-selectBar">
                <a className="disable-Button" href="/Company">ABOUT</a>
                <a className="disable-Button" href="/Mission">MISSION</a>
                <div className="select-Button" href="/">PATENT</div>
              </div>
              <div className="center-patentArea">
                <div className="center-patent">
                  <div className="patent-topText">
                    <h1>PATENT</h1>
                    <div className="underLine-area">
                      <p className="topic-underLine" />
                    </div>
                    <p className="patent-subDiscrip">모리아타운이 가지고 있는 특허권 목록입니다.</p>
                  </div>


                  <div className="patent-imgArea">
                    <div className="patent-img-row">
                      <div className="patent-imgSize">
                        <div className="icon-outLine">
                          <img className="icon-size" src={pefamServ} alt="pefam-service-patent" />
                          <div className="icon-descrip">페팸서비스등록</div>
                        </div>
                        <div className="icon-outLine">
                          <img className="icon-size" src={dualCamera} alt="dualCamera-patent" />
                          <div className="icon-descrip">다중 카메라를 이용한 이미지 합성 장치 및 방법</div>
                        </div>
                        <div className="icon-outLine">
                          <img className="icon-size" src={mesinSistem} alt="mesinSistem-patent" />
                          <div className="icon-descrip">메신저 광고 서비스 시스템 및 방법</div>
                        </div>
                        <div className="icon-outLine">
                          <img className="icon-size" src={cameraManage} alt="cameraManage-patent" />
                          <div className="icon-descrip">카메라를 이용한 단말 간 파일 관리 장치 및 방법</div>
                        </div>
                      </div>
                    </div>


                    <div className="patent-img-row">
                      <div className="patent-imgSize">
                        <div className="icon-outLine">
                          <img className="icon-size" src={uiScreen} alt="uiScreen-patent" />
                          <div className="icon-descrip">사용자 중심의 메인 화면 아이콘 구성 장치 및 방법</div>
                        </div>
                        <div className="icon-outLine">
                          <img className="icon-size" src={numNetwork} alt="numNetwork-patent" />
                          <div className="icon-descrip">전화번호 기반 소셜 네트워크 서비스 시스템 및 방법</div>
                        </div>
                        <div className="icon-outLine">
                          <img className="icon-size" src={infoVirtual} alt="infoVirtual-patent" />
                          <div className="icon-descrip">속성 정보를 이용한 전자화폐 관리시스템 및 방법</div>
                        </div>
                        <div className="icon-outLine">
                          <img className="icon-size" src={voteProduct} alt="voteProduct-patent" />
                          <div className="icon-descrip">소비자 투표를 통해 상품 가격 할인을 제공하는 소셜 커머스 서비스 시스템 및 방법</div>
                        </div>
                      </div>
                    </div>

                    <div className="patent-img-row">
                      <div className="patent-imgSize">
                        <div className="icon-outLine">
                          <img className="icon-size" src={usepreview} alt="usepreview-patent" />
                          <div className="icon-descrip">전화 용건 미리보기 서비스 제공 시스템 및 방법</div>

                        </div>
                        <div className="icon-outLine">
                          <img className="icon-size" src={delayInfo} alt="delayInfo-patent" />
                          <div className="icon-descrip">모바일 단말기를 이용한 대기 정보 서비스 제공 시스템 및 방법</div>

                        </div>
                        <div className="icon-outLine">
                          <img className="icon-size" src={multiScreen} alt="multiScreen-patent" />
                          <div className="icon-descrip">다양한 형태의 멀티스크린을 이용한 광고생성시스템 및 그 제어방법</div>

                        </div>
                        <div className="icon-outLine">
                          <img className="icon-size" src={openTypeCumers} alt="openTypeCumers-patent" />
                          <div className="icon-descrip">소비자 주도의 개방형-참여형 소셜 커머스 서비스 시스템 및 방법</div>

                        </div>
                      </div>
                    </div>
                    <div className="patent-img-row">
                      <div className="patent-imgSize">
                        <div className="icon-outLine">
                          <img className="icon-size" src={digiSubscript} alt="digiSubscript-patent" />
                          <div className="icon-descrip">시각 장애인을 위한 디지털 점자 입출력 장치 및 방법</div>
                        </div>
                        <div className="icon-outLine">
                          <img className="icon-size" src={smartSearch} alt="smartSearch-patent" />
                          <div className="icon-descrip">스마트 서치 시스템 및 방법</div>
                        </div>
                        <div className="icon-outLine">
                          <img className="icon-size" src={naviRoad} alt="naviRoad-patent" />
                          <div className="icon-descrip">길 안내 서비스 시스템 및 방법</div>
                        </div>
                        <div className="icon-outLine">
                          <img className="icon-size" src={inputAdvr} alt="inputAdvr-patent" />
                          <div className="icon-descrip">문자 입력기를 이용한 소셜 광고 서비스 시스템 및 방법</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="patent-img-row">
                      <div className="patent-imgSize">
                        <div className="icon-outLine">
                          <img className="icon-size" src={simuMotion} alt="simuMotion-patent" />
                          <div className="icon-descrip">시뮬레이션 모션 데이터를 이용한 스마트 모션 슈트의 움직임 제어시스템 및 방법</div>
                        </div>
                        <div className="icon-outLine">
                          <img className="icon-size" src={certifiMark} alt="certifiMark-patent" />
                          <div className="icon-descrip">상품정보 제공장치 및 그 방법과 인증코드를 마킹하는 시스템</div>

                        </div>
                        <div className="icon-outLine">
                          <img className="icon-size" src={touchInput} alt="touchInput-patent" />
                          <div className="icon-descrip">터치식 문자 입력 장치 및 방법</div>

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
              <div className="m-screen-center-Area-company">
                <div className="m-company-mobile">
                  <div className="m-center-imgtitle">
                    <p className="m-page-mainWord">PATENT</p>
                  </div>
                  <div className="m-center-selectBar">
                    <a className="m-disable-Button" href="/Company">ABOUT</a>
                    <a className="m-disable-Button" href="/Mission">MISSION</a>
                    <div className="m-select-Button" href="/Platform">PATENT</div>
                  </div>
                </div>

                <div className="m-center-contentArea-company">

                  <div className="m-center-topspaceArea">
                    <div className="m-center-patentArea">
                      <p className="m-center-title">PATENT</p>
                      <div className="m-underLine-area">
                        <p className="m-topic-underLine" />
                      </div>
                      <p className="m-patent-smallWord">
                        모리아타운이 가지고 있는 특허권 목록입니다.
                      </p>
                    </div>
                  </div>




                  <div className="m-patent-imgArea">
                    <div className="m-patent-img-row">
                      <div className="m-patent-imgSize">
                        <div className="m-icon-outLine">
                          <img className="m-icon-size" src={pefamServ} alt="pefam-service-patent" />
                          <div className="m-icon-descrip">페팸서비스등록</div>
                        </div>
                        <div className="m-icon-outLine">
                          <img className="m-icon-size" src={dualCamera} alt="dualCamera-patent" />
                          <div className="m-icon-descrip">다중 카메라를 이용한 이미지 합성 장치 및 방법</div>
                        </div>                      
                      </div>

                      <div className="m-patent-imgSize">
                        <div className="m-icon-outLine">
                          <img className="m-icon-size" src={mesinSistem} alt="mesinSistem-patent" />
                          <div className="m-icon-descrip">메신저 광고 서비스 시스템 및 방법</div>
                        </div>
                        <div className="m-icon-outLine">
                          <img className="m-icon-size" src={cameraManage} alt="cameraManage-patent" />
                          <div className="m-icon-descrip">카메라를 이용한 단말 간 파일 관리 장치 및 방법</div>
                        </div>
                      </div>
                    </div>


                    <div className="m-patent-img-row">
                      <div className="m-patent-imgSize">
                        <div className="m-icon-outLine">
                          <img className="m-icon-size" src={uiScreen} alt="uiScreen-patent" />
                          <div className="m-icon-descrip">사용자 중심의 메인 화면 아이콘 구성 장치 및 방법</div>
                        </div>
                        <div className="m-icon-outLine">
                          <img className="m-icon-size" src={numNetwork} alt="numNetwork-patent" />
                          <div className="m-icon-descrip">전화번호 기반 소셜 네트워크 서비스 시스템 및 방법</div>
                        </div>
                      </div>

                      <div className="m-patent-imgSize">
                        <div className="m-icon-outLine">
                          <img className="m-icon-size" src={infoVirtual} alt="infoVirtual-patent" />
                          <div className="m-icon-descrip">속성 정보를 이용한 전자화폐 관리시스템 및 방법</div>
                        </div>
                        <div className="m-icon-outLine">
                          <img className="m-icon-size" src={voteProduct} alt="voteProduct-patent" />
                          <div className="m-icon-descrip">소비자 투표를 통해 상품 가격 할인을 제공하는 소셜 커머스 서비스 시스템 및 방법</div>
                        </div>
                      </div>
                    </div>

                    <div className="m-patent-img-row">
                      <div className="m-patent-imgSize">
                        <div className="m-icon-outLine">
                          <img className="m-icon-size" src={usepreview} alt="usepreview-patent" />
                          <div className="m-icon-descrip">전화 용건 미리보기 서비스 제공 시스템 및 방법</div>
                        </div>
                        <div className="m-icon-outLine">
                          <img className="m-icon-size" src={delayInfo} alt="delayInfo-patent" />
                          <div className="m-icon-descrip">모바일 단말기를 이용한 대기 정보 서비스 제공 시스템 및 방법</div>
                        </div>
                      </div>
                      
                      <div className="m-patent-imgSize">
                        <div className="m-icon-outLine">
                          <img className="m-icon-size" src={multiScreen} alt="multiScreen-patent" />
                          <div className="m-icon-descrip">다양한 형태의 멀티스크린을 이용한 광고생성시스템 및 그 제어방법</div>
                        </div>
                        <div className="m-icon-outLine">
                          <img className="m-icon-size" src={openTypeCumers} alt="openTypeCumers-patent" />
                          <div className="m-icon-descrip">소비자 주도의 개방형-참여형 소셜 커머스 서비스 시스템 및 방법</div>
                        </div>
                      </div>
                    </div>


                    <div className="m-patent-img-row">
                      <div className="m-patent-imgSize">
                        <div className="m-icon-outLine">
                          <img className="m-icon-size" src={digiSubscript} alt="digiSubscript-patent" />
                          <div className="m-icon-descrip">시각 장애인을 위한 디지털 점자 입출력 장치 및 방법</div>
                        </div>
                        <div className="m-icon-outLine">
                          <img className="m-icon-size" src={smartSearch} alt="smartSearch-patent" />
                          <div className="m-icon-descrip">스마트 서치 시스템 및 방법</div>
                        </div>
                      </div>
                      <div className="m-patent-imgSize">
                        <div className="m-icon-outLine">
                          <img className="m-icon-size" src={naviRoad} alt="naviRoad-patent" />
                          <div className="m-icon-descrip">길 안내 서비스 시스템 및 방법</div>
                        </div>
                        <div className="m-icon-outLine">
                          <img className="m-icon-size" src={inputAdvr} alt="inputAdvr-patent" />
                          <div className="m-icon-descrip">문자 입력기를 이용한 소셜 광고 서비스 시스템 및 방법</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="m-patent-img-row">
                      <div className="m-patent-imgSize">
                        <div className="m-icon-outLine">
                          <img className="m-icon-size" src={simuMotion} alt="simuMotion-patent" />
                          <div className="m-icon-descrip">시뮬레이션 모션 데이터를 이용한 스마트 모션 슈트의 움직임 제어시스템 및 방법</div>
                        </div>
                        <div className="m-icon-outLine">
                          <img className="m-icon-size" src={certifiMark} alt="certifiMark-patent" />
                          <div className="m-icon-descrip">상품정보 제공장치 및 그 방법과 인증코드를 마킹하는 시스템</div>
                        </div>
                      </div>

                      <div className="m-patent-imgSize">
                        <div className="m-icon-outLine">
                          <img className="m-icon-size" src={touchInput} alt="touchInput-patent" />
                          <div className="m-icon-descrip">터치식 문자 입력 장치 및 방법</div>
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

export default Patent;