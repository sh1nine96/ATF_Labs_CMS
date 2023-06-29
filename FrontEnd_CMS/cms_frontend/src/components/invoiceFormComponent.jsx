/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-const-assign */
import React, { useEffect, useState } from "react";
import "../css/InvoiceFormComponent.css";
import { useLocation } from "react-router-dom";
import InvoiceService from "../services/InvoiceService";

import ClientService from "../services/ClientService";

const InvoiceFormComponent = () => {
  const [clients, setClients] = useState([]);
  // const [selectedClient, setSelectedClient] = useState(null);
  const location = useLocation();
  // const { clientId, clientName } = location.state;
  // console.log(clientId, clientName);
  // console.log("Invoice Page", location);

  // console.log(clientId);
  // const searchParams = new URLSearchParams(location.search);
  // const id = searchParams.get("id") || localStorage.getItem("id");

  // useEffect(() => {
  //   const fetchClientDetails = async () => {
  //     try {
  //       const response = await ClientService.getClientById(clientId);
  //       const client = response.data;

  //       console.log({ client });
  //       console.log(typeof response.data);
  //       console.log("3");
  //       setClients(() => response.data.filter((data) => data.id === clientId));
  //       console.log(response);
  //       // response2 = response.data.filter((data) => data.id === id).pop();

  //       setClients(client);
  //       // setSelectedClient(client);
  //       setInvoiceData((prevData) => ({
  //         ...prevData,
  //         clientId: client.id,
  //         clientName: client.name,
  //       }));
  //       console.log(client.name);

  //       // console.log(clients[0].name);
  //     } catch (error) {
  //       console.error("Error fetching client details: ", error);
  //     }
  //   };

  //   if (clientId) {
  //     fetchClientDetails();
  //   }
  // }, [clientId]);

  // const fetchClientDetails = async () => {
  //   console.log("1");
  //   try {
  //     const response = await ClientService.getClients();
  //     setClients(response); // Update this line if needed
  //     const selectedClient = response.filter((client) => client.id === id);

  //     if (selectedClient) {
  //       setSelectedClient(selectedClient);
  //       setInvoiceData((prevData) => ({
  //         ...prevData,
  //         clientId: selectedClient.id,
  //         clientName: selectedClient.name,
  //       }));
  //     }
  //   } catch (error) {
  //     console.error("Error fetching client details: ", error);
  //   }
  // };

  // console.log("user effect");
  // if (selectedClient) {
  //   console.log("-1");
  //   console.log(selectedClient.id);
  //   setInvoiceData((prevData) => ({
  //     ...prevData,
  //     clientId: selectedClient.id || "",

  //     clientName: selectedClient.name || "",
  //   }));

  //   console.log(selectedClient.name, "Hello World");

  // if (id) {
  //   console.log("1");

  //   InvoiceService.getClientDetails(id)
  //     .then((response) => {
  //       console.log("2");
  //       setClient(response.data);
  //       console.log("3");
  //       console.log(client);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching clients details: ", error);
  //     });
  // }

  // const handleClientChange = (event) => {
  //   const clientId = event.target.value;
  //   const selectedClient = clients.find((client) => client.id === clientId);
  //   setSelectedClient(selectedClient);
  // };

  // console.log(clientId, clientName);

  if (!clients) {
    return <div>Loading.....</div>;
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInvoiceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    console.log("text");
    event.preventDefault();

    try {
      // Call the createInvoice function from your service
      const response = await InvoiceService.createInvoice(invoiceData);

      // Log the response or handle it as needed
      console.log("Invoice created:", response.data);
      console.log(response);
      // console.log(data);

      // Close the form after submission
      // onClose();
    } catch (error) {
      console.error("Error creating invoice:", error);
    }
    // Perform form submission AClogic here
    // You can access the invoiceData and client details to generate the invoice
    // For simplicity, let's just log the data
  };

  // const onClose = () => {};
  return (
    <div className="invoice-form-container">
      <h3>Generate Invoice</h3>
      <form onSubmit={handleSubmit}>
        {/* <div className="form-group">
          <label>Invoice ID:</label>
          <input
            type="text"
            name="invoiceId"
            value={invoiceData.invoiceId}
            readOnly
            className="form-control"
            required
          />
        </div> */}
        <div className="form-group">
          <label>Client ID:</label>
          <input
            type="text"
            name="clientId"
            value={invoiceData.clientId}
            readOnly
            className="form-control"
            required
          />
        </div>
        {/* <div className="form-group">
          <label>Select Client:</label>
          <select
            name="clientId"
            value={invoiceData.clientId}
            onChange={handleClientChange}
            className="form-control"
            required
          >
            <option value="">Select Client</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            ))}
          </select>
        </div> */}
        <div className="form-group">
          <label>Client Name:</label>
          <input
            type="text"
            name="clientName"
            value={invoiceData.clientName}
            readOnly
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="text"
            name="amount"
            value={invoiceData.amount}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Currency:</label>
          <input
            type="text"
            name="currency"
            value={invoiceData.currency}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Bank Account:</label>
          <select
            name="selectedBankAccount"
            value={invoiceData.selectedBankAccount}
            onChange={handleInputChange}
            className="form-control"
            required
          >
            <option value="">Select Bank Account</option>
            <option value="HDFC Bank">HDFC Bank</option>
            <option value="YES Bank">YES Bank</option>
          </select>
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={invoiceData.description}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Header:</label>
          <input
            type="text"
            name="header"
            value={invoiceData.header}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="text"
            name="date"
            value={invoiceData.date}
            readOnly
            className="form-control"
            required
          />
        </div>
        {/* Add more form fields as needed */}
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Generate
          </button>
          <button type="button" className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default InvoiceFormComponent;
