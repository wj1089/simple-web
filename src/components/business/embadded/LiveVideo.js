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


import itemImg from '../../../resourse/ES/es_1_detail.png';

const LiveVideo = () => {

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
                    <div>
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
                    </div>
                  </div>
                </div>
              </div>

              <div className="prevNext-btn">
                <div className="prev-btn">
                  <a href="/ProjectSolu">
                    <div className="left-btnImg">
                      <span className="material-icons" style={{color:'#ffffff', fontSize:'18px'}}>
                        arrow_back_ios_new
                      </span>
                    </div>
                  </a>
                  <p className="btn-info">PREVIOUS PROJECT</p>
                </div>
                <div className="business-kinds">EMBEDDED SOLUTION</div>
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
                  <p className="m-es-firstWord">LIVE VIDEO BROADCASTING SOLUTIONS</p>
                  <p className="m-es-secondWord">MORIAHTOWN / LIVE VIDEO BROADCASTING SOLUTIONS</p>
                </div>
              </div>

              <div className="m-main-content-es">

                <div className="m-center-top">
                  <img className="m-liveShow-img" src={itemImg} alt="liveShow-img" />
                </div>

                <div className="m-discrip-info">
                  <p className="m-item-topic">EMBEDDED SOLUTION</p>
                  <p className="m-item-docu">LIVE VIDEO BROADCASTING SOLUTIONS</p>
                  
                  <div>
                    <p className="m-topic-underLine-detail" />
                  </div>
                </div>

                <div className="m-center-bottom">
                  <div className="m-discrip-body">
                    Following the widespread popularization of live video broadcasting, the increase of online community applications, and the needs to edit and share short videos and images real-time, ArcSoft has developed a series of solutions offering special effect filters, facial beautification and impression, etc. for adding values to these type of applications.
                    <br /><br />
                    These solutions are usually geared towards live video broadcasting apps, and can enhance the broadcaster’s appearance in front of users in real-time, as well as adding special effects. With them, the host and their fans can therefore interact more efficiently, and the apps achieve better user retention rate.
                    <br /><br />
                    With regards to pictures, video sharing, and community apps, these solutions can boost picture and video quality and the presentations, adding an element of entertainment, which greatly improves the experience of both the host and audience.
                    <br /><br />
                    Due to the value of them, many main stream internet video hosting and editing applications have already integrated these solutions into their products.
                  </div>
                </div>

                <div className="m-foot-info">
                  <span className="m-foot-fisrt">
                    <p className="m-foot-date">DATE</p>
                    <p className="m-foot-dateWord">2016-11-11</p>
                  </span>

                  <span className="m-foot-second">
                    <p className="m-foot-date">TAGS</p>
                    <p className="m-foot-dateWord">Embedded Solution</p>
                  </span>
                </div>


                <div className="m-prevNext-btn">
                  <div className="m-prev-btn">
                    <a href="/projectSolu">
                      <button type="button" className="m-left-btnImg">
                        <span className="material-icons" style={{color:'#ffffff', fontSize:'15px'}}>
                          arrow_back_ios_new
                        </span>
                      </button>
                    </a>
                  </div>
                  <div className="m-business-kinds">EMBEDDED SOLUTION</div>
                  
                  <div className="m-next-btn">
                    {/* <a href="/liveVideo">
                      <div className="m-right-btnImg">
                        <span className="material-icons" style={{color:'#ffffff', fontSize:'15px'}}>
                          arrow_forward_ios
                        </span>
                      </div>
                    </a> */}
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

export default LiveVideo;