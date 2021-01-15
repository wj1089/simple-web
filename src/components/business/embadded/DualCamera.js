import React from 'react';
import Footer from '../../footer/Footer';
import '../item.css';
import '../../../index.css';
import itemImg from '../../../resourse/ES/es_7_detail.png';

const SingleCamera = () => {

    return (
      <>
        <div className="full-screen-dark">
          <div className="screen-layout-dark">
            <div className="lay-top-dark" />
          </div>

          <div className="screen-center-es">
            <div className="center-imgArea-es">
              <div className="es-topText">
                <p className="es-firstWord">DUAL CAMERA SOLUTIONS FOR SMARTPHONES</p>
                <p className="es-secondWord">MORIAHTOWN / DUAL CAMERA SOLUTIONS FOR SMARTPHONES</p>
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
                    <p className="docu-topic">DUAL CAMERA SOLUTIONS FOR SMARTPHONES</p>
                  </div>
                  <div className="underLine-area-es">
                    <p className="topic-underLine-es" />
                  </div>
                  <div className="discrip-body">
                    As dual camera smartphones is gradually accepted by the market, ArcSoft has been developing solutions to fit various hardware configurations, including a complete suite which includes RGB + Mono dual-camera technology for improving image quality under low-light conditions, Wide RGB + Tele RGB (W+T) dual camera technology for virtualized optical zoom, and depth-sensing camera technologies.

                    In 2015, ArcSoft assisted smartphone manufacturers in releasing the world’s first (RGB + Mono) rear facing dual camera smartphone, which quickly became a hot feature within the industry. At the same time, we entered into close partnership with major camera module manufacturers, camera sensor manufacturers and SoC platform manufacturers, all together driving the development of future mobile dual camera technologies and the applications.
                    
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

export default SingleCamera;