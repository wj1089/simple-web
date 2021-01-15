import React from 'react';
import Footer from '../../footer/Footer';
import '../item.css';
import '../../../index.css';

import igre from '../../../resourse/O2O/o2o_3.png';
import pefemCat from '../../../resourse/O2O/o2o_2.png';
import pefem from '../../../resourse/O2O/o2o_1.png';


const Platform = () => {

    return (
      <>
        <div className="full-screen-busy">
          <div className="screen-layout-busy">
            <div className="lay-top-busy" />
          </div>

          <div className="screen-center-busy">
            <div className="center-imgArea-busy">
              <div className="center-imgText-busy">
                O2O PLATFORM
                <div className="underLine-area">
                  <p className="topic-underLine" />
                </div>
                <p className="imgText-p">모리아 타운이 개발한 O2O 플랫폼 서비스</p>
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
                      <a href="/pefemCat">
                        <img className="img-busy" src={pefemCat} alt="pefemCat-img" />
                      </a>
                      <div className="text-busy">
                        <p className="text-busy-title">페펨_캣시터</p>
                        <p className="text-busy-descrip">반려묘 방문 돌봄 서비스</p>
                      </div>
                    </div> 
                    <div className="inSide-content-busy">
                      <a href="/pefem">
                        <img className="img-busy" src={pefem} alt="pefem-img" />
                      </a>
                      <div className="text-busy">
                        <p className="text-busy-title">페펨</p>
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
      </>
    );
};

export default Platform;