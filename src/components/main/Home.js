import React from 'react';
import Nav from '../navigation/Nav';
import Footer from '../footer/Footer';
import './home.css';

const Home = () => {
  
  return ( 
    <>
      <div className="full-screen">

        <div className="screen-layout">
          <div className="lay-top" />
          <div className="lay-middle" />
          <div className="lay-bottom">
            <div className="lay-bottom2" />
          </div>
        </div>

        <div className="screen-center">
          <div className="outSilde-image" />
          <header>
            <Nav />
          </header>

          <main className="main-content">
            <div className="content-area">
              <div className="content-topText">
                <h3 className="content-logoText">Logo</h3>
                <h3 className="content-logoText">모리아타운</h3>
                <h1 className="content-mainText">Depth-sensing cameras not only capture 2D image color and brightness information of a scene, but also obtain depth data of the objects in it. </h1>
              </div>

              <div className="inside-content">
                {/* <h1 className="demo-words"> Main Content </h1> */}
                <div className="inside-top">
                  <div className="b2b">B2B</div>
                  <div className="b2c">B2C</div>
                </div>

                <div className="inside-bottom">
                  <div className="about-us">About Us</div>
                  <div className="two-image">IMG</div>
                  <div className="contect">Contect</div>
                </div>
              </div>
            </div>
          </main>
          
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;