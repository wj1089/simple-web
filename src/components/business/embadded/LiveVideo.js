import React from 'react';
import Footer from '../../footer/Footer';
import '../item.css';
import '../../../index.css';
import itemImg from '../../../resourse/ES/es_1_detail.png';

const LiveVideo = () => {

    return (
      <>
        <div className="full-screen-dark">
          <div className="screen-layout-dark">
            <div className="lay-top-dark" />
          </div>

          <div className="screen-center-es">
            <div className="center-imgArea-es">
              <div className="es-topText">
                <p className="es-firstWord">PROJECTOR SOLUTIONS</p>
                <p className="es-secondWord">MORIAHTOWN / PROJECTOR SOLUTIONS</p>
              </div>
            </div>

            <div className="main-content-es">
              <div className="center-es">

                <div className="center-left">
                  <img className="liveShow-img" src={itemImg} alt="liveShow-img" />
                </div>

                <div className="center-right">
                  <div className="discrip-title">
                    <p className="item-topic">EMBEDDED SOLUTION</p>
                    <p className="docu-topic">LIVE VIDEO BROADCASTING SOLUTIONS</p>
                  </div>
                  <div className="underLine-area-es">
                    <p className="topic-underLine-es" />
                  </div>
                  <div className="discrip-body">
                    Following the widespread popularization of live video broadcasting, the increase of online community applications, and the needs to edit and share short videos and images real-time, ArcSoft has developed a series of solutions offering special effect filters, facial beautification and impression, etc. for adding values to these type of applications.<br /><br />

                    These solutions are usually geared towards live video broadcasting apps, and can enhance the broadcaster’s appearance in front of users in real-time, as well as adding special effects. With them, the host and their fans can therefore interact more efficiently, and the apps achieve better user retention rate.<br /><br />

                    With regards to pictures, video sharing, and community apps, these solutions can boost picture and video quality and the presentations, adding an element of entertainment, which greatly improves the experience of both the host and audience.<br /><br />

                    Due to the value of them, many main stream internet video hosting and editing applications have already integrated these solutions into their products.<br />
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

export default LiveVideo;