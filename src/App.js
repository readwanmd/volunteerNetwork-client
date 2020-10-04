import React, {createContext, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home';
import VolenteerRegistration from './Components/VolenteerRegistration/VolenteerRegistration';
import EventTasks from './Components/EventTasks/EventTasks';
import Admin from './Components/Admin/Admin';
import CreateEvent from './Components/CreateEvent/CreateEvent';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/home">
            <Home />
          </Route>
          
          <PrivateRoute path="/vregistration/:id">
            <VolenteerRegistration />
          </PrivateRoute>
          
          <PrivateRoute path="/event">
            <EventTasks />
          </PrivateRoute>

          <PrivateRoute path="/events">
            <Redirect to="/event" />
          </PrivateRoute>
          
          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>

          <Route path="/create-event">
            <CreateEvent />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
