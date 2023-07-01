import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InvoiceService from "../services/InvoiceService";
import "../css/listInvoiceComponent.css";

const ListInvoiceComponent = () => {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await InvoiceService.getInvoices();
        const formattedInvoices = response.data
          .filter((invoice) => invoice.deleted === false)
          .map((invoice) => ({
            ...invoice,
            date: formatDate(invoice.date),
          }));

        setInvoices(formattedInvoices);
        console.log(formattedInvoices);
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

  const handleDelete = async (id) => {
    try {
      await InvoiceService.deleteInvoice(id);
      console.log(`invoice with ${id} is deleted`, id);
      // refresh the invoice after deleting
      // await InvoiceService.getInvoices();
      // const formattedInvoices = response.data.map((invoice) => ({
      //   ...invoice,
      //   date: formatDate(invoice.date),
      // }));

      setInvoices((prevInvoices) =>
        prevInvoices.filter((invoice) => invoice.id !== id)
      );
    } catch (error) {
      console.error(`Error deleting the invoice with ID: ${id}`, error);
    }
  };

  const deleteInvoiceById = (id) => {
    InvoiceService.deleteInvoice(id)
      .then(() => {
        setInvoices((prevInvoices) =>
          prevInvoices.filter((invoice) => invoice.id !== id)
        );
        // setSelectedClient(null);
        console.log(`Invoice with ${id} deleted successfully`);
      })
      .catch((error) => {
        console.error("Error deleting invoice:", error);
      });
  };

  const handleGenerateInvoice = () => {
    navigate("/ClientManagement/createService/addNewInvoices", {
      // state: {
      //   clientId: client.id,
      //   clientName: client.name,
      // },
    });
    // console.log(clientId, client);
  };

  const updateInvoice = (id) => {
    console.log("Update Invoice with id:", id);
    navigate(
      `/ClientManagement/updateService/updateExistingInvoiceRecord/${id}`
    );
  };

  return (
    <div className="invoice-table-container">
      <div className="header-container">
        <h3 className="text-center ">Invoices</h3>
        <button className="text-left" onClick={handleGenerateInvoice}>
          Generate Invoice
        </button>
      </div>
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
            <th>Actions</th>
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
              <td>
                <button
                  className="action-button"
                  // onClick={() => handleDelete(invoice.id)}
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteInvoiceById(invoice.id);
                  }}
                >
                  D
                </button>
                <button
                  className="action-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    updateInvoice(invoice.id);
                  }}
                >
                  U
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListInvoiceComponent;
