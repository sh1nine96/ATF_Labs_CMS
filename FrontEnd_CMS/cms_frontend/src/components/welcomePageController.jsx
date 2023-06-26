import React from "react";
import { Link } from "react-router-dom";
import "../css/WelcomePageController.css";

const WelcomePageController = () => {
  return (
    <div className="text-center">
      <h1>Welcome to ATF Labs</h1>
      <div className="welcome-page">
        <Link className="box" to="/ClientManagement/readService/listAll">
          <h2>Clients</h2>
          <Link to="/ClientManagement/readService/listAll">Go to Clients</Link>
        </Link>
        <Link className="box" to="/ClientManagement/readService/listAll">
          <h2>Invoices</h2>
          <Link to="/ClientManagement/readService/listAll">Go to Invoices</Link>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePageController;
