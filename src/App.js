import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import CheckOut from "./Components/CheckOut/CheckOut";
import AddAdmin from "./Components/DashboardPage/AddAdmin/AddAdmin";
import AddReviews from "./Components/DashboardPage/AddReviews/AddReviews";
import Admin from "./Components/DashboardPage/Admin/Admin";
import AllOrders from "./Components/DashboardPage/AllOrders/AllOrders";
import Dashboard from "./Components/DashboardPage/Dashboard/Dashboard";
import ManageServices from "./Components/DashboardPage/ManageServices/ManageServices";
import Home from './Components/HomePage/Home/Home';
import Login from "./Components/LoginPage/Login/Login";
import PrivateRoute from "./Components/LoginPage/PrivateRoute/PrivateRoute";
import NotFound from "./Components/NotFound/NotFound";


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/checkOut/:title">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <AddReviews></AddReviews>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/allOrders">
            <AllOrders></AllOrders>
          </PrivateRoute>
          <PrivateRoute path="/manage">
            <ManageServices></ManageServices>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
