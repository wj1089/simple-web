import React from 'react';
import Footer from '../footer/Footer';
import './mission.css';
import '../../index.css';

const Mission = () => {


    return (
      <>
        <div className="full-screen">
          <div className="screen-layout">
            <div className="lay-top" />
            <div className="lay-mission-first" />
            <div className="lay-mission-second" />
            <div className="lay-mission-third" />
          </div>



          <div className="screen-centerArea">
            <div className="center-imageArea">
              <div className="center-selectBar">
                <a className="disable-Button" href="/Company">ABOUT</a>
                <div className="select-Button">MISSION</div>
                <a className="disable-Button" href="/Patent">PATENT</a>
              </div>
            </div>

            <div className="center-missionArea">
              <div className="center-mission">
                <h1>Misson</h1>
                <div className="underLine-area">
                  <p className="topic-underLine" />
                </div>
              </div>
              <div className="mission-box">
                123
              </div>
            </div>

            <div className="center-visionArea">
              <div className="center-vision">
                <h1>VISION</h1>
                <div className="underLine-area">
                  <p className="topic-underLine" />
                </div>
              </div>
            </div>

            <div className="center-coreArea">
              <div className="center-core">
                <h1>CORE VALUE</h1>
                <div className="underLine-area">
                  <p className="topic-underLine" />
                </div>
                <p className="center-commentText">
                  끊임없는 연구개발과 기술공급에 최선의 노력을 다하고 있으며, blue ocean 창출에 노력하고 있습니다.
                </p>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </>
    );
};

export default Mission;