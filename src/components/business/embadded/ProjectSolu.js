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

import itemImg from '../../../resourse/ES/es_2_detail.png';

const ProjectSolu = () => {

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
                    <img className="projector-img" src={itemImg} alt="projector-img" />
                  </div>

                  <div className="center-right">
                    <div>
                      <p className="item-topic">EMBEDDED SOLUTION</p>
                      <p className="docu-topic">PROJECTOR SOLUTIONS</p>
                    </div>
                    <div className="underLine-area-es">
                      <p className="topic-underLine-es" />
                    </div>
                    <div className="discrip-body">
                      As projectors with wireless capabilities are becoming the industry standard, along with multiple projector setups increasingly being utilized as part of interactive learning programs, ArcSoft has developed a complete projector solution built on top of wireless projector setups and with interaction in mind.<br /> <br />

                      This suite of solutions completely redefines how technology is used in business conferences, allowing speakers to use smartphones or tablets to project documents, images and videos wirelessly, instead of relying on using computers and data cables as before. Participants can also project the screen of their devices, supporting up to 4 devices to be projected simultaneously, making meetings more interactive and involved.<br /><br />

                      Our solutions assist interactive learning programs not only with the wireless features described above, but also allow teachers and students use a main projector easily share content and interact with students in smaller groups which have their own desk projectors, offering an all-new educational experience.<br /><br />

                      While providing projector-side technologies and intelligent end-user applications, ArcSoft also provides professional integration services for projector wireless modules. Our team specializes in Android and Linux system architecture and framework, cross-platform (iOS, Android, Linux, Windows and Mac) application development, and has an extensive understanding of all mainstream wireless modules and wireless protocols, ensuring that client projects receive a strong assurance of quick integration and thorough optimization. Currently, some of the most well-known projector manufacturers have already integrated our suite of solutions into their products.<br /><br />
                      
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
                  <a href="/SmartCar">
                    <div className="left-btnImg">
                      <span className="material-icons" style={{color:'#ffffff', fontSize:'18px'}}>
                        arrow_back_ios_new
                      </span>
                    </div>
                  </a>
                  <p className="btn-info">PREVIOUS PROJECT</p>
                </div>
                <div className="business-kinds">EMBEDDED SOLUTION</div>
                <div className="next-btn">
                  <a href="/LiveVideo">
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
                  <p className="m-es-firstWord">PROJECTOR SOLUTIONS</p>
                  <p className="m-es-secondWord">MORIAHTOWN / PROJECTOR SOLUTIONS</p>
                </div>
              </div>

              <div className="m-main-content-es">

                <div className="m-center-top">
                  <img className="m-projector-img" src={itemImg} alt="projector-img" />
                </div>

                <div className="m-discrip-info">
                  <p className="m-item-topic">EMBEDDED SOLUTION</p>
                  <p className="m-item-docu">PROJECTOR SOLUTIONS</p>
                  
                  <div>
                    <p className="m-topic-underLine-detail" />
                  </div>
                </div>

                <div className="m-center-bottom">
                  <div className="m-discrip-body">
                    As projectors with wireless capabilities are becoming the industry standard, along with multiple projector setups increasingly being utilized as part of interactive learning programs, ArcSoft has developed a complete projector solution built on top of wireless projector setups and with interaction in mind.
                    <br /><br />
                    This suite of solutions completely redefines how technology is used in business conferences, allowing speakers to use smartphones or tablets to project documents, images and videos wirelessly, instead of relying on using computers and data cables as before. Participants can also project the screen of their devices, supporting up to 4 devices to be projected simultaneously, making meetings more interactive and involved.
                    <br /><br />
                    Our solutions assist interactive learning programs not only with the wireless features described above, but also allow teachers and students use a main projector easily share content and interact with students in smaller groups which have their own desk projectors, offering an all-new educational experience.
                    <br /><br />
                    While providing projector-side technologies and intelligent end-user applications, ArcSoft also provides professional integration services for projector wireless modules. Our team specializes in Android and Linux system architecture and framework, cross-platform (iOS, Android, Linux, Windows and Mac) application development, and has an extensive understanding of all mainstream wireless modules and wireless protocols, ensuring that client projects receive a strong assurance of quick integration and thorough optimization. Currently, some of the most well-known projector manufacturers have already integrated our suite of solutions into their products.                  
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
                    <a href="/smartCar">
                      <button type="button" className="m-left-btnImg">
                        <span className="material-icons" style={{color:'#ffffff', fontSize:'15px'}}>
                          arrow_back_ios_new
                        </span>
                      </button>
                    </a>
                  </div>
                  <div className="m-business-kinds">EMBEDDED SOLUTION</div>
                  
                  <div className="m-next-btn">
                    <a href="/liveVideo">
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

export default ProjectSolu;