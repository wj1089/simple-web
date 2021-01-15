import React from 'react';
import Footer from '../footer/Footer';
import './patent.css';
import '../../index.css';

const Patent = () => {

    return (
      <>
        <div className="full-screen">
          <div className="screen-layout">
            <div className="lay-top" />
          </div>

          <div className="screen-centerArea">
            <div className="center-imageArea">
              <div className="center-selectBar">
                <a className="disable-Button" href="/Company">ABOUT</a>
                <a className="disable-Button" href="/Mission">MISSION</a>
                <div className="select-Button" href="/">PATENT</div>
              </div>
            </div>

            <div className="center-patentArea">
              <div className="center-patent">
                <div className="patent-topText">
                  <h1>Patent</h1>
                  <div className="underLine-area">
                    <p className="topic-underLine" />
                  </div>
                  <p>모리아타운이 가지고 있는 특허권 목록입니다.</p>
                </div>


                <div className="patent-imgArea">
                  <div className="patent-img-row">
                    <div className="patent-imgSize">
                      <div className="icon-outLine">
                        <div className="icon-size">a123</div>
                      </div>
                      <div className="icon-outLine">
                        <div className="icon-size">123</div>
                      </div>
                      <div className="icon-outLine">
                        <div className="icon-size">123</div>
                      </div>
                      <div className="icon-outLine">
                        <div className="icon-size">123</div>
                      </div>
                    </div>
                  </div>


                  <div className="img-row">
                    <div className="patent-img-row">
                      <div className="patent-imgSize">
                        <div className="icon-outLine">
                          <div className="icon-size">b123</div>
                        </div>
                        <div className="icon-outLine">
                          <div className="icon-size">123</div>
                        </div>
                        <div className="icon-outLine">
                          <div className="icon-size">123</div>
                        </div>
                        <div className="icon-outLine">
                          <div className="icon-size">123</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="img-row">
                    <div className="patent-img-row">
                      <div className="patent-imgSize">
                        <div className="icon-outLine">
                          <div className="icon-size">c123</div>
                        </div>
                        <div className="icon-outLine">
                          <div className="icon-size">123</div>
                        </div>
                        <div className="icon-outLine">
                          <div className="icon-size">123</div>
                        </div>
                        <div className="icon-outLine">
                          <div className="icon-size">123</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="img-row">
                    <div className="patent-img-row">
                      <div className="patent-imgSize">
                        <div className="icon-outLine">
                          <div className="icon-size">c123</div>
                        </div>
                        <div className="icon-outLine">
                          <div className="icon-size">123</div>
                        </div>
                        <div className="icon-outLine">
                          <div className="icon-size">123</div>
                        </div>
                        <div className="icon-outLine">
                          <div className="icon-size">123</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="img-row">
                    <div className="patent-img-row">
                      <div className="patent-imgSize">
                        <div className="icon-outLine">
                          <div className="icon-size">c123</div>
                        </div>
                        <div className="icon-outLine">
                          <div className="icon-size">123</div>
                        </div>
                        <div className="icon-outLine">
                          <div className="icon-size">123</div>
                        </div>
                        <div className="icon-outLine">
                          <div className="icon-size">123</div>
                        </div>
                      </div>
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

export default Patent;