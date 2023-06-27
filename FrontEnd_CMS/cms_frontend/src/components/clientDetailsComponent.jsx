import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ClientService from "../services/ClientService";
import "../css/ClientDetailsComponent.css";
import { useNavigate } from "react-router-dom";

const ClientDetailsComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const clientId = new URLSearchParams(location.search).get("id");
  const [client, setClient] = useState({
    pathname: "/ClientManagement/createService/addNewInvoices/",
    state: { clientId: null },
  });

  useEffect(() => {
    if (clientId && !client.state.clientId) {
      ClientService.getClientById(clientId)
        .then((response) => {
          console.log(response.data);
          setClient({ ...client, state: { clientId: response.data } });
          console.log(client);
        })
        .catch((error) => {
          console.error("Error fetching client details:", error);
        });
    }
  }, [clientId, client]);

  useEffect(() => {
    console.log("Hello", client);
  }, [client]);

  if (!client.state.clientId) {
    return <div>Loading....</div>;
  }

  const clientInfo = client.state.clientId;

  return (
    <div className="client-details-container">
      <h3 className="text-center">Selected Client:</h3>
      <table className="client-details-table">
        <tbody>
          <tr>
            <td>Client Name:</td>
            <td>{clientInfo.name}</td>
          </tr>
          <tr>
            <td>Main Contact Person:</td>
            <td> {clientInfo.mainContactPerson}</td>
          </tr>
          <tr>
            <td>Address: </td>
            <td> {clientInfo.address}</td>
          </tr>
          <tr>
            <td>City: </td>
            <td>{clientInfo.city}</td>
          </tr>
          <tr>
            <td>Country: </td>
            <td>{clientInfo.country}</td>
          </tr>
          <tr>
            <td>gstNumber: </td>
            <td>{clientInfo.gstNumber}</td>
          </tr>

          <tr>
            <td>email: </td>
            <td>{clientInfo.email}</td>
          </tr>
          <tr>
            <td>phone: </td>
            <td>{clientInfo.phone}</td>
          </tr>

          <tr>
            <td>isDeleted: </td>
            <td>{clientInfo.deleted.toString()}</td>
          </tr>
        </tbody>
      </table>
      <div className="text-center">
        <button
          onClick={() =>
            navigate("/ClientManagement/createService/addNewInvoices", {
              state: {
                clientId: client.id,
                clientName: client.name,
              },
            })
          }
        >
          Generate Invoice
        </button>

        {/* <NavLink to="/http://localhost:8080/ClientManagement/readService/listAll">
          hello
        </NavLink> */}
      </div>
    </div>
  );
};

export default ClientDetailsComponent;
