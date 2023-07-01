// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListClientComponent from "./components/listClientComponent";
import ClientDetailsComponent from "./components/clientDetailsComponent";
import UpdateClientComponent from "./components/updateClientComponent";
import AddClientComponent from "./components/addClientComponent";
import WelcomePageController from "./components/welcomePageController";
// import InvoiceFormComponent from "./components/invoiceFormComponent";
import ListInvoiceComponent from "./components/listInvoiceComponent";
import AddInvoiceComponent from "./components/addInvoiceComponent";
import UpdateInvoiceComponent from "./components/updateInvoiceComponent";

let clientId;
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<WelcomePageController />} />
        <Route
          exact
          path="/ClientManagement/readService/listAll"
          element={<ListClientComponent />}
        />

        <Route
          exact
          path="/ClientManagement/readService/findById"
          element={<ClientDetailsComponent />}
        />
        <Route
          exact
          path="/ClientManagement/updateService/updateExistingClientRecord/:id"
          element={<UpdateClientComponent />}
        />
        <Route
          exact
          path="/ClientManagement/updateService/updateExistingInvoiceRecord/:id"
          element={<UpdateInvoiceComponent />}
        />
        <Route
          exact
          path="/ClientManagement/createService/addNewClients"
          element={<AddClientComponent />}
        />
        {/* <Route
          exact
          path="/ClientManagement/createService/addNewInvoices/"
          element={<InvoiceFormComponent />}
        /> */}
        <Route
          exact
          path="/ClientManagement/readService/listAllInvoices/"
          element={<ListInvoiceComponent />}
        />
        <Route
          exact
          path="/ClientManagement/createService/addNewInvoices/"
          element={<AddInvoiceComponent clientId={clientId} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
