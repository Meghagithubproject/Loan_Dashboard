import React from "react";
import Loan_Dashboard from "./Loan_Dashboard";
import "./Navigation.css";
import Profile from "./Profile";
import {
  Link,
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Account_info from "./Account_info";

const Navigation = (props) => {
  return (
    <div className="grid">
      <h3 className="h">Loan Dashboard</h3>
      <div className="logo">
        <label>
          <span className="span"> LOGO | </span> Project Name
        </label>
      </div>

      <div className="list">
        <br />

        <Router>
          <nav>
            <NavLink exact activeClassName="active" to="/Loan_Dashboard">
              Loan_Dashboard
            </NavLink>
            <br />
            <br />
            <Link to="/Profile">Profile</Link>
            <br />
            <br />
            <Link to="/Account_info">Account Info</Link>
          </nav>

          <Routes>
            <Route
              exact
              path="/Loan_Dashboard"
              component={<Loan_Dashboard></Loan_Dashboard>}
            ></Route>
            <Route path="/Profile" element={<Profile></Profile>}></Route>
            <Route path="/Account_info" element={<Account_info></Account_info>}></Route>
          </Routes>
        </Router>
      </div>

      <Loan_Dashboard></Loan_Dashboard>
    </div>
  );
};

export default Navigation;
