import React from 'react';
import Nav from '../navigation/Nav';
import Footer from '../footer/Footer';
import './company.css';
// import '../main/home.css'
import '../footer/footer.css';


const Company = () => {

    return (
      <>
        <div className="full-screen-modal">
          <div className="screen-layouta">
            <div className="lay-top">
              <h1>image</h1>
            </div>
            <div className="lay-mid-first">
              <h1>About us</h1>
            </div>
            <div className="lay-mid-second">
              <h1>History</h1>
            </div>
            <div className="lay-mid-third">
              <h1>Ceo comment</h1>
            </div>
            <div className="lay-mid-forth">
              <h1>Partners</h1>
            </div>
            <div className="lay-mid-last">
              <h1>Footer</h1>
            </div>
          </div>



          <div className="screen-centera">
            <div className="outSilde-imagea" />
            <header>
              <Nav />
            </header>

            <main className="main-contenta">
              <h1>qq</h1>
            </main>
          
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      </>
    );
};

export default Company;