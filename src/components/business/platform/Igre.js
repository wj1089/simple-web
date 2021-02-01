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

import itemImg from '../../../resourse/O2O/o2o_3_detail.png';
import * as urls from '../../cabinet/urls';


const Igre = () => {

  function igreLink (e) {
    e.preventDefault();
    window.open(urls.igreLink)
  }
  function igreInsta (e) {
    e.preventDefault();
    window.open(urls.igreInsta)
  }
  function igreDown (e) {
    e.preventDefault();
    window.open(urls.igreDown)
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
                  <p className="es-firstWord">아이그레</p>
                  <p className="es-secondWord">MORIAHTOWN / 어린이 식품 배송 서비스</p>
                </div>
              </div>

              <div className="main-content-es">
                <div className="center-es">

                  <div className="center-left">
                    <img className="igre-img" src={itemImg} alt="igre-img" />
                  </div>

                  <div className="center-right">
                    <div>
                      <p className="item-topic">O2O PLATFORM</p>
                      <p className="docu-topic">아이그레</p>
                    </div>
                    <div className="underLine-area-es">
                      <p className="topic-underLine-es" />
                    </div>
                    <div className="discrip-body">
                      <b>어린이 식품 배송 서비스</b><br />
                      어린이 식품 배송 서비스 ‘아이그레’는 간식부터 가정간편식까지 어린이와<br />
                      가족을 위한 먹거리를 앱으로 간편하게 주문할 수 있는 서비스입니다.
                      <br /><br />
                      아이그레는 어린 자녀의 식단을 짜는 것이 부담 되고, 장을 볼 시간도 부족한 
                      부모님의 고민을 대신해서 어린이가 먹기 좋은 식품을 찾고, 부담 없는 가격에 제공합니다.
                      <br /><br />
                      또한, 가족을 위한 특색 있고 트렌디한 식품을 찾아 선보이며,  다양한 먹거리를 손쉽게 경험할 수 있도록 서비스를 발전시켜 나갈 것입니다.
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
                        <button type="button" className="icon-round" onClick={igreLink}>
                          <i className="fas fa-home" style={{fontSize:18}} />
                          <p className="icon-text">HOME PAGE</p>
                        </button>
                        <button type="button" className="icon-round" onClick={igreInsta}>
                          <i className="fab fa-instagram" style={{fontSize:18}} />
                          <p className="icon-text">INSTAGRAM</p>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <div className="prevNext-btn">
                <div className="prev-btn" />
                <div className="business-kinds">O2O PLATFORM</div>
                <div className="next-btn">
                  <a href="/pefamCat">
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
                  <p className="m-es-firstWord">아이그레</p>
                  <p className="m-es-secondWord">MORIAHTOWN / 어린이 식품 배송 서비스</p>
                </div>
              </div>

              <div className="m-main-content-es">

                <div className="m-center-top">
                  <img className="m-igre-img" src={itemImg} alt="igre-img" />
                </div>

                <div className="m-discrip-info">
                  <p className="m-item-topic">O2O PLATFORM</p>
                  <p className="m-item-docu">아이그레</p>
                  
                  <div>
                    <p className="m-topic-underLine-detail" />
                  </div>
                </div>

                <div className="m-center-bottom">
                  <div className="m-discrip-body">
                    <b>어린이 식품 배송 서비스</b><br />
                    어린이 식품 배송 서비스 ‘아이그레’는 간식부터 가정간편식까지 어린이와 가족을 위한 먹거리를 앱으로 간편하게 주문할 수 있는 서비스입니다.
                    <br /><br />
                    아이그레는 어린 자녀의 식단을 짜는 것이 부담 되고, 장을 볼 시간도 부족한 부모님의 고민을 대신해서 어린이가 먹기 좋은 식품을 찾고, 부담 없는 가격에 제공합니다.
                    <br /><br />
                    또한, 가족을 위한 특색 있고 트렌디한 식품을 찾아 선보이며,  다양한 먹거리를 손쉽게 경험할 수 있도록 서비스를 발전시켜 나갈 것입니다.
                    
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
                        <button type="button" className="m-icon-round" onClick={igreLink}>
                          <i className="fas fa-home" style={{fontSize: 18}} />
                          <p className="m-icon-text">HOME PAGE</p>
                        </button>
                        <button type="button" className="m-icon-round" onClick={igreInsta}>
                          <i className="fab fa-instagram" style={{fontSize:18}} />
                          <p className="m-icon-text">INSTAGRAM</p>
                        </button>

                        <button type="button" className="m-icon-round" onClick={igreDown} style={{width:160}}>
                          <span className="material-icons" style={{fontSize:18}}>
                            get_app
                          </span>
                          <p className="m-icon-text">APP DOWNLOAD</p>
                        </button>

                      </div>

                    </div>
                  </div>
                </div>

                


                <div className="m-prevNext-btn">
                  <div className="m-prev-btn">
                    {/* emty */}
                  </div>
                  <div className="m-business-kinds">O2O PLATFORM</div>
                  
                  <div className="m-next-btn">
                    <a style={{outline:'none',textDecoration:'none'}} href="/pefamCat">
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

export default Igre;