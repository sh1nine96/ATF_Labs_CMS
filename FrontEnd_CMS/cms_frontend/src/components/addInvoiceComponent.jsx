import React, { useState } from "react";
import InvoiceService from "../services/InvoiceService";
import "../css/AddInvoiceComponent.css";
import { useNavigate } from "react-router-dom";

const AddInvoiceComponent = () => {
  const getCurrentDate = () => {
    const currentDate = new Date().toISOString().split("T")[0];
    return currentDate;
  };

  const [clientId, setClientId] = useState("");
  const navigate = useNavigate();

  const [invoice, setInvoice] = useState({
    amount: "",
    date: getCurrentDate(),
    currency: "",
    selectedBankAccount: "",
    description: "",
    header: "",
    status: true || false,
    clientId: {
      id: "",
      name: "",
    },
    deleted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "clientId") {
      setInvoice((prevInvoice) => ({
        ...prevInvoice,
        clientId: {
          ...prevInvoice.clientId.id,
          id: value,
        },
      }));
    } else {
      setInvoice((prevInvoice) => ({
        ...prevInvoice,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    console.log("Hi");
    e.preventDefault();
    const updatedInvoice = {
      ...invoice,
      clientId: {
        id: invoice.clientId.id,
        name: invoice.clientId.name,
      },
    };
    console.log(updatedInvoice);
    try {
      await InvoiceService.createInvoice(updatedInvoice);
      console.log("Invoice created succesfully");
      navigate("/ClientManagement/readService/listAllInvoices");
      setInvoice({
        amount: "",
        date: getCurrentDate(),
        currency: "",
        selectedBankAccount: "",
        description: "",
        header: "",
        status: true || false,
        clientId: {
          id: clientId,
          name: invoice.clientId.name,
        },
        deleted: false,
      });
      console.log(invoice, invoice.clientId, invoice.clientId.name);
    } catch (error) {
      console.error("Error creating invoice: ", error);
    }
  };

  console.log(invoice);

  return (
    <div className="add-invoice-container">
      <h3>Add Invoices</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date: </label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={invoice.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Client ID: </label>
          <input
            type="number"
            name="clientId"
            value={invoice.clientId.id}
            onChange={handleChange}
            className="form-control"
            required
          ></input>
        </div>
        <div className="form-group">
          <label>Amount: </label>
          <input
            type="number"
            className="form-control"
            name="amount"
            value={invoice.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Currency: </label>
          <input
            type="text"
            className="form-control"
            name="currency"
            value={invoice.currency}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Bank Account: </label>
          <select
            name="selectedBankAccount"
            className="form-control"
            value={invoice.selectedBankAccount}
            onChange={handleChange}
            required
          >
            <option value="">Select Bank Account</option>
            <option value="Yes Bank">Yes Bank</option>
            <option value="HDFC Bank">HDFC Bank</option>
          </select>
        </div>
        <div className="form-group">
          <label>Header: </label>
          <input
            type="text"
            className="form-control"
            name="header"
            value={invoice.header}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description: </label>
          <textarea
            name="description"
            className="form-control"
            value={invoice.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Save Invoice
        </button>
      </form>
    </div>
  );
};

export default AddInvoiceComponent;
