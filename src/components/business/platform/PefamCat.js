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
import itemImg from '../../../resourse/O2O/o2o_2_detail.png';


const PefamCat = () => {
    function pefamCatLink (e) {
      e.preventDefault();
      window.open(urls.pefamCatLink)
    }
    function pefamCatInsta (e) {
      e.preventDefault();
      window.open(urls.pefamCatInsta)
    }
    function pefamCatDown (e) {
      e.preventDefault();
      window.open(urls.pefamCatDown)
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
                  <p className="es-firstWord">페팸_캣시터</p>
                  <p className="es-secondWord">MORIAHTOWN / 반려묘 방문 돌봄 서비스</p>
                </div>
              </div>

              <div className="main-content-es">
                <div className="center-es">

                  <div className="center-left">
                    <img className="pefamCat-img" src={itemImg} alt="pefamCat-img" />
                  </div>

                  <div className="center-right">
                    <div>
                      <p className="item-topic">O2O PLATFORM</p>
                      <p className="docu-topic">페팸_캣시터</p>
                    </div>
                    <div className="underLine-area-es">
                      <p className="topic-underLine-es" />
                    </div>
                    <div className="discrip-body">
                      <b>반려묘 방문 돌봄 서비스</b><br />
                      ‘페팸 캣시터’는 2015년부터 ‘페팸’을 운영해온 모리아타운의 노하우와 시스템을 바탕으로 런칭된 반려묘 방문 돌봄 중개 플랫폼입니다.<br />
                      <br /><br />
                      페팸 캣시터는 낯선 환경에 쉽게 스트레스를 받는 반려묘의 특성에 최적화 된 방문 돌봄 서비스를 제공합니다.  앱에서 예약부터 펫시터 정보 확인, 결제까지 원스톱으로 해결하고,  안전보상정책을 통해 고객이 안심하고 이용 할 수 
                      있습니다.
                      <br /><br />
                      페팸 캣시터는 오랫동안 쌓아온 반려동물과 반려인에 대한 이해를 바탕으로  
                      반려묘 전문 브랜드로 영향력을 확대해 가고 있습니다.
                      
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
                        <button type="button" className="icon-round" onClick={pefamCatLink}>
                          <i className="fas fa-home" style={{fontSize:18}} />
                          <p className="icon-text">HOME PAGE</p>
                        </button>
                        <button type="button" className="icon-round" onClick={pefamCatInsta}>
                          <i className="fab fa-instagram" style={{fontSize:18}} />
                          <p className="icon-text">INSTAGRAM</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prevNext-btn">
                <div className="prev-btn">
                  <a href="/igre">
                    <div className="left-btnImg">
                      <span className="material-icons" style={{color:'#ffffff', fontSize:'18px'}}>
                        arrow_back_ios_new
                      </span>
                    </div>
                  </a>
                  <p className="btn-info">PREVIOUS PROJECT</p>
                </div>
                <div className="business-kinds">O2O PLATFORM</div>
                <div className="next-btn">
                  <a href="/pefam">
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
              <div className="m-lay-second-dark" />
              <div className="m-lay-last-dark" />
            </div>

            <div className="m-screen-center-es">
              <div className="m-center-imgArea-es">
                <div className="m-es-topText">
                  <p className="m-es-firstWord">페팸_캣시터</p>
                  <p className="m-es-secondWord">MORIAHTOWN / 반려묘 방문 돌봄 서비스</p>
                </div>
              </div>

              <div className="m-main-content-es">

                <div className="m-center-top">
                  <img className="m-igre-img" src={itemImg} alt="igre-img" />
                </div>

                <div className="m-discrip-info">
                  <p className="m-item-topic">O2O PLATFORM</p>
                  <p className="m-item-docu">페팸_캣시터</p>
                  
                  <div>
                    <p className="m-topic-underLine-detail" />
                  </div>
                </div>

                <div className="m-center-bottom">
                  <div className="m-discrip-body">
                    <b>반려묘 방문 돌봄 서비스</b><br />
                    ‘페팸 캣시터’는 2015년부터 ‘페팸’을 운영해온 모리아타운의 노하우와 시스템을 바탕으로 런칭된 반려묘 방문 돌봄 중개 플랫폼입니다.
                    <br /><br />
                    페팸 캣시터는 낯선 환경에 쉽게 스트레스를 받는 반려묘의 특성에 최적화 된 방문 돌봄 서비스를 제공합니다.  앱에서 예약부터 펫시터 정보 확인, 결제까지 원스톱으로 해결하고,  안전보상정책을 통해 고객이 안심하고 이용 할 수 있습니다.
                    <br /><br />
                    페팸 캣시터는 오랫동안 쌓아온 반려동물과 반려인에 대한 이해를 바탕으로  반려묘 전문 브랜드로 영향력을 확대해 가고 있습니다.                    
                  </div>
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
                    <button type="button" className="m-icon-round" onClick={pefamCatLink}>
                      <i className="fas fa-home" style={{fontSize:20}} />
                      <p className="m-icon-text">HOME PAGE</p>
                    </button>
                    <button type="button" className="m-icon-round" onClick={pefamCatInsta}>
                      <i className="fab fa-instagram" style={{fontSize:20}} />
                      <p className="m-icon-text">INSTAGRAM</p>
                    </button>

                    <button type="button" className="m-icon-round" onClick={pefamCatDown} style={{height:40}}>
                      <span className="material-icons" style={{fontSize:20}}>
                        get_app
                      </span>
                      <p className="m-icon-text">APP DOWNLOAD</p>
                    </button>
                  </div>

                </div>


                <div className="m-prevNext-btn">
                  <div className="m-prev-btn">
                    <a href="/igre">
                      <button type="button" className="m-left-btnImg">
                        <span className="material-icons" style={{color:'#ffffff', fontSize:'15px'}}>
                          arrow_back_ios_new
                        </span>
                      </button>
                    </a>
                  </div>
                  <div className="m-business-kinds">O2O PLATFORM</div>
                  
                  <div className="m-next-btn">
                    <a href="/pefam">
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

export default PefamCat;