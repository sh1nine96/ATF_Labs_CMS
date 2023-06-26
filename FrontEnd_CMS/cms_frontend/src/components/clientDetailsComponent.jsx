import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ClientService from "../services/ClientService";
import "../css/ClientDetailsComponent.css";

const ClientDetailsComponent = () => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  const [client, setClient] = useState(null);

  useEffect(() => {
    if (id) {
      ClientService.getClientById(id)
        .then((response) => {
          setClient(response.data);
        })
        .catch((error) => {
          console.error("Error fetching client details:", error);
        });
    }
  }, [id]);

  if (!client) {
    return <div>Loading....</div>;
  }

  return (
    <div className="client-details-container">
      <h3 className="text-center">Selected Client:</h3>
      <table className="client-details-table">
        <tbody>
          <tr>
            <td>Client Name:</td>
            <td>{client.name}</td>
          </tr>
          <tr>
            <td>Main Contact Person:</td>
            <td> {client.mainContactPerson}</td>
          </tr>
          <tr>
            <td>Address: </td>
            <td> {client.address}</td>
          </tr>
          <tr>
            <td>City: </td>
            <td>{client.city}</td>
          </tr>
          <tr>
            <td>Country: </td>
            <td>{client.country}</td>
          </tr>
          <tr>
            <td>gstNumber: </td>
            <td>{client.gstNumber}</td>
          </tr>

          <tr>
            <td>email: </td>
            <td>{client.email}</td>
          </tr>
          <tr>
            <td>phone: </td>
            <td>{client.phone}</td>
          </tr>

          <tr>
            <td>isDeleted: </td>
            <td>{client.deleted.toString()}</td>
          </tr>
        </tbody>
      </table>
      <div className="text-center">
        <NavLink to="/ClientManagement/createService/addNewInvoices/">
          <button
            className="btn btn-primary generate-invoice-button"
            onClick={() => {
              // Handle generate invoice logic
            }}
            style={{ marginTop: "20px" }}
          >
            Generate Invoice
          </button>
        </NavLink>

        {/* <NavLink to="/http://localhost:8080/ClientManagement/readService/listAll">
          hello
        </NavLink> */}
      </div>
    </div>
  );
};

export default ClientDetailsComponent;
