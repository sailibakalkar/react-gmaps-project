import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Home from './pages/Home';
// import Reports from './pages/Reports';
// import Products from './pages/Products';
import Address from "./Pages/Address"
import Bureau from "./Pages/Bureau"
import Email from "./Pages/Email"
import Pan from "./Pages/Pan"
import Ip from "./Pages/Ip"
import Phone from "./Pages/Phone"
import Cluster from "./Pages/Cluster"



function App() {
  return (
    
      <Router>
        <Navbar />
         <Switch >
          <Route path='/address' exact component={Address} style={{width:"50%"}}/>
          <Route path='/bureaurecords' component={Bureau} />
          <Route path='/emailmatching' component={Email} />
          <Route path='/ipmatching' component={Ip} />
          <Route path='/panmatching' component={Pan} />
          <Route path='/phonematching' component={Phone} />
          <Route path='/cluster' component={Cluster} />
        </Switch>
      </Router>
      );
}

export default App;