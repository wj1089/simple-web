import React from 'react';
import Footer from '../../footer/Footer';
import '../item.css';
import '../../../index.css';
import itemImg from '../../../resourse/O2O/o2o_1_detail.png';

const Pefem = () => {

    return (
      <>
        <div className="full-screen-dark">
          <div className="screen-layout-dark">
            <div className="lay-top-dark" />
          </div>

          <div className="screen-center-es">
            <div className="center-imgArea-es">
              <div className="es-topText">
                <p className="es-firstWord">페펨</p>
                <p className="es-secondWord">MORIAHTOWN / 반려견 펫시터 매칭 서비스</p>
              </div>
            </div>

            <div className="main-content-es">
              <div className="center-es">

                <div className="center-left">
                  <img className="pefem-img" src={itemImg} alt="pefem-img" />
                </div>

                <div className="center-right">
                  <div className="discrip-title">
                    <p className="item-topic">O2O PLATFORM</p>
                    <p className="docu-topic">페펨</p>
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
                      <p className="icon-round"><i className="fas fa-home" /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
};

export default Pefem;