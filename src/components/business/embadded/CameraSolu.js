import React from 'react';
import Footer from '../../footer/Footer';
import '../item.css';
import '../../../index.css';
import itemImg from '../../../resourse/ES/es_6_detail.png';

// import facebook from '../../../resourse/ES/es_6_detail.png';
// import twitter from '../../../resourse/ES/es_6_detail.png';
// import linkdein from '../../../resourse/ES/es_6_detail.png';
// import tt from '../../../resourse/ES/es_6_detail.png';

const CameraSolu = () => {

    return (
      <>
        <div className="full-screen-dark">
          <div className="screen-layout-dark">
            <div className="lay-top-dark" />
          </div>

          <div className="screen-center-es">
            <div className="center-imgArea-es">
              <div className="es-topText">
                <p className="es-firstWord">360° CAMERA SOLUTIONS</p>
                <p className="es-secondWord">MORIAHTOWN / 360° CAMERA SOLUTIONS</p>
              </div>
            </div>

            <div className="main-content-es">
              <div className="center-es">

                <div className="center-left">
                  <img className="cameraSolu-img" src={itemImg} alt="cameraSolu-img" />
                </div>

                <div className="center-right">
                  <div className="discrip-title">
                    <p className="item-topic">EMBEDDED SOLUTION</p>
                    <p className="docu-topic">360° CAMERA SOLUTIONS</p>
                  </div>
                  <div className="underLine-area-es">
                    <p className="topic-underLine-es" />
                  </div>
                  <div className="discrip-body">
                    As virtual reality (VR) products are increasingly introduced to the market, 360° cameras are following this trend and entering into the mainstream market as well. Samsung, LG, Nokia, Ricoh, and many other branded manufacturers are all releasing their own line of new technologies.<br /><br />

                    ArcSoft offers a series of solutions in response to this hot market. Among them are software SDKs featuring de-warping and stitching, which have been thoroughly customized and optimized for integrating with the latest hardware and apps. Along with these core engines, our 360° Camera Solutions also include performance optimizations, network SDKs and full customizable applications for various platforms (Android, iOS, Windows, Mac, etc.) which increase the quality and performance of clients’ products, while significantly reducing our OEMs’ development cycles.
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

export default CameraSolu;