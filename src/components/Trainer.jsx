import React, { Fragment, useState, useEffect } from 'react';
import {
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import PrivateRoute from '../routes/PrivateRoute.jsx';
import PublicRoute from '../routes/PublicRoute.jsx';

import ClientContainer from './ClientContainer.jsx';
import ClientsContainer from './ClientsContainer.jsx';
import Header from './Header.jsx';

function Trainer(props) {
  
  // get trainer info and client info for each client
  fetch('/api/trainers/dashboard')
    .then((res) => res.json())
    .then((data) => {
      const clients = data;
      console.log(clients);
    });

  return (
    <div>
      <h1>Trainer Page</h1>
      <Header />
      <nav>
          <ul>
            <li>  
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/myclients/dennis">Dennis</Link>
            </li>
            <li>
              <Link to="/myclients/heidi">Heidi</Link>
            </li>
          </ul>
        </nav>
      <Switch>
        {/* how to pass clients as props to ClientsContainer? or if not possible, use context */}
        <Route path="/dashboard" render={() => <ClientsContainer />} />
        <Route path="/myclients/:client" component={ClientContainer} />
      </Switch>
    </div>
  )
}

export default Trainer;