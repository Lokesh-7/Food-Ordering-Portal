/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Buyerhome from './components/buyer/buyer_home';
import Buyerprofile from './components/buyer/buyer_profile';
import Buyershop from './components/buyer/buyer_shop';
import Orderpage from './components/buyer/orders_page';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Vendorstats from './components/vendor/stats';
import Vendorhome from './components/vendor/vendorhome';
import Vendormenu from './components/vendor/vendormenu';
import VendorOrderpage from './components/vendor/vendororder';
import Vendorprofile from './components/vendor/vendorprofile';
class App extends Component {
  render() {    
    return (
      <Router>
      <div className="container">
        <br/>
        <Route path="/" exact component={Home}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/vendor/home" exact component={Vendorhome}/>
        <Route path="/buyer/home" exact component={Buyerhome}/>
        <Route path="/vendor/profile" exact component={Vendorprofile}/>
        <Route path="/buyer/profile" exact component={Buyerprofile}/>
        <Route path="/vendor/menu" exact component={Vendormenu}/>
        <Route path="/buyer/shop" exact component={Buyershop}/>
        <Route path="/buyer/orders" exact component={Orderpage} />
        <Route path="/vendor/orders" exact component={VendorOrderpage} />
        <Route path="/vendor/stats" exact component={Vendorstats} />
      </div>
    </Router>
    );
  }
}

export default App;
