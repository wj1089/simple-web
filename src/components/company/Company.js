import React from 'react';
import Nav from '../navigation/Nav';
import Footer from '../footer/Footer';
import './company.css';
// import '../main/home.css'
import '../footer/footer.css';
import history from '../../resourse/aboutphoto/history.png'
import sign from '../../resourse/aboutphoto/ceocomment_sign.png'

const Company = () => {

    return (
      <>
        <div className="full-screen-modal">
          <div className="screen-layouta">
            <div className="lay-top" />
            <div className="lay-mid-first" />
            <div className="lay-mid-second" />
            <div className="lay-mid-third" />
            <div className="lay-mid-forth" />
            <div className="lay-mid-last" />
          </div>



          <div className="screen-centerArea">
            <header>
              <Nav />
            </header>


            <div className="center-imageArea">
              <div className="center-topWord">
                <h1>COMPANY</h1>
              </div>
              <div className="center-selectBar">
                <div className="select-Button1">asd</div>
                <div className="select-Button2">sdf</div>
                <div className="select-Button3">qwe</div>
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
                <div className="history-imgArea">
                  <img className="history-imgSize" src={history} alt="history-img" />
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
                  모리아타운은 글로벌 솔루션 리더로 
                  <br /> 자리매김 하기 위한 노력을 비전으로 새로운 가치 창조와 시장을 선도하는 
                  <br /> 기업을 만들기 위해 노력하고 있습니다..
                </p>
                <p className="center-smallText">
                  모리아타운은 IT업계의 태동기 때부터 쌓아온 저력을 바탕으로 2006년 9월 설립된 회사입니다. 
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
              </div>
            </div>
            

            <main className="main-contenta">
              <></>
            </main>
          
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      </>
    );
};

export default Company;