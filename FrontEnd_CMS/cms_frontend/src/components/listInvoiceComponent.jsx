import React, { useEffect, useState } from "react";
import "../App.css";
import InvoiceService from "../services/InvoiceService";
import { NavLink, useNavigate } from "react-router-dom";

const ListInvoiceComponent = () => {
  //   const [invoice, setInvoice] = useState([]);
  //   const [selectedInvoice, setSelectedInvoice] = useState(null);
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     fetchInvoices();
  //     console.log("hello");
  //   }, []);
  //   const fetchInvoices = () => {
  //     InvoiceService.getInvoices()
  //       .then((response) => {
  //         setInvoice(response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching invoices:", error);
  //       });
  //   };
  //   const selectInvoice = (invoice) => {
  //     setSelectedInvoice(invoice);
  //     navigate(`/ClientManagement/readService/findInvoiceById/?id=${invoice.id}`);
  //     // return <Navigate to={`/readService/findById/${client.id}`} />;
  //   };
  //   const deleteInvoice = (id) => {
  //     InvoiceService.deleteInvoice(id)
  //       .then(() => {
  //         setInvoice((prevInvoices) =>
  //           prevInvoices.filter((invoice) => invoice.id !== id)
  //         );
  //         setSelectedInvoice(null);
  //         console.log("Invoice deleted successfully.");
  //       })
  //       .catch((error) => {
  //         console.error("Error deleting invoice:", error);
  //       });
  //   };
  //   const updateInvoice = (id) => {
  //     console.log("Update invoice with id:", id);
  //     navigate(
  //       `/ClientManagement/updateService/updateExistingInvoiceRecord/${id}`
  //     );
  //   };
  //   return (
  //     <div>
  //       <h2 className="text-center">Invoices List</h2>
  //       <NavLink to="/ClientManagement/createService/addNewInvoices">
  //         <button>Add new Invoice</button>
  //       </NavLink>
  //       <div className="table-container">
  //         <table className="table table-stripped table bordered">
  //           <thead>
  //             <tr>
  //               <th>Client Name</th>
  //               <th>Amount</th>
  //               <th>Status</th>
  //               <th>Actions</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {invoice.map((invoice) => (
  //               <tr
  //                 key={invoice.id}
  //                 onClick={() => selectedInvoice(invoice)}
  //                 className={selectInvoice === invoice ? "selected" : ""}
  //               >
  //                 <td>{client.name}</td>
  //                 <td>{invoice.amount}</td>
  //                 <td>{invoice.currency}</td>
  //                 <td>
  //                   <button
  //                     className="btn btn-danger"
  //                     onClick={(e) => {
  //                       e.stopPropagation();
  //                       deleteInvoice(invoice.id);
  //                     }}
  //                   >
  //                     Delete
  //                   </button>
  //                   <button
  //                     className="btn btn-primary"
  //                     onClick={(e) => {
  //                       e.stopPropagation();
  //                       updateInvoice(invoice.id);
  //                     }}
  //                   >
  //                     Update
  //                   </button>
  //                 </td>
  //               </tr>
  //             ))}
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
  //   );
};

export default ListInvoiceComponent;
