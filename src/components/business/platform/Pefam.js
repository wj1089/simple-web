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

import * as urls from '../../cabinet/urls';

import itemImg from '../../../resourse/O2O/o2o_1_detail.png';

const Pefam = () => {

  function pefamLink (e) {
    e.preventDefault();
    window.open(urls.pefamLink)
  }
  function pefamDown (e) {
    e.preventDefault();
    window.open(urls.pefamDown)
  }
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
                  <p className="es-firstWord">페팸</p>
                  <p className="es-secondWord">MORIAHTOWN / 반려견 펫시터 매칭 서비스</p>
                </div>
              </div>

              <div className="main-content-es">
                <div className="center-es">

                  <div className="center-left">
                    <img className="pefam-img" src={itemImg} alt="pefam-img" />
                  </div>

                  <div className="center-right">
                    <div>
                      <p className="item-topic">O2O PLATFORM</p>
                      <p className="docu-topic">페팸</p>
                    </div>
                    <div className="underLine-area-es">
                      <p className="topic-underLine-es" />
                    </div>
                    <div className="discrip-body">
                      <b>반려견 펫시터 매칭 서비스</b><br />
                      반려견 돌봄 중개 플랫폼 ‘페팸’은 2015년부터 지금까지 반려견 돌봄이 필요한 반려인과  펫시터를 연결해오고 있습니다.
                      <br /><br />
                      모리아타운은 커뮤니티와 오프라인 영세업체를 통해 이루어졌던 반려동물 돌봄 서비스의 불편함을 해소하기 위하여 온라인(앱)을 통한 서비스를 
                      런칭하였습니다. 앱에서 예약부터 펫시터 정보 확인, 결제까지 원스톱으로 
                      해결하고,  안전보상정책을 통해 고객이 안심하고 이용 할 수 있는 서비스를 
                      제공합니다.
                      <br /><br />
                      페팸은 오랫동안 쌓아온 반려동물과 반려인에 대한 이해를 바탕으로  반려견 
                      전문 브랜드로 영향력을 확대해 가고 있습니다.
                      
                      <div className="discrip-foot">
                        <span className="foot-title">
                          <p className="foot-date">DATE</p>
                          <p className="foot-dateWord">2021-02-01</p>
                        </span>

                        <span className="foot-title">
                          <p className="foot-date">TAGS</p>
                          <p className="foot-dateWord">O2O PLATFORM</p>
                        </span>
                      </div>
                      <div className="Link-icons">
                        <button type="button" className="icon-round" onClick={pefamLink}>
                          <i className="fas fa-home" style={{fontSize:18}} />
                          <p className="icon-text">HOME PAGE</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prevNext-btn">
                <div className="prev-btn">
                  <a href="/pefamCat">
                    <div className="left-btnImg">
                      <span className="material-icons" style={{color:'#ffffff', fontSize:'18px'}}>
                        arrow_back_ios_new
                      </span>
                    </div>
                  </a>
                  <p className="btn-info">PREVIOUS PROJECT</p>
                </div>
                <div className="business-kinds">O2O PLATFORM</div>
                <div className="next-btn" />
              </div>
            </div>
          </div>
          <Footer />
        </BrowserView>





        <MobileView>
          <div className="m-full-screen-dark">
            <div className="m-screen-layout-dark">
              <div className="m-lay-top-dark" />
              <div className="m-lay-second-dark" />
              <div className="m-lay-last-dark" />
            </div>

            <div className="m-screen-center-es">
              <div className="m-center-imgArea-es">
                <div className="m-es-topText">
                  <p className="m-es-firstWord">페팸</p>
                  <p className="m-es-secondWord">MORIAHTOWN / 반려견 펫시터 매칭 서비스</p>
                </div>
              </div>

              <div className="m-main-content-es">

                <div className="m-center-top">
                  <img className="m-pefam-img" src={itemImg} alt="pefam-img" />
                </div>

                <div className="m-discrip-info">
                  <p className="m-item-topic">O2O PLATFORM</p>
                  <p className="m-item-docu">패펨</p>
                  
                  <div>
                    <p className="m-topic-underLine-detail" />
                  </div>
                </div>

                <div className="m-center-bottom">
                  <div className="m-discrip-body">
                    <b>반려견 펫시터 매칭 서비스</b><br />
                    반려견 돌봄 중개 플랫폼 ‘페팸’은 2015년부터 지금까지 반려견 돌봄이 필요한 반려인과  펫시터를 연결해오고 있습니다.
                    <br /><br />
                    모리아타운은 커뮤니티와 오프라인 영세업체를 통해 이루어졌던 반려동물 돌봄 서비스의 불편함을 해소하기 위하여 온라인(앱)을 통한 서비스를 런칭하였습니다. 앱에서 예약부터 펫시터 정보 확인, 결제까지 원스톱으로 해결하고,  안전보상정책을 통해 고객이 안심하고 이용 할 수 있는 서비스를 제공합니다.
                    <br /><br />
                    페팸은 오랫동안 쌓아온 반려동물과 반려인에 대한 이해를 바탕으로  반려견 전문 브랜드로 영향력을 확대해 가고 있습니다.
                  </div>

                  <div className="m-foot-info">
                    <span className="m-foot-fisrt">
                      <p className="m-foot-date">DATE</p>
                      <p className="m-foot-dateWord">2021-02-01</p>
                    </span>

                    <span className="m-foot-second">
                      <p className="m-foot-date">TAGS</p>
                      <p className="m-foot-dateWord">O2O PLATFORM</p>
                    </span>

                    <div className="m-Link-icons">
                      <button type="button" className="m-icon-round" onClick={pefamLink}>
                        <i className="fas fa-home" style={{fontSize:18}} />
                        <p className="m-icon-text">HOME PAGE</p>
                      </button>

                      <button type="button" className="m-icon-round" onClick={pefamDown} style={{height:40}}>
                        <span className="material-icons" style={{fontSize:20}}>
                          get_app
                        </span>
                        <p className="m-icon-text">APP DOWNLOAD</p>
                      </button>

                    </div>
                  </div>
                </div>


                <div className="m-prevNext-btn">
                  <div className="m-prev-btn">
                    <a href="/pefamCat">
                      <button type="button" className="m-left-btnImg">
                        <span className="material-icons" style={{color:'#ffffff', fontSize: 18}}>
                          arrow_back_ios_new
                        </span>
                      </button>
                    </a>
                  </div>
                  <div className="m-business-kinds">O2O PLATFORM</div>
                  
                  <div className="m-next-btn">
                    {/* emty */}
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

export default Pefam;