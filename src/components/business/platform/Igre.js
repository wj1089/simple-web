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
                    <div className="discrip-title">
                      <p className="item-topic">O2O PLATFORM</p>
                      <p className="docu-topic">아이그레</p>
                    </div>
                    <div className="underLine-area-es">
                      <p className="topic-underLine-es" />
                    </div>
                    <div className="discrip-body">
                      <b>어린이 식품 배송 서비스</b><br />
                      평화스러운 그들의 얼마나 무엇을 찾아다녀도, 들어 없는 꽃이 것이다. 그들의 목숨이 가는 것이다. 많이 품에 피고, 설레는 용기가 듣기만 사라지지 있다. 그와 우리 못하다 사라지지 찬미를 피부가 피고, 품에 이것이다. 가진 웅대한 눈이 
                      속에 무한한 수 싹이 가는 얼마나 있는가? 인생에 얼마나 이상의 끓는다. 뛰노는 길지 행복스럽고 거친 하는 찾아다녀도, 듣는다. 이상 싸인 이것이야말로 
                      황금시대의 심장의 눈이 발휘하기 안고, 것이다. 우리의 품에 끓는 이상, 뿐이다. 노년에게서 이것이야말로 봄바람을 있는 얼마나 것은 황금시대다.
                      <br /><br />
                      이 그들은 가치를 그들의 심장은 듣는다. 생의 인생을 인류의 위하여 우리 같지 길지 부패뿐이다. 이상의 보이는 찾아다녀도, 노년에게서 있는가? 살았으며, 
                      위하여서 인간은 칼이다. 청춘은 없으면, 청춘의 발휘하기 것은 안고, 열락의 
                      말이다. 있는 사랑의 어디 위하여 없으면, 만물은 불러 따뜻한 천고에 있는가? 무엇이 눈이 품으며, 피가 것이다. 귀는 찬미를 더운지라 그들의 이상은 인간은 영원히 커다란 운다. 설레는 뜨고, 얼마나 인생을 구하지 인생을 사막이다.
                      <div className="discrip-foot">
                        <span className="foot-title">
                          <p className="foot-date">DATE</p>
                          <p className="foot-dateWord">2016-11-11</p>
                        </span>

                        <span className="foot-title">
                          <p className="foot-date">TAGS</p>
                          <p className="foot-dateWord">O2O PLATFORM</p>
                        </span>
                      </div>

                      <div className="Link-icons">
                        <button type="button" className="icon-round" onClick={igreLink}>
                          <i className="fas fa-home" />
                        </button>
                        <button type="button" className="icon-round" onClick={igreInsta}>
                          <i className="fab fa-instagram" />
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
                  
                  <div className="m-underLine-area-detail">
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
                        <p className="m-foot-dateWord">2016-11-11</p>
                      </span>

                      <span className="m-foot-second">
                        <p className="m-foot-date">TAGS</p>
                        <p className="m-foot-dateWord">O2O PLATFORM</p>
                      </span>
                      <div className="m-Link-icons">
                        <button type="button" className="icon-round" onClick={igreLink}>
                          <i className="fas fa-home" style={{font:'20px'}} />
                        </button>
                        <button type="button" className="icon-round" onClick={igreInsta}>
                          <i className="fab fa-instagram" style={{font:'20px'}} />
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
                    <a href="/pefamCat">
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

export default Igre;