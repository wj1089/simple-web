import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/main/Home';
import Company from './components/company/Company';
import Business from './components/business/Business';
import Contact from './components/contact/Contact';

const Page = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/company" component={Company} />
        <Route path="/business" component={Business} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  )
};

export default Page;