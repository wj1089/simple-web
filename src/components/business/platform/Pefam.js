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
                        <button type="button" className="icon-round" onClick={pefamLink}>
                          <i className="fas fa-home" style={{fontSize:18}} />
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
                  <p className="m-es-firstWord">아이그레</p>
                  <p className="m-es-secondWord">MORIAHTOWN / 어린이 식품 배송 서비스</p>
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
                      <p className="m-foot-dateWord">2016-11-11</p>
                    </span>

                    <span className="m-foot-second">
                      <p className="m-foot-date">TAGS</p>
                      <p className="m-foot-dateWord">O2O PLATFORM</p>
                    </span>

                    <div className="m-Link-icons">
                      <button type="button" className="icon-round" onClick={pefamLink}>
                        <i className="fas fa-home" style={{fontSize:18}} />
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