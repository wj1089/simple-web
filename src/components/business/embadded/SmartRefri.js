import React from 'react';
import Footer from '../../footer/Footer';
import '../item.css';
import '../../../index.css';
import itemImg from '../../../resourse/ES/es_4_detail.png';

const SmartRefri = () => {

    return (
      <>
        <div className="full-screen-dark">
          <div className="screen-layout-dark">
            <div className="lay-top-dark" />
          </div>

          <div className="screen-center-es">
            <div className="center-imgArea-es">
              <div className="es-topText">
                <p className="es-firstWord">SMART REFRIGERATOR SOLUTIONS CONTACT US</p>
                <p className="es-secondWord">MORIAHTOWN / SMART REFRIGERATOR SOLUTIONS CONTACT US</p>
              </div>
            </div>

            <div className="main-content-es">
              <div className="center-es">

                <div className="center-left">
                  <img src={itemImg} alt="esdetail-img" />
                </div>

                <div className="center-right">
                  <div className="discrip-title">
                    <p className="item-topic">EMBEDDED SOLUTION</p>
                    <p className="docu-topic">SMART REFRIGERATOR SOLUTIONS CONTACT US</p>
                  </div>
                  <div className="underLine-area-es">
                    <p className="topic-underLine-es" />
                  </div>
                  <div className="discrip-body">
                    Refrigerator is one of the most used appliances in a home. ArcSoft Smart Refrigerator Solutions include our cutting-edge food recognition engine that helps the refrigerator makers develop features of “guess and automatically get what is needed”.

                    ArcSoft’s Smart Refrigerator software SDK works with the interior and exterior cameras in a refrigerator:

                    · Based on the imaging data of items/foods captured by the cameras installed inside a refrigerator, and combining with the new technologies of big data analysis, cloud computing, deep learning of food material recognition, users’ dietary habits will be able to obtain. Therefore, personalized services to users such as online shopping, nutritional recommendations, and high-quality recipes can be offered.
                    · The exterior cameras is usually designed to work with the refrigerator’s external display panel, allowing users to give commands through ArcSoft’s hand-gesture technologies when it is inconvenient (for example, users’ hands are wet or in gloves) to touch the panel. This offers users a smoother and smarter refrigerator experience.

                    This solution guarantees that even in low-light condition, algorithms can still provide high-quality, high-accuracy results.
                    <div className="discrip-foot">
                      <span className="foot-title">
                        <p className="foot-date">DATE</p>
                        <p className="foot-dateWord">2016-11-11</p>
                      </span>

                      <span className="foot-title">
                        <p className="foot-date">TAGS</p>
                        <p className="foot-dateWord">Embedded Solution</p>
                      </span>
                    </div>

                    <div className="Link-icons">
                      <p className="icon-round"><i className="fab fa-facebook-f" /></p>
                      <p className="icon-round"><i className="fab fa-linkedin-in" /></p>
                      <p className="icon-round"><i className="fab fa-twitter" /></p>
                      <p className="icon-round"><i className="fab fa-tumblr" /></p>
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

export default SmartRefri;