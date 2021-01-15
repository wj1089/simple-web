import React from 'react';
import Footer from '../../footer/Footer';
import '../item.css';
import '../../../index.css';
import itemImg from '../../../resourse/ES/es_8_detail.jpg'

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
                <p className="es-firstWord">SINGLE CAMERA SOLUTIONS FOR SMARTPHONES</p>
                <p className="es-secondWord">MORIAHTOWN / SINGLE CAMERA SOLUTIONS FOR SMARTPHONES</p>
              </div>
            </div>

            <div className="main-content-es">
              <div className="center-es">

                <div className="center-left">
                  <img className="sigleCamera-left" src={itemImg} alt="sigleCamera-img" />
                </div>

                <div className="center-right">
                  <div className="discrip-title">
                    <p className="item-topic">EMBEDDED SOLUTION</p>
                    <p className="docu-topic">SINGLE CAMERA SOLUTIONS FOR SMARTPHONESs</p>
                  </div>
                  <div className="underLine-area-es">
                    <p className="topic-underLine-es" />
                  </div>
                  <div className="discrip-body">
                    ArcSoft offers a complete suite of image and video solutions for both front and rear-facing smartphone cameras to assist phone manufacturers improving the quality of captured images and recorded video, and also expanding the capabilities of existing camera apps.<br /><br />

                    Our licensed algorithms are thoroughly optimized to fit the specifications of most popular phone SoC brands such as Qualcomm, MediaTek, Samsung, and Spreadtrum. These optimizations significantly help to lower the requirements on the hardware, therefore our solutions can usually all be applied to an OEM’s low, mid, and high-end platforms for the mass market.<br /><br />

                    ArcSoft also provides professional engineering integration services and technical support for its mobile camera solutions. Our team specializes in the Android framework and its camera Hardware Abstraction Layer (HAL), as well as the structure and development of mobile apps. Our deep understanding of all mainstream camera sensors and modules allows us to provide OEMs with fast integration and optimization, resulting in high performance and customer satisfaction on the end products.<br /><br />

                    ArcSoft’s single camera solutions for smartphones are already embedded on billions of smartphones shipped worldwide.
                  </div>
                  <div className="discrip-body">
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