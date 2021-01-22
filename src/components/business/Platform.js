import React from 'react';
import {
  BrowserView,
  MobileView
} from "react-device-detect";
import Footer from '../footer/Footer';
import './item.css';
import './mitem.css';
import '../../index.css';
import '../../mindex.css';

import igre from '../../resourse/O2O/o2o_3.png';
import pefamCat from '../../resourse/O2O/o2o_2.png';
import pefam from '../../resourse/O2O/o2o_1.png';


const Platform = () => {

    return (
      <>
        <BrowserView>
          <div className="full-screen-busy">
            <div className="screen-layout-busy">
              <div className="lay-top-busy" />
            </div>

            <div className="screen-center-busy">
              <div className="center-imgArea-busy">
                <div className="center-imgText-busy">
                  O2O SERVICE PLATFORM
                  <div className="underLine-area">
                    <p className="topic-underLine" />
                  </div>
                  <p className="imgText-p">O2O 서비스 플랫폼</p>
                </div>
              </div>
              <div className="main-content-busy">
                <div className="center-platfrom">
                  <div className="business-imgArea">

                    <div className="imgArea-first-row">
                      <div className="inSide-content-busy">
                        <a href="/igre">
                          <img className="img-busy" src={igre} alt="igre-img" />
                        </a>
                        <div className="text-busy">
                          <p className="text-busy-title">아이그레</p>
                          <p className="text-busy-descrip">어린이 식품배송 서비스</p>
                        </div>
                      </div>
                      <div className="inSide-content-busy">
                        <a href="/pefamCat">
                          <img className="img-busy" src={pefamCat} alt="pefamCat-img" />
                        </a>
                        <div className="text-busy">
                          <p className="text-busy-title">페팸_캣시터</p>
                          <p className="text-busy-descrip">반려묘 방문 돌봄 서비스</p>
                        </div>
                      </div> 
                      <div className="inSide-content-busy">
                        <a href="/pefam">
                          <img className="img-busy" src={pefam} alt="pefam-img" />
                        </a>
                        <div className="text-busy">
                          <p className="text-busy-title">페팸</p>
                          <p className="text-busy-descrip">반려견 펫시터 매칭 서비스</p>
                        </div>
                      </div> 
                      <div className="inSide-empty-busy">
                        {/* <p className="img-link-detail">a</p> */}
                        <div className="text-emty" />
                      </div> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </BrowserView>




        <MobileView>
          <div className="m-full-screen">
            <div className="m-screen-layout">
              <div className="lay-mobile-top" />
            </div>

            <main className="m-screen-fullArea">
              <div className="m-screen-center-Area">
                <div className="m-top-mobile-image">
                  <div className="m-page-imgText">
                    <p className="m-page-mainWord">020 PLATFORM</p>
                    <div className="m-underLine-area">
                      <p className="m-topic-underLine" />
                    </div>
                    <p className="m-page-subWord">모리아 타운이 개발한 O2O 플랫폼 서비스</p>
                  </div>
                  {/* <div className="m-center-imgText">
                    <p className="m-pagetitle">020 PLATFORM</p>
                  </div> */}
                  
                </div>

                <div className="m-center-contentArea">
                  
                  <div className="m-center-row">
                    <div className="m-center-content">
                      <a href="/igre">
                        <img className="m-img-busy" src={igre} alt="igre-img" />
                      </a>
                      <div className="m-text-busy">
                        <p className="m-text-busy-title">아이그레</p>
                        <p className="m-text-busy-descrip">어린이 식품배송 서비스</p>
                      </div>
                    </div>

                    <div className="m-center-content">
                      <a href="/pefamCat">
                        <img className="m-img-busy" src={pefamCat} alt="pefamCat-img" />
                      </a>
                      <div className="m-text-busy">
                        <p className="m-text-busy-title">페팸_캣시터</p>
                        <p className="m-text-busy-descrip">반려묘 방문 돌봄 서비스</p>
                      </div>
                    </div>
                  </div>

                  <div className="m-center-row">
                    <div className="m-center-content">
                      <a href="/pefam">
                        <img className="m-img-busy" src={pefam} alt="pefam-img" />
                      </a>
                      <div className="m-text-busy">
                        <p className="m-text-busy-title">페팸</p>
                        <p className="m-text-busy-descrip">반려견 펫시터 매칭 서비스</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <Footer /> 
        </MobileView>
      </>
    );
};

export default Platform;