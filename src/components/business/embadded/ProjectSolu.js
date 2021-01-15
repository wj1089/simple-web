import React from 'react';
import Footer from '../../footer/Footer';
import '../item.css';
import '../../../index.css';
import itemImg from '../../../resourse/ES/es_2_detail.png';

const ProjectSolu = () => {

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
                  <img className="projector-img" src={itemImg} alt="projector-img" />
                </div>

                <div className="center-right">
                  <div className="discrip-title">
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

export default ProjectSolu;