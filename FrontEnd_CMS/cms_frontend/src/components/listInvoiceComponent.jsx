import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InvoiceService from "../services/InvoiceService";
import "../css/listInvoiceComponent.css";

const ListInvoiceComponent = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await InvoiceService.getInvoices();
        const formattedInvoices = response.data.map((invoice) => ({
          ...invoice,
          date: formatDate(invoice.date),
        }));
        setInvoices(formattedInvoices);
        // console.log(response.data.date);
      } catch (error) {
        console.error("Error fetching invoices: ", error);
      }
    };

    fetchInvoices();
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString(`en-IN`);
  };

  return (
    <div className="invoice-table-container">
      <h3 className="text-center">Invoices</h3>
      <table className="invoice-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
            <th>Invoice ID</th>
            <th>Client ID</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Bank Account</th>
            <th>Description</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.date}</td>
              <td>{invoice.status ? "Paid" : "Unpaid"}</td>
              <td>{invoice.id}</td>
              <td>{invoice.clientId.id}</td>
              <td>{invoice.amount}</td>
              <td>{invoice.currency}</td>
              <td>{invoice.selectedBankAccount}</td>
              <td>{invoice.description}</td>
              <td>{invoice.header}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListInvoiceComponent;
