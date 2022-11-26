import React, { Fragment, useEffect, useState } from "react";
import { Link, Router, Route } from "react-router-dom";
import "./Loan_dashboard.css";

const Loan_Dashboard = (props) => {
  const [recorders, setRecorders] = useState([]);
  const [modeldata, setModeldata] = useState({
    userId: "",
    first: "",
    last: "",
    Resion: "",
    Email: "",
  });
  const getuser = () => {
    fetch("http://localhost:3000/Users")
      .then((responce) => responce.json())
      .then((res) => setRecorders(res));
  };

  useEffect(() => {
    getuser();
  }, []);


  const showuser = (loan_id) => {
      
    fetch(`http://localhost:3000/Users/${loan_id}`)
      .then((responce) => responce.json())
      .then((res) => setModeldata(res));
  };
  
  return (
    <Fragment>
      <div className="wel">
        <h4>
          <samp className="sam">Welcome -</samp> User name
        </h4>

        <div>
          <table className="table">
            <tr>
              <th className="th">Loan Id</th>
              <th className="th">Loan Purpose</th>
              <th className="th">Status</th>
              <th className="th">Option</th>
            </tr>
            <tbody>
              {recorders.map((users, index) => (
                <tr key={index}>
                  <td>
                    <Link to="/Profile"  >
                      {users.loan_id}
                    </Link>
                  </td>
                  <td>{users.purpose}</td>
                  <td>{users.status}</td>
                  {users.options ? (
                    <button onClick={showuser(users.loan_id)}>Edit</button>
                  ) : (
                    <button>Save</button>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

                    
      
    </Fragment>
  );
};

export default Loan_Dashboard;
