import React, { useEffect, useState } from "react";
import "../App.css";
import ClientService from "../services/ClientService";
import { NavLink, useNavigate } from "react-router-dom";

const ListClientComponent = () => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchClients();
    console.log("hello");
  }, []);

  const fetchClients = () => {
    ClientService.getClients()
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.error("Error fetching clients:", error);
      });
  };

  const selectClient = (client) => {
    setSelectedClient(client);
    navigate(`/ClientManagement/readService/findById/?id=${client.id}`);

    // return <Navigate to={`/readService/findById/${client.id}`} />;
  };

  const deleteClient = (id) => {
    ClientService.deleteClient(id)
      .then(() => {
        setClients((prevClients) =>
          prevClients.filter((client) => client.id !== id)
        );
        setSelectedClient(null);
        console.log("Client deleted successfully.");
      })
      .catch((error) => {
        console.error("Error deleting client:", error);
      });
  };
  // const deleteClient = (id) => {
  //   return new Promise((resolve, reject) => {
  //     ClientService.deleteClient(id)
  //       .then(() => {
  //         setClients((prevClients) =>
  //           prevClients.filter((client) => client.id !== id)
  //         );
  //         setSelectedClient(null);
  //         console.log("Client deleted successfully.");
  //         resolve(); // Resolve the promise after successful deletion
  //       })
  //       .catch((error) => {
  //         console.error("Error deleting client:", error);
  //         reject(error); // Reject the promise if there's an error
  //       });
  //   });
  // };

  const updateClient = (id) => {
    console.log("Update client with id:", id);
    navigate(
      `/ClientManagement/updateService/updateExistingClientRecord/${id}`
    );
  };

  return (
    <div>
      <h2 className="text-center">Clients List</h2>
      <NavLink to="/ClientManagement/createService/addNewClients">
        <button>Add new Client</button>
      </NavLink>
      <div className="table-container">
        <table className="table table-stripped table bordered">
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Main Contact Person</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr
                key={client.id}
                onClick={() => selectClient(client)}
                className={selectedClient === client ? "selected" : ""}
              >
                <td>{client.name}</td>
                <td>{client.mainContactPerson}</td>
                <td>{client.country}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteClient(client.id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      updateClient(client.id);
                    }}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* {selectedClient && (
        <div>
          <h3>Selected Client:</h3>
          <p>Client Name: {selectedClient.name}</p>
          <p>Main Contact Person: {selectedClient.mainContactPerson}</p>
          <p>Address: {selectedClient.address}</p>
          <p>City: {selectedClient.city}</p>
          <p>Country: {selectedClient.country}</p>
          <p>gstNumber: {selectedClient.gstNumber}</p>
          <p>email: {selectedClient.email}</p>
          <p>phone: {selectedClient.phone}</p>
          <p>isDeleted: {selectedClient.deleted.toString()}</p>
          <Link to={`/readService/findByIds/${selectedClient.id}`}>
            View Details
          </Link>
        </div>
      )} */}
    </div>
  );
};

export default ListClientComponent;
