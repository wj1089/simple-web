import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './index.css';

import Home from './components/main/Home';
import Company from './components/company/Company';
import Business from './components/business/Business';
import Platform from './components/business/platform/Platform';

import Contact from './components/business/Contact';
import Nav from './components/navigation/Nav';
import Mission from './components/company/Mission';
import Patent from './components/company/Patent';

import SingleCamera from './components/business/embadded/SingleCamera';
import DualCamera from './components/business/embadded/DualCamera';
import MotionSen from './components/business/embadded/MotionSen';
import ProjectSolu from './components/business/embadded/ProjectSolu';
import SmartCar from './components/business/embadded/SmartCar';
import SmartRefri from './components/business/embadded/SmartRefri';
import CameraSolu from './components/business/embadded/CameraSolu';
import LiveVideo from './components/business/embadded/LiveVideo';

import Igre from './components/business/platform/Igre';
import Pefem from './components/business/platform/Pefem';
import PefemCat from './components/business/platform/PefemCat';

const Page = () => {
  return (
    <div>
      <Nav />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/company" component={Company} />
          <Route path="/about" component={Company} />
          <Route path="/mission" component={Mission} />
          <Route path="/patent" component={Patent} />

          <Route path="/business" component={Business} />
          <Route path="/singleCamera" component={SingleCamera} />
          <Route path="/dualCamera" component={DualCamera} />
          <Route path="/motionSen" component={MotionSen} />
          <Route path="/projectSolu" component={ProjectSolu} />
          <Route path="/smartCar" component={SmartCar} />
          <Route path="/cameraSolu" component={CameraSolu} />
          <Route path="/smartRefri" component={SmartRefri} />
          <Route path="/liveVideo" component={LiveVideo} />

          <Route path="/platform" component={Platform} />
          <Route path="/igre" component={Igre} />
          <Route path="/pefem" component={Pefem} />
          <Route path="/pefemCat" component={PefemCat} />

          <Route path="/contact" component={Contact} />

        </Switch>
      </div>
    </div>
  )
};

export default Page;