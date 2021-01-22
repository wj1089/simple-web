import React, { useEffect } from 'react';
import {
  BrowserView,
  MobileView
} from "react-device-detect";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../footer/Footer';
import './company.css';
import './mcompany.css';
import '../../index.css';
import '../../mindex.css';

import samsung from '../../resourse/aboutphoto/patenerlogo_04.png';
import lgElec from '../../resourse/aboutphoto/patenerlogo_07.png';
import arcSoft from '../../resourse/aboutphoto/patenerlogo_08.png'
import mhistory from '../../resourse/m.about/mhistory.png' 

// import historyImg from '../../resourse/aboutphoto/ceocomment_sign';
import sign from '../../resourse/aboutphoto/ceocomment_sign.png';


const Company = () => {
  useEffect(() => {
    AOS.init();
  }, []);
    return (
      <>
        <BrowserView>
          <div className="full-screen">
            <div className="screen-layout">
              <div className="lay-top" />
              <div className="lay-company-first" />
              <div className="lay-company-second" />
              <div className="lay-company-third" />
              <div className="lay-company-forth" />
              <div className="lay-company-last" />
            </div>

            <div className="screen-centerArea">
              <div className="center-imgArea-mission">
                <div className="center-imgText">
                  COMPANY
                </div>
              </div>
              <div>
                <div className="center-selectBar">
                  <div className="select-Button">ABOUT</div>
                  <a className="disable-Button" href="/Mission">MISSION</a>
                  <a className="disable-Button" href="/Patent">PATENT</a>
                </div>
              </div>

              <div className="center-aboutArea">
                <div className="center-about">
                  <h1>ABOUT US</h1>
                  <div className="underLine-area">
                    <p className="topic-underLine" />
                  </div>
                  <p className="center-aboutText">
                    모리아타운은 글로벌 솔루션 리더로 
                    <br /> 자리매김 하기 위한 노력을 비전으로 새로운 가치 창조와 시장을 선도하는 
                    <br /> 기업을 만들기 위해 노력하고 있습니다..
                  </p>
                  <p className="center-smallText">
                    EMBEDDED 소프트웨어 및 솔루션 전문 기업인 주식회사 모리아타운은 2006년 설립 이후, IT분야의 다양한 경험과 경력을 바탕으로 
                    <br />모바일 및 각종 단말 기기 솔루션 공급업체로 꾸준한 성장과 새롭게 펼쳐지는 Global 경쟁시대에 앞서 나가는 기업이 될 수 있도록 힘차게 도약하고 있으며, 
                    <br />다양한 솔루션 발굴 및 공급 경험을 토대로 보다 창조적이고 발전된 기술을 제공하는 것을 주요 업무 영역으로 하고 있습니다.
                  </p>
                </div>
              </div>

              <div className="center-historyArea">
                <div className="center-history">
                  <h1>HISTORY</h1>
                  <div className="underLine-area">
                    <p className="topic-underLine" />
                  </div>
                </div>
                <div className="timeline">
                  <div className="container right">
                    <div className="contentRight" data-aos="fade-up">
                      <div style={{display :'inline-flex'}}>
                        <p className="yearText">2020</p>
                        <p className="historyTopTitle">아이그레 서비스 출시</p>
                      </div>
                      <div className="hitoryInnerRightDiv">
                        <p className="historySub">(어린이 식품배송 서비스)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="containerNoitemTop" />

                  <div className="container left">
                    <div className="contentLeft" data-aos="fade-up">
                      <div style={{display : 'inline-flex'}}>
                        <p className="historyTopTitle">페팸 캣시터 서비스 출시</p>
                        <p className="yearText">2019</p>
                      </div>
                      <div className="hitoryInnerLeftDiv">
                        <p className="historySub">(반려묘 매칭 & Care)</p>
                        <p className="historyTitle">벤처기업 선정</p>
                        <p className="historySub">(기술보증기업)</p>
                      </div>
                    </div>
                  </div>
                  <div className="container right">
                    <div className="contentRight" data-aos="fade-up">
                      <div style={{display :'inline-flex'}}>
                        <p className="yearText">2018</p>
                        <p className="historyTopTitle">대한민국 브랜드 어워즈 수상</p>
                      </div>
                      <div className="hitoryInnerRightDiv">
                        <p className="historySub">(펫시터 매칭 / 한경 Business)</p>
                        <p className="historyTitle">벤처기업 선정</p>
                        <p className="historySub">(연구개발기업)</p>
                        <p className="historyTitle">대한민국 신지식인 선정</p>
                        <p className="historySub">(한국신지식인협회)</p>
                      </div>
                    </div>
                  </div>
                  <div className="container left">
                    <div className="contentLeft" data-aos="fade-up">
                      <div style={{display : 'inline-flex'}}>
                        <p className="historyTopTitle">대한민국 위치기반 서비스 공모전 수상</p>
                        <p className="yearText">2017</p>
                      </div>
                      <div className="hitoryInnerLeftDiv">
                        <p className="historySub">(우수상 / 방송통신위원회)</p>
                      </div>
                    </div>
                  </div>
                  <div className="container right">
                    <div className="contentRight" data-aos="fade-up">
                      <div style={{display :'inline-flex'}}>
                        <p className="yearText">2015</p>
                        <p className="historyTopTitle">펫시터 매칭 서비스 페팸 출시</p>
                      </div>
                      <div className="hitoryInnerRightDiv">
                        <p className="historySub">(PlayStore / App Store)</p>
                      </div>
                    </div>
                  </div>
                  <div className="container left">
                    <div className="contentLeft" data-aos="fade-up">
                      <div style={{display : 'inline-flex'}}>
                        <p className="historyTopTitle">벤처기업 선정 (연구개발기업)</p>
                        <p className="yearText">2014</p>
                      </div>
                      <div className="hitoryInnerLeftDiv">
                        <p className="historyTitle">삼성전자 PC S/W 솔루션 공급계약</p>
                      </div>
                    </div>
                  </div>
                  <div className="container right">
                    <div className="contentRight" data-aos="fade-up">
                      <div style={{display :'inline-flex'}}>
                        <p className="yearText">2013</p>
                        <p className="historyTopTitle">특허청 - IP스타기업 선정</p>
                      </div>
                      <div className="hitoryInnerRightDiv">
                        <p className="historyTitle">삼성전자 MSC S/W 공급 계약</p>
                        <p className="historySub">IP기반 - 폐쇄형 SNS Party 출시</p>
                        <p className="historySub">IP기반 - 모교기반 SNS Mschool 출시</p>
                      </div>
                    </div>
                  </div>
                  <div className="container left">
                    <div className="contentLeft" data-aos="fade-up">
                      <div style={{display : 'inline-flex'}}>
                        <p className="historyTopTitle">IP 기반 - talktalk Live 상표 등록</p>
                        <p className="yearText">2012</p>
                      </div>
                      <div className="hitoryInnerLeftDiv">
                        <p className="historySub">IP 기반 - talktalk Live 어플리케이션 출시</p>
                        <p className="historySub">IP 기반 - SeeMe 어플리케이션 출시</p>
                      </div>
                    </div>
                  </div>
                  <div className="container right">
                    <div className="contentRight" data-aos="fade-up">
                      <div style={{display :'inline-flex'}}>
                        <p className="yearText">2011</p>
                        <p className="historyTopTitle">IP 기반 - 스마트 나비 어플리케이션 출시</p>
                      </div>
                      <div className="hitoryInnerRightDiv">
                        <p className="historySub">제조사 대상 IP 솔루션 강화</p>
                        <p className="historyTitle">기업부설연구소 설립</p>
                      </div>
                    </div>
                  </div>
               
                  <div className="container left">
                    <div className="contentLeft" data-aos="fade-up">
                      <div style={{display : 'inline-flex'}}>
                        <p className="historyTopTitle">전략적 특허 (IP) 사업 착수</p>
                        <p className="yearText">2010</p>
                      </div>
                      <div className="hitoryInnerLeftDiv">
                        <p className="historySub">SK Telesys S/W 공급 계약</p>
                        <p className="historySub">KT Tech S/W 공급 계약</p>
                      </div>
                    </div>
                  </div>

                  <div className="containerNoitem" />

                  <div className="container right">
                    <div className="contentRight" data-aos="fade-up">
                      <div style={{display :'inline-flex'}}>
                        <p className="yearText">2009</p>
                        <p className="historyTopSub">문자 입력 특허 사업 착수</p>
                      </div>
                    </div>
                  </div>
                  <div className="container left">
                    <div className="contentLeft" data-aos="fade-up">
                      <div style={{display : 'inline-flex'}}>
                        <p className="historyTopSub">전략적 특허 (IP) 사업 착수</p>
                        <p className="yearText">2008</p>
                      </div>
                      <div className="hitoryInnerLeftDiv">
                        <p className="historySub">SK Telesys S/W 공급 계약</p>
                        <p className="historySub">KT Tech S/W 공급 계약</p>
                      </div>
                    </div>
                  </div>
                  <div className="container right">
                    <div className="contentRight" data-aos="fade-up">
                      <div style={{display :'inline-flex'}}>
                        <p className="yearText">2007</p>
                        <p className="historyTopTitle">삼성전자 휴대폰 S/W 솔루션 공급 계약</p>
                      </div>
                      <div className="hitoryInnerLeftDiv">
                        <p className="historyTitle">LG전자 휴대폰 S/W 솔루션 공급 계약</p>
                      </div>
                    </div>
                  </div>

                  <div className="containerLast left">
                    <div className="contentLeft" data-aos="fade-up">
                      <div style={{display : 'inline-flex'}}>
                        <p className="historyTopTitle">주식회사 모리아타운 설립</p>
                        <p className="yearText">2006</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              

              <div className="center-commentArea">
                <div className="center-comment">
                  <h1>CEO COMMENT</h1>
                  <div className="underLine-area">
                    <p className="topic-underLine" />
                  </div>
                  <p className="center-commentText">
                    끊임없는 연구개발과 기술공급에 최선의 노력을 다하고 있으며, blue ocean 창출에 노력하고 있습니다.
                  </p>
                  <p className="center-smallText">
                    모리아타운은 IT업계의 태동기 때부터 쌓아온 저력을 바탕으로 2006년 9월 설립된 회사입니다. 
                    <br /> 
                    <br /> 회사의 창립이래 지금까지 주요 업계에 다양한 솔루션과 기술을 공급하는 것을 사명으로 업무를 진행하는 저희 모리아타운은 
                    <br /> 주요 IT분야의 제조사 대상으로 여러 가지 비즈니스를 알차게 진행하고 있습니다. 또한, 여러모로 많은 성원을 보내 주시는 고객사의 신뢰에 보답하기 위해 
                    <br /> 끊임없는 연구개발과 기술공급에 최선의 노력을 다하고 있으며, 기존 틀에서 벗어난 보다 창의적인 기술로 차별화된 새로운 대안을 제시하고, 
                    <br /> 이를 통한 BLUE OCEAN 창출에 노력하고 있습니다. 
                    <br /><br /> 
                    <p>특히 S/W 산업 부문에 있어서 다양한 실적과 결과를 지속해서 보여드릴 것을 약속드리며 
                      <br /> 아울러 다양한 가치 창출의 비즈니스 분야에 있어 선도적 역할을 담당한다는 사명을 지켜나갈 것입니다. 
                      <br /> 저희 홈페이지를 찾아 주신 여러분께 다시 한 번 감사를 드리며, 지속적인 격려와 성원을 부탁드립니다.
                    </p>
                  </p>
                  <div className="center-commetSign">
                    <img className="sign-area" src={sign} alt="moriagtown-sign" />
                  </div>
                </div>
              </div>


              <div className="center-partnerArea">
                <div className="center-partner">
                  <h1>PARTNERS</h1>
                  <div className="underLine-area">
                    <p className="topic-underLine" />
                  </div>
                  <div className="partners-slideArea">
                    <img className="partners-iconImg" src={arcSoft} alt="parter-arcSoft" />
                    <img className="partners-iconImgCenter" src={samsung} alt="parter-samsung" />
                    <img className="partners-iconImg" src={lgElec} alt="parter-lg" />
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
              <div className="lay-mobile-first-about" />
              <div className="lay-mobile-second-about" />
              <div className="lay-mobile-third-about" />
              <div className="lay-mobile-forth-about" />
              <div className="lay-mobile-last" />
            </div>

            <main className="m-screen-fullArea">
              <div className="m-screen-center-Area-company">
                <div className="m-company-mobile">
                  <div className="m-center-imgtitle">
                    <p className="m-page-mainWord">COMPANY</p>
                  </div>
                  <div className="m-center-selectBar">
                    <div className="m-select-Button">ABOUT</div>
                    <a className="m-disable-Button" href="/mission">MISSION</a>
                    <a className="m-disable-Button" href="/patent">PATENT</a>
                  </div>
                </div>

                <div className="m-center-contentArea-company">

                  <div className="m-center-aboutArea">
                    <p className="m-center-title">ABOUT US</p>
                    <div className="m-underLine-area">
                      <p className="m-topic-underLine" />
                    </div>
                    <p className="m-center-aboutText">
                      모리아타운은 글로벌 솔루션 리더로 
                      <br /> 자리매김 하기 위한 노력을 비전으로 
                      <br /> 새로운 가치 창조와 시장을 선도하는 
                      <br /> 기업을 만들기 위해 노력하고 있습니다.
                    </p>
                    <p className="m-center-smallText">
                      EMBEDDED 소프트웨어 및 솔루션 전문 기업인 
                      <br /> 주식회사 모리아타운은 2006년 설립 이후, IT분야의
                      <br /> 다양한 경험과 경력을 바탕으로 
                      <br /> 모바일 및 각종 단말 기기 솔루션 공급업체로 꾸준한 
                      <br /> 성장과 새롭게 펼쳐지는 Global 경쟁시대에 앞서 나가는
                      <br /> 기업이 될 수 있도록 힘차게 도약하고 있으며,
                      <br />다양한 솔루션 발굴 및 공급 경험을 토대로 보다 창조적
                      이고 발전된 기술을 제공하는 것을 주요 업무 영역으로
                      <br /> 하고 있습니다.
                    </p>
                  </div>

                  <div className="m-center-historyArea">
                    <p className="m-center-title">HISTORY</p>
                    <div className="m-underLine-area">
                      <p className="m-topic-underLine" />
                    </div>
                    <div className="m-history-imgArea">
                      <img className="m-history-imgSize" src={mhistory} alt="history-img" />
                    </div>
                  </div>
                  <div className="m-center-commentArea">
                    <p className="m-center-title">CEO COMMENT</p>
                    <div className="m-underLine-area">
                      <p className="m-topic-underLine" />
                    </div>
                    <p className="m-center-commentText">
                      끊임없는 연구개발과 기술공급에 최선의 노력을 다하고 있으며, blue ocean 창출에 노력하고 있습니다.
                    </p>
                    <p className="m-center-smallText-cmt">
                      모리아타운은 IT업계의 태동기 때부터 쌓아온 저력을 바탕으로 2006년 9월 설립된 회사입니다. 
                      <br /> 
                      <br /> 회사의 창립이래 지금까지 주요 업계에 다양한 솔루션과 기술을 공급하는 것을 사명으로 업무를 진행하는 저희 모리아타운은 
                      <br /> 주요 IT분야의 제조사 대상으로 여러 가지 비즈니스를 알차게 진행하고 있습니다. 또한, 여러모로 많은 성원을 보내 주시는 고객사의 신뢰에 보답하기 위해 
                      <br /> 끊임없는 연구개발과 기술공급에 최선의 노력을 다하고 있으며, 기존 틀에서 벗어난 보다 창의적인 기술로 차별화된 새로운 대안을 제시하고, 
                      <br /> 이를 통한 BLUE OCEAN 창출에 노력하고 있습니다. 
                      <br /><br /> 

                      <p>특히 S/W 산업 부문에 있어서 다양한 실적과 결과를 지속해서 보여드릴 것을 약속드리며 아울러 다양한 
                        <br /> 가치 창출의 비즈니스 분야에 있어 선도적 역할을 담당한다는 사명을 지켜나갈 것입니다. 
                        <br /> 저희 홈페이지를 찾아 주신 여러분께 다시 한 번 
                        <br /> 감사를 드리며, 지속적인 격려와 성원을 
                        <br /> 부탁드립니다.
                      </p>
                    </p>
                    <div className="m-center-commetSign">
                      <img className="m-sign-area" src={sign} alt="moriagtown-sign" />
                    </div>
                  </div>

                  <div className="m-center-partnerArea">
                    <p className="m-center-title">PARTNERS</p>
                    <div className="m-underLine-area">
                      <p className="m-topic-underLine" />
                    </div>
                    <div className="m-parter-logoArea">
                      <div className="m-parter-logos">asd</div>
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
export default Company;