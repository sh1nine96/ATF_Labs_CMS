import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ClientService from "../services/ClientService";
import "../css/ClientDetailsComponent.css";
import { useNavigate } from "react-router-dom";

const ClientDetailsComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const clientId = new URLSearchParams(location.search).get("id");
  const [client, setClient] = useState(
    null
    // pathname: "/ClientManagement/createService/addNewInvoices/",
    // state: { clientId: null },
  );

  // useEffect(() => {
  //   if (clientId && !client.state.clientId) {
  //     ClientService.getClientById(clientId)
  //       .then((response) => {
  //         // console.log(response.data);
  //         setClient({ ...client, state: { clientId: response.data } });
  //         // console.log(client);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching client details:", error);
  //       });
  //   }
  // }, [clientId, client]);

  // console.log(client, clientId);

  useEffect(() => {
    if (clientId && !client) {
      ClientService.getClientById(clientId)
        .then((response) => {
          setClient(response.data);
          // console.log(response.data);
        })
        .catch((error) => {
          console.log("Error fetching client details: ", error);
        });
    }
    // console.log("Hello", client);
  }, [clientId, client]);

  console.log(clientId);

  if (!client) {
    return <div>Loading....</div>;
  }

  const handleGenerateInvoice = () => {
    navigate("/ClientManagement/createService/addNewInvoices", {
      state: {
        clientId: client.id,
        clientName: client.name,
      },
    });
    console.log(clientId, client);
  };

  // const clientInfo = client.state.clientId;
  // console.log(clientInfo);
  // console.log(clientId);

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
        <button
          onClick={
            handleGenerateInvoice
            // navigate("/ClientManagement/createService/addNewInvoices", {
            //   state: {
            //     clientId: client.id,
            //     clientName: client.name,
            //   },
            // })
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
